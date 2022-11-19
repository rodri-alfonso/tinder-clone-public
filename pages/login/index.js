import styled from 'styled-components'
import { useAuth } from 'context/auth'
import Brand from 'assets/Brand'
import withoutAuth from 'utils/withoutAuth'
import { theme } from 'theme'

function Login() {
	const { signIn } = useAuth()

	return (
		<Layout>
			<Container>
				<Brand color={theme.palette.common.white} />
				<Content>
					<Aclaration>
						This is not a real app. It&apos;s just a DEMO clone app from Tinder, built for study purpose only.
					</Aclaration>
					<Button onClick={signIn}>Sign in with google</Button>
				</Content>
			</Container>
		</Layout>
	)
}

export default withoutAuth(Login)

const Layout = styled.div`
	height: var(--doc-height);

	@media ${({ theme }) => theme.media.desktop} {
		padding: 1.6rem;
	}
`

const Container = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	background-color: ${({ theme }) => theme.palette.system.pink};
	background: ${({ theme }) => theme.gradient.primary.vertical};

	svg {
		width: 16rem;
		height: 16rem;
	}

	@media ${({ theme }) => theme.media.desktop} {
		border-radius: 1.2rem;
		width: 100%;
		max-width: 40rem;
		margin: 0 auto;
	}
`

const Button = styled.button`
	width: 100%;
	height: 3.6rem;
	background: unset;
	border-radius: 2.2rem;
	border: 0.2rem solid ${({ theme }) => theme.palette.common.white};
	cursor: pointer;
	text-transform: uppercase;
	color: ${({ theme }) => theme.palette.common.white};
	font-size: 1.3rem;
	transition: all 0.3s ease-out;

	:active {
		background: ${({ theme }) => theme.palette.common.white};
		color: ${({ theme }) => theme.palette.system.pink};
	}
`

const Content = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.2rem;
	align-items: center;
	max-width: 26rem;
`
const Aclaration = styled.p`
	text-align: center;
	color: ${({ theme }) => theme.palette.common.white};
	font-size: 1.2rem;
`
