import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore, collection, query, doc } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

//set your firebase config
const firebaseConfig = {
	apiKey: '',
	authDomain: '',
	projectId: '',
	storageBucket: '',
	messagingSenderId: '',
	appId: '',
}

export const app = !getApps.length ? initializeApp(firebaseConfig) : getApp()
export const db = getFirestore()
export const auth = getAuth()
export const provider = new GoogleAuthProvider()

export const MATCH_CARDS_REF = query(collection(db, 'match-cards'))
export const MATCH_CARDS_BY_ID_REF = (id) => doc(db, 'match-cards', id)
export const MATCHES_REF = query(collection(db, 'matches'))
export const MATCHES_BY_ID_REF = (id) => doc(db, 'matches', id)
