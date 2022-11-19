import styled from 'styled-components'
import Modal from 'components/Modal'
import { useAuth } from 'context/auth'
import { useRouter } from 'next/router'
import { Handwriting, Text } from 'theme/typography'

function MatchModal({ isOpen, onClose, match }) {
	const { user } = useAuth()
	const router = useRouter()

	if (!isOpen) return

	return (
		<Modal isOpen={isOpen}>
			<Container>
				<Content>
					<Handwriting>It&apos;s a Match!</Handwriting>
					<Text as='p' normal color='white'>
						You and {match.firstName} have liked each other.
					</Text>
				</Content>

				<Images>
					<Pic src={match.photoUrl} />
					<Pic src={user.photoUrl} />
				</Images>

				<Buttons>
					<Primary onClick={() => router.push(`/messages/${match.matchId}`)}>Send Message</Primary>
					<Secondary onClick={onClose}>Keep swiping</Secondary>
				</Buttons>
			</Container>
		</Modal>
	)
}

export default MatchModal

const Container = styled.div`
	background-color: #000000d8;
	display: flex;
	flex-direction: column;
	align-items: center;

	gap: 5rem;
	padding: 12rem 0 4rem 0;
`
const Content = styled.div`
	color: ${({ theme }) => theme.palette.common.white};
	text-align: center;
	display: flex;
	flex-direction: column;
	gap: 1.4rem;
`
const Images = styled.div`
	display: flex;
	gap: 2rem;
`
const Pic = styled.img`
	width: 9rem;
	height: 9rem;
	border-radius: 100%;
	border: 0.2rem solid ${({ theme }) => theme.palette.common.white};
	object-fit: cover;
`

const Buttons = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.8rem;
	width: 25rem;
	padding-top: 2.4rem;

	button {
		font-weight: 600;
		text-transform: uppercase;
		height: 4rem;
		cursor: pointer;

		outline: none;
		border-radius: 3rem;
		color: ${({ theme }) => theme.palette.common.white};

		:active {
			transform: scale(1.1);
			transition: all 0.3s ease-out;
		}
	}
`
const Primary = styled.button`
	border: none;
	background: ${({ theme }) => theme.palette.system.pink};
	background: ${({ theme }) => theme.gradient.primary.horizontal};
`
const Secondary = styled.button`
	background: unset;
	border: 0.2rem solid ${({ theme }) => theme.palette.common.white};
`
