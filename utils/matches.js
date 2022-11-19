import { addDoc, arrayUnion, setDoc } from 'firebase/firestore'
import { MATCHES_REF, MATCHES_BY_ID_REF, MATCH_CARDS_BY_ID_REF } from 'firebase-config'

const createMatch = async (userId, matchedCard) => {
	return await addDoc(MATCHES_REF, {
		matchedUser: matchedCard,
		matchedIds: [userId, matchedCard.id],
		timestamp: Date(),
		messages: [],
	})
}

export const handleLike = async (user, card, setMatch) => {
	setDoc(MATCH_CARDS_BY_ID_REF(card.id), { liked: arrayUnion(user.id) }, { merge: true }).then(() => {
		if (user.liked.includes(card.id)) {
			createMatch(user.id, card).then((matchDb) => {
				return setMatch({ ...card, matchId: matchDb.id })
			})
		}
	})
}

export const handlePass = async (matchId, userId) =>
	setDoc(MATCH_CARDS_BY_ID_REF(matchId), { passed: arrayUnion(userId) }, { merge: true })
