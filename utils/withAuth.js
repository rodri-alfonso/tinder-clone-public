import Layout from 'components/Layout'
import Spinner from 'components/Spinner'
import { useAuthState } from 'context/auth'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

function withAuth(Component) {
	const Auth = (props) => {
		const router = useRouter()
		const { user, isLoading } = useAuthState()

		useEffect(() => {
			if (!user) router.replace('/login')
		}, [user, router])

		if (isLoading || !user) return <Spinner />

		return (
			<Layout>
				<Component {...props} />
			</Layout>
		)
	}

	return Auth
}

export default withAuth
