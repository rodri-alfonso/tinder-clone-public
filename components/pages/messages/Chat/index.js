import styled from 'styled-components'
import { Text } from 'theme/typography'
import Message from 'components/pages/messages/Chat/Message'
import { useRouter } from 'next/router'
import { useMessagesState } from 'hooks/messages'

function Chat({ timestamp, initialMessages, userName }) {
	const { query } = useRouter()
	const messages = useMessagesState(query.id, initialMessages)

	return (
		<Container>
			<Content>
				<Timestamp>
					<Text as='span' color='grey'>
						{`You made a match with ${userName} on ${timestamp}`}
					</Text>
				</Timestamp>
				<Messages>
					{messages.map((message, index) => (
						<Message
							key={`${message.user}_${index}`}
							photoUrl={message.photoUrl}
							email={message.user}
							message={message.message}
						/>
					))}
				</Messages>
			</Content>
		</Container>
	)
}

export default Chat

const Container = styled.section`
	flex: 1;
	background-color: whitesmoke;
`
const Timestamp = styled.div`
	text-align: center;
	width: 100%;
	padding-bottom: 1.4rem;
	margin-right: -1.5rem;
`
const Content = styled.div`
	padding: 1rem 0.6rem 0.6rem 0.6rem;
	max-height: calc(100vh - 10rem);
	overflow-y: scroll;
	display: flex;
	flex-direction: column;
	align-items: flex-end;

	/* Chrome, Safari and Opera */
	::-webkit-scrollbar {
		display: none;
	}

	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
`
const Messages = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.4rem;
	width: 100%;
`
