import styled from 'styled-components'
import Link from 'next/link'
import BackIcon from 'assets/icons/Back'
import { BigText } from 'theme/typography'

function HeaderMessage({ photoUrl, name }) {
	return (
		<Container>
			<Link href='/messages'>
				<a>
					<BackIcon />
				</a>
			</Link>
			<Content>
				<Image src={photoUrl} alt='' />
				<BigText as='span' color='grey'>
					{name}
				</BigText>
			</Content>
		</Container>
	)
}

export default HeaderMessage

const Container = styled.header`
	display: flex;
	align-items: center;
	border-bottom: 0.1rem solid ${({ theme }) => theme.palette.grey[30]};
	padding: 0 0 0.8rem 0.4rem;

	a {
		:active {
			transform: scale(0.9);
			transition: all 0.3s ease-out;
		}
	}
`
const Content = styled.div`
	margin: auto;
	display: flex;
	align-items: center;
	gap: 1.4rem;
`
const Image = styled.img`
	width: 2.8rem;
	height: 2.8rem;
	border-radius: 100%;
	object-fit: cover;
`
