import styled from 'styled-components'
import MatchItem from './MatchItem'
import { BigText } from 'theme/typography'

function MatchesList({ matches }) {
	if (matches.length === 0) return

	return (
		<Container>
			<BigText as='h2' weight='bold'>
				New Matches
			</BigText>
			<Content>
				{matches.map((card) => (
					<MatchItem
						key={card.matchId}
						src={card.matchedUser.photoUrl}
						name={card.matchedUser.firstName}
						id={card.matchId}
					/>
				))}
			</Content>
		</Container>
	)
}

export default MatchesList

const Container = styled.section`
	display: flex;
	flex-direction: column;

	h2 {
		padding: 1.4rem 0 2rem 0;
	}
`
const Content = styled.div`
	padding-left: 0.6rem;
	display: flex;
	gap: 1.2rem;
	width: 100%;
	overflow-x: scroll;

	/* Chrome, Safari and Opera */
	::-webkit-scrollbar {
		display: none;
	}

	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */

	img {
		width: 9rem;
		height: 12rem;
		border-radius: 0.4rem;
	}
`
