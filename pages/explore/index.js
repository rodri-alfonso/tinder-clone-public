import styled from 'styled-components'
import { Subheading } from 'theme/typography'
import { exploreSections } from 'config/explore-sections'
import SectionCard from 'components/pages/explore/SectionCard'
import withAuth from 'utils/withAuth'

function Explore() {
	return (
		<Container>
			<Title>
				<Subheading big weight='bold'>
					Start exploring
				</Subheading>
			</Title>

			<Content>
				{exploreSections.map((section) => (
					<SectionCard key={section.banner} photoUrl={section.banner} section={section.section} />
				))}
			</Content>
		</Container>
	)
}

export default withAuth(Explore)

const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
`

const Title = styled.section`
	padding: 1.2rem 0.4rem;
`
const Content = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(16rem, auto));
	gap: 1.2rem;
	height: 100%;
`
