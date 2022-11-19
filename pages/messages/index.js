import styled from 'styled-components'
import MatchesList from 'components/pages/messages/MatchesList'
import ChatsList from 'components/pages/messages/ChatsList'
import { useAuth } from 'context/auth'
import MessagesEmptyState from 'components/EmptyState/Messages'

import { collection, query, getDocs } from 'firebase/firestore'
import { db } from 'firebase-config'
import withAuth from 'utils/withAuth'

export async function getServerSideProps() {
	const docRef = query(collection(db, 'matches'))

	let matches = []
	await getDocs(docRef).then((match) => {
		for (let i = 0; i < match.docs.length; i++) {
			matches.push({ ...match.docs[i].data(), matchId: match.docs[i].id })
		}
	})

	return {
		props: {
			matches,
		},
	}
}

const getUserMatches = (matches, userId) => {
	const userMatches = matches.filter((match) => match.matchedIds.includes(userId))

	return {
		hasMatches: userMatches.length,
		withoutMessages: userMatches.filter((match) => !match.messages.length),
		withMessages: userMatches.filter((match) => match.messages.length > 0),
	}
}

function Messages({ matches }) {
	const { user } = useAuth()
	const { withMessages, withoutMessages, hasMatches } = getUserMatches(matches, user.id)

	if (!hasMatches) return <MessagesEmptyState />

	return (
		<Container>
			<MatchesList matches={withoutMessages} />
			<ChatsList chats={withMessages} />
		</Container>
	)
}

export default withAuth(Messages)

const Container = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding-left: 0.6rem;
`
