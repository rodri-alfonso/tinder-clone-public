import styled from 'styled-components'
import { useRouter } from 'next/router'
import { Subheading, BigText } from 'theme/typography'
import { useAuth } from 'context/auth'
import ReplyIcon from 'assets/icons/Reply'

function ChatItem({ src, user, id, lastMessage }) {
	const { user: currentUser } = useAuth()
	const router = useRouter()

	return (
		<Container onClick={() => router.push(`/messages/${id}`)}>
			<Image src={src} alt='' />
			<Content>
				<Subheading as='h3' weight='medium'>
					{user}
				</Subheading>
				<Message>
					{lastMessage.user === currentUser.id && <ReplyIcon />}
					<BigText as='span' color='grey'>
						{lastMessage.message}
					</BigText>
				</Message>
			</Content>
		</Container>
	)
}

export default ChatItem

const Container = styled.div`
	display: flex;
	align-items: center;
	gap: 1.4rem;
	cursor: pointer;

	:active {
		background: whitesmoke;
		transition: all 0.3s ease-out;
	}
`
const Image = styled.img`
	width: 7.4rem;
	height: 7.4rem;
	border-radius: 100%;
	object-fit: cover;
`

const Content = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	gap: 0.4rem;
	border-bottom: 0.1rem solid ${({ theme }) => theme.palette.grey[30]};
	width: 100%;
	height: 9rem;

	span {
		max-width: 70vw;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
`
const Message = styled.div`
	display: flex;
	align-items: center;
	gap: 0.6rem;

	svg {
		width: 1.4rem;
		height: 1.4rem;
	}
`
