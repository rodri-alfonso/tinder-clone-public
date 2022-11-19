import styled from 'styled-components'
import { useAuth } from 'context/auth'

function Message({ message, email, photoUrl }) {
	const { user: currentUser } = useAuth()
	const isSender = currentUser.email === email

	const Message = ({ children }) => {
		if (isSender) {
			return <Sender>{children}</Sender>
		} else {
			return (
				<ReceiverMessage>
					<Pic src={photoUrl} alt='' />
					<BaseMessage>{children}</BaseMessage>
				</ReceiverMessage>
			)
		}
	}

	return (
		<Container>
			<Message>{message}</Message>
		</Container>
	)
}

export default Message

const BaseMessage = styled.div`
	overflow-wrap: break-word;
	word-break: break-word;
	padding: 1.2rem;
	background-color: ${({ theme }) => theme.palette.grey[20]};
	border-radius: 1.6rem 1.6rem 1.6rem 0.4rem;
	font-size: 1.6rem;
	max-width: 90%;
`
const Sender = styled(BaseMessage)`
	background-color: ${({ theme }) => theme.palette.system.blue};
	border-radius: 1.6rem 1.6rem 0.4rem 1.6rem;
	margin-left: auto;
	color: ${({ theme }) => theme.palette.common.white};
`

const Container = styled.div`
	display: flex;
`
const Pic = styled.img`
	width: 3.6rem;
	height: 3.6rem;
	border-radius: 100%;
	object-fit: cover;
`
const ReceiverMessage = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
`
