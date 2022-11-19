import styled from 'styled-components'
import Navbar from 'components/Navbar'
import Header from './Header'
import { useRouter } from 'next/router'
import { PATHS } from 'utils/constants'

const { LOGIN, MESSAGES, SETTINGS } = PATHS

function Layout({ children }) {
	const { pathname } = useRouter()

	const isInPath = (path) => pathname === path

	if (isInPath(LOGIN)) return children

	return (
		<Outside>
			<Container>
				{!isInPath(MESSAGES) && !isInPath(SETTINGS) && <Header />}
				<Content>{children}</Content>
				{!isInPath(MESSAGES) && <Navbar />}
			</Container>
		</Outside>
	)
}

export default Layout

const Outside = styled.div`
	height: var(--doc-height);

	@media ${({ theme }) => theme.media.desktop} {
		padding: 1.6rem;
		background-color: whitesmoke;
	}
`

const Container = styled.div`
	height: 100%;
	padding: 0.4rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	@media ${({ theme }) => theme.media.desktop} {
		padding: 1.2rem;
		border-radius: 1.2rem;
		width: 100%;
		max-width: 40rem;
		margin: 0 auto;
		background-color: ${({ theme }) => theme.palette.common.white};
	}
`

const Content = styled.div`
	flex: 1;
`
