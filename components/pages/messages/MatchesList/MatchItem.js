import styled from 'styled-components'
import Link from 'next/link'
import { BigText } from 'theme/typography'

function MatchItem({ src, name, id }) {
	return (
		<Container>
			<Link href={`/messages/${id}`}>
				<a>
					<Content>
						<Image src={src} />
						<BigText as='span' weight='medium'>
							{name}
						</BigText>
					</Content>
				</a>
			</Link>
		</Container>
	)
}

export default MatchItem

const Container = styled.div`
	a {
		text-decoration: none;
	}

	:active {
		transform: scale(0.9);
		transition: all 0.3s ease-out;
	}
`

const Content = styled.div`
	text-align: center;
	width: 9rem;
	height: 14.5rem;
	display: flex;
	flex-direction: column;
	gap: 0.6rem;
	align-items: center;
`

const Image = styled.img`
	border-radius: 0.4rem;
	object-fit: cover;
`
