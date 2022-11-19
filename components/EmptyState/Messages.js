import styled from 'styled-components'
import { Title, BigText } from 'theme/typography'

function MessagesEmptyState() {
	return (
		<Container>
			<Card />
			<Content>
				<Title as='h2' small weight='medium'>
					start to match
				</Title>
				<BigText as='p' color='grey'>
					Matches will appear here when you start liking people. From here you can send them a message direct when you
					decide to start the conversation.
				</BigText>
			</Content>
		</Container>
	)
}

export default MessagesEmptyState

const Container = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 8rem 1.6rem 1.6rem 1.6rem;
	text-align: center;
	gap: 2.8rem;
`

const Card = styled.div`
	width: 11.7rem;
	height: 17rem;
	background: ${({ theme }) => theme.gradient.primary.vertical};
	border-radius: 1.6rem;
`
const Content = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
	max-width: 24rem;

	p {
		color: ${({ theme }) => theme.palette.grey[50]};
		font-weight: 300;
	}
`
