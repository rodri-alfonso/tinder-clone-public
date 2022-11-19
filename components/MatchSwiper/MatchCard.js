import styled from 'styled-components'
import { Title } from 'theme/typography'
import { theme } from 'theme'
import HeartIcon from 'assets/icons/Heart'
import ReturnIcon from 'assets/icons/Return'
import CloseIcon from 'assets/icons/Close'
import StarIcon from 'assets/icons/Star'
import RayIcon from 'assets/icons/Ray'

function MatchCard({ name, src, onSwipe, currentIndex }) {
	return (
		<Container>
			<Content>
				<Image src={src} alt='' />
				<Blur />
				<Information>
					<Title as='h2' weight='bold' color='white'>
						{name}
					</Title>
				</Information>
			</Content>

			<Actions>
				<Action>
					<ReturnIcon />
				</Action>
				<Action
					onTouchEnd={() => onSwipe('left', currentIndex)}
					onClick={() => onSwipe('left', currentIndex)}
					color={theme.palette.system.red}
					isBig
				>
					<CloseIcon />
				</Action>
				<Action color={theme.palette.system.blue}>
					<StarIcon />
				</Action>
				<Action
					onTouchEnd={() => onSwipe('right', currentIndex)}
					onClick={() => onSwipe('right', currentIndex)}
					color={theme.palette.system.green}
					isBig
				>
					<HeartIcon />
				</Action>
				<Action color={theme.palette.system.purple}>
					<RayIcon />
				</Action>
			</Actions>
		</Container>
	)
}

export default MatchCard

const Container = styled.div`
	width: 100%;
	height: 100%;
	background-color: unset;
	border-radius: 0.8rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	overflow: hidden;
	cursor: pointer;
`
const Content = styled.div`
	width: 100%;
	height: 100%;
	max-height: calc(100vh - 18rem);
	position: relative;
	display: flex;
	justify-content: center;
	position: relative;
`
const Image = styled.img`
	width: 100%;
	object-fit: cover;
`
const Blur = styled.div`
	position: absolute;
	bottom: -1rem;
	width: 100%;
	height: 40%;
	background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 1) 97%);
`
const Information = styled.div`
	position: absolute;
	width: 100%;
	bottom: 0;
	padding-left: 1.6rem;
`
const Actions = styled.div`
	background-color: #000000;
	padding: 2.4rem 0.4rem 1.2rem 0.4rem;
	display: flex;
	justify-content: space-around;
	align-items: center;
	cursor: default;

	div:nth-child(1),
	div:nth-child(3),
	div:nth-child(5) {
		opacity: 0.5;
		cursor: default;

		:active {
			background: unset;
		}
	}
`
const Action = styled.div`
	width: ${({ isBig }) => (isBig ? '5.8rem' : '4.6rem')};
	height: ${({ isBig }) => (isBig ? '5.8rem' : '4.6rem')};
	display: grid;
	place-items: center;
	border-radius: 100%;
	border: 0.1rem solid ${({ color, theme }) => color || theme.palette.grey[30]};
	cursor: pointer;
	transition: all 0.3s ease-in-out;

	:active {
		background-color: ${({ color, theme }) => color || theme.palette.grey[30]}4C;
	}

	svg {
		width: ${({ isBig }) => (isBig ? '2.9rem' : '2.7rem')};
		height: ${({ isBig }) => (isBig ? '2.9rem' : '2.7rem')};
	}

	path {
		fill: ${({ color, theme }) => color || theme.palette.grey[30]};
	}
`
