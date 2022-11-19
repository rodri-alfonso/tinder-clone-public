import { onSnapshot } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { MATCHES_BY_ID_REF } from 'firebase-config'

export function useMessagesState(collectionId, initialMessages) {
	const [messages, setMessages] = useState(initialMessages)

	useEffect(() => {
		onSnapshot(MATCHES_BY_ID_REF(collectionId), (doc) => {
			setMessages(doc.data().messages)
		})
	}, [collectionId])

	return messages
}
