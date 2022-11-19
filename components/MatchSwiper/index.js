import styled from 'styled-components'
import MatchCard from './MatchCard'
import TinderCard from 'react-tinder-card'
import { DIRECTIONS } from 'utils/constants'
import { useAuth } from 'context/auth'
import { useState } from 'react'
import MatchModal from './MatchModal'
import { handleLike, handlePass } from 'utils/matches'
import { useCreateRefs } from 'hooks/useCreateRefs'

const { RIGHT, LEFT, UP, DOWN } = DIRECTIONS

function MatchSwiper({ cards }) {
	const { user } = useAuth()
	const [match, setMatch] = useState(null)
	const childRefs = useCreateRefs(cards.length)

	const onSwipe = (dir, index) => childRefs[index].current.swipe(dir)

	const handleSwipe = (direction, card) => {
		switch (direction) {
			case RIGHT:
				return handleLike(user, card, setMatch)
			case LEFT:
				return handlePass(card.id, user.id)
		}
	}

	return (
		<Container>
			{cards.map((card, index) => (
				<Swiper
					key={card.id}
					ref={childRefs[index]}
					onSwipe={(direction) => handleSwipe(direction, card)}
					preventSwipe={[UP, DOWN]}
				>
					<MatchCard onSwipe={onSwipe} currentIndex={index} name={card.firstName} src={card.photoUrl} />
				</Swiper>
			))}

			<MatchModal isOpen={Boolean(match)} onClose={() => setMatch(null)} match={match} />
		</Container>
	)
}

export default MatchSwiper

const Container = styled.section`
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
	height: 100%;
	width: 100%;
	position: relative;
`
const Swiper = styled(TinderCard)`
	height: 100%;
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
`
