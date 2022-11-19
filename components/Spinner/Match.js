import styled from 'styled-components'

function MatchSpinner({ photoUrl }) {
	return (
		<Container>
			<FirstWave />
			<SecondWave />
			<Image src={photoUrl} alt='profile photo' />
		</Container>
	)
}

export default MatchSpinner

const Container = styled.div`
	display: grid;
	place-items: center;
	height: 100%;
	position: relative;
`
const Image = styled.img`
	position: absolute;
	width: 10rem;
	height: 10rem;
	border-radius: 100%;
	object-fit: cover;
	border: 0.3rem solid ${({ theme }) => theme.palette.common.white};
`
const Wave = styled.div`
	position: absolute;
	background-color: ${({ theme }) => theme.palette.primary};
	border-radius: 100%;
	width: 10rem;
	height: 10rem;
	opacity: 0.4;
	border: 0.1rem solid ${({ theme }) => theme.palette.primary};
`
const FirstWave = styled(Wave)`
	animation-duration: 6s;
	animation-name: first-wave;
	animation-iteration-count: infinite;

	@keyframes first-wave {
		0% {
			background-color: ${({ theme }) => theme.palette.primary};
			transform: scale(1);
		}
		50% {
			transform: scale(3.4);
		}
		100% {
			background-color: ${({ theme }) => theme.palette.primary}00;
			transform: scale(3.8);
			opacity: 0;
		}
	}
`
const SecondWave = styled(Wave)`
	animation-duration: 6.2s;
	animation-name: second-wave;
	animation-iteration-count: infinite;

	@keyframes second-wave {
		20% {
			background-color: ${({ theme }) => theme.palette.primary};
			transform: scale(1);
		}
		70% {
			transform: scale(3.4);
		}
		100% {
			background-color: ${({ theme }) => theme.palette.primary}00;
			transform: scale(3.8);
			opacity: 0;
		}
	}
`
