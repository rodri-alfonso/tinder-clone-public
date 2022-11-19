import { getDoc, getDocs } from 'firebase/firestore'

export function getFormatedTime(timestamp = new Date()) {
	const [date, month, year] = [timestamp.getDate(), timestamp.getMonth() + 1, timestamp.getFullYear()]

	return `${date}/${month}/${year}`
}

export const isSSR = typeof window === 'undefined'
export const isIos = !isSSR && Boolean(navigator.userAgent.match(/iPhone|iPad|iPod/i))

export const fetchDocuments = async (docRef) => {
	let documents = []

	await getDocs(docRef).then((dbDocuments) => {
		for (let i = 0; i < dbDocuments.docs.length; i++) {
			documents.push(dbDocuments.docs[i].data())
		}
	})

	return documents
}

export const fetchDocument = async (docRef) => {
	const response = await getDoc(docRef)
	const document = await response.data()

	return document
}
