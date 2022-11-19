import styled from 'styled-components'
import { BigText } from 'theme/typography'

function SectionCard({ photoUrl, altImg, section }) {
	return (
		<Container>
			<Image src={photoUrl} alt={altImg} />
			<BigText as='span' color='white'>
				{section}
			</BigText>
		</Container>
	)
}

export default SectionCard

const Container = styled.div`
	display: grid;
	place-items: center;
	position: relative;
	flex: 1;

	span {
		position: absolute;
		background-color: blue;
		z-index: 2;
		border-radius: 10rem;
		background: ${({ theme }) => theme.gradient.primary.horizontal};
		padding: 0.4rem 1.2rem;
	}

	p {
		position: absolute;
		bottom: 0;
		left: 0;
		color: red;
	}
`
const Image = styled.img`
	border-radius: 0.8rem;
	position: absolute;
	width: 100%;
	height: 100%;
`
