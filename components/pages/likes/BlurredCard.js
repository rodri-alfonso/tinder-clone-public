import styled from 'styled-components'

function BlurredCard({ photoUrl }) {
	return (
		<Container>
			<Card src={photoUrl} alt='profile picture' />
		</Container>
	)
}

export default BlurredCard

const Container = styled.div`
	height: 57.5vw;
	max-height: 26rem;
	overflow: hidden;
	border-radius: 0.8rem;
`

const Card = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	filter: blur(32px);
`
