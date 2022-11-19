import styled from 'styled-components'
import BlurredCard from 'components/pages/likes/BlurredCard'
import { Subheading } from 'theme/typography'
import { useAuth } from 'context/auth'
import withAuth from 'utils/withAuth'
import { fetchDocuments } from 'utils/helpers'
import { MATCH_CARDS_REF } from 'firebase-config'

export async function getServerSideProps() {
	const cards = await fetchDocuments(MATCH_CARDS_REF)

	return {
		props: { cards },
	}
}

function Likes({ cards }) {
	const { user } = useAuth()

	const filteredCards = cards.filter((card) => {
		const ignoredCardIds = card.passed.concat(card.liked)
		return !ignoredCardIds.includes(user.id)
	})

	return (
		<Container>
			<Title>
				<Subheading big weight='bold'>
					{cards.length} Likes
				</Subheading>
			</Title>
			<Content>
				{filteredCards.map((card) => (
					<BlurredCard key={card.id} photoUrl={card.photoUrl} />
				))}
			</Content>
		</Container>
	)
}

export default withAuth(Likes)

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.4rem;
`

const Title = styled.section`
	padding: 1.2rem 2.4rem;
	border-bottom: 0.1rem solid ${({ theme }) => theme.palette.grey[30]};
`
const Content = styled.div`
	padding: 0 0.6rem;
	width: 100%;
	display: grid;
	gap: 1.2rem;
	grid-template-columns: repeat(auto-fit, minmax(10rem, auto));
`
