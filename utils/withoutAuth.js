import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuthState } from 'context/auth'
import Spinner from 'components/Spinner'

function withoutAuth(Component) {
	const Auth = (props) => {
		const router = useRouter()
		const { user, isLoading } = useAuthState()

		useEffect(() => {
			if (user) router.replace('/')
		}, [user, router])

		if (isLoading) return <Spinner />
		if (!user) return <Component {...props} />
	}

	if (Component.getInitialProps) {
		Auth.getInitialProps = Component.getInitialProps
	}

	return Auth
}

export default withoutAuth
