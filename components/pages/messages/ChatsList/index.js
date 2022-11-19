import styled from 'styled-components'
import ChatItem from './ChatItem'
import { BigText } from 'theme/typography'

function ChatsList({ chats }) {
	if (chats.length === 0) return

	return (
		<Container>
			<BigText as='h2' weight='bold'>
				Messages
			</BigText>
			<Content>
				{chats.map((chat) => (
					<ChatItem
						key={chat.matchId}
						src={chat.matchedUser.photoUrl}
						lastMessage={chat.messages[chat.messages.length - 1]}
						user={chat.matchedUser.firstName}
						id={chat.matchId}
					/>
				))}
			</Content>
		</Container>
	)
}

export default ChatsList

const Container = styled.div`
	h2 {
		padding: 1.2rem 0 1.6rem 0;
	}
`
const Content = styled.div`
	padding-left: 0.4rem;
	display: flex;
	flex-direction: column;
	gap: 0.2rem;
`
