import styled from 'styled-components'
import HeaderMessage from 'components/pages/messages/Header'
import InputMessage from 'components/pages/messages/Input'
import Chat from 'components/pages/messages/Chat'
import { getFormatedTime } from 'utils/helpers'

import withAuth from 'utils/withAuth'
import { fetchDocument } from 'utils/helpers'
import { MATCHES_BY_ID_REF } from 'firebase-config'

export async function getServerSideProps(ctx) {
	const { id } = ctx.query

	const match = await fetchDocument(MATCHES_BY_ID_REF(id))

	return {
		props: { match },
	}
}

function ChatPage({ match }) {
	const { matchedUser, messages } = match

	return (
		<Container>
			<HeaderMessage name={matchedUser.firstName} photoUrl={matchedUser.photoUrl} />
			<Chat
				initialMessages={match.messages}
				userName={matchedUser.firstName}
				timestamp={getFormatedTime(new Date(match.timestamp))}
			/>
			<InputMessage hasMessage={messages.length} matchedUser={matchedUser} />
		</Container>
	)
}

export default withAuth(ChatPage)

const Container = styled.div`
	padding-top: 0.6rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
`
