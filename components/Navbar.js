import styled from 'styled-components'
import Link from 'next/link'
import FireIcon from 'assets/icons/Fire'
import DiamondIcon from 'assets/icons/Diamond'
import SearchIcon from 'assets/icons/Search'
import ChatIcon from 'assets/icons/Chat'
import { theme } from 'theme'
import { useRouter } from 'next/router'
import { isIos } from 'utils/constants'

function Navbar() {
	const { pathname } = useRouter()

	const LinkItem = ({ href, icon }) => {
		return (
			<Content isSelected={pathname === href && theme.palette.primary}>
				<Link href={href}>
					<a>{icon}</a>
				</Link>
			</Content>
		)
	}

	return (
		<Container isIos={isIos}>
			<LinkItem href='/' icon={<FireIcon />} />
			<LinkItem href='/explore' icon={<SearchIcon />} />
			<LinkItem href='/likes' icon={<DiamondIcon />} />
			<LinkItem href='/messages' icon={<ChatIcon />} />
		</Container>
	)
}

export default Navbar

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding-top: 1rem;
	padding-bottom: ${({ isIos }) => (isIos ? '1.2rem' : '0.4rem')};

	div:nth-child(3) {
		svg {
			width: 3rem;
			height: 3rem;
		}
	}
`
const Content = styled.div`
	:active {
		path {
			transform: scale(1.1);
			fill: ${({ theme }) => theme.palette.primary};
			transition: all 0.3s ease-out;
		}
	}

	svg {
		width: 2.8rem;
		height: 2.8rem;
	}

	path {
		fill: ${({ isSelected, color }) => (isSelected ? theme.palette.primary : color || theme.palette.grey[50])};
	}
`
