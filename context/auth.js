import { auth, provider } from 'firebase-config'
import { onAuthStateChanged } from 'firebase/auth'
import { useReducer, createContext, useContext, useEffect, useState } from 'react'
import { signInWithPopup, signOut as googleSignOut } from 'firebase/auth'
import { useLocaleStorage } from 'hooks/useLocaleStorage'
import { STORAGE_TINDER_CLONE_KEY } from 'utils/constants'

const SET_AUTH = 'SET_AUTH'

function authReducer(state, action) {
	switch (action.type) {
		case SET_AUTH:
			return { ...state, user: action.payload }
		default:
			return state
	}
}

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
	const { storage } = useLocaleStorage(STORAGE_TINDER_CLONE_KEY)

	const [state, dispatch] = useReducer(authReducer, { user: storage })
	const { user } = state

	return <AuthContext.Provider value={{ dispatch, user }}>{children}</AuthContext.Provider>
}

function useAuthState() {
	const context = useContext(AuthContext)
	const { dispatch, user } = context
	const [isLoading, setIsLoading] = useState(true)
	const { setStorage } = useLocaleStorage(STORAGE_TINDER_CLONE_KEY)

	const FIRST_NAME_INDEX = 0

	useEffect(() => {
		const setAuth = (user) => {
			const payload = {
				displayName: user.displayName,
				firstName: user.displayName.split(' ')[FIRST_NAME_INDEX],
				email: user.email,
				id: user.uid,
				photoUrl: user.photoURL,
				passed: [],
				//the IDs here are ONLY to simplify the demo. They should NOT be here.
				liked: [' 9fb2e90f-513f-4148-ae75-853b50e5e33b', 'ea77fcb4-4799-438c-925b-9e3d426ec85f'],
			}

			dispatch({
				type: SET_AUTH,
				payload,
			})

			setStorage(payload)
		}

		onAuthStateChanged(auth, (firebaseUser) => {
			if (firebaseUser && !user) setAuth(firebaseUser)
			setIsLoading(false)
		})
	}, [])

	return { user, isLoading }
}

function useAuth() {
	const context = useContext(AuthContext)
	const { user, dispatch } = context
	const { clearStorage } = useLocaleStorage(STORAGE_TINDER_CLONE_KEY)

	const signIn = () => {
		signInWithPopup(auth, provider).catch((err) => alert(err.message))
	}

	const signOut = () => {
		googleSignOut(auth)
		dispatch({
			type: SET_AUTH,
			payload: null,
		})
		clearStorage()
	}

	return { signIn, signOut, user }
}

export { AuthProvider, useAuthState, useAuth }
