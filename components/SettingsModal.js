import styled from 'styled-components'
import Modal from 'components/Modal'
import { Subheading } from 'theme/typography'
import { useAuth } from 'context/auth'

function SettingsModal({ isOpen, onClose }) {
	const { signOut } = useAuth()

	return (
		<Modal isOpen={isOpen}>
			<Container>
				<Subheading big weight='bold'>
					Settings
				</Subheading>

				<Buttons>
					<Primary onClick={signOut}>
						<Subheading weight='medium' color='white'>
							Log out
						</Subheading>
					</Primary>
					<Cancel onClick={onClose}>
						<Subheading weight='bold' color='grey'>
							Cancel
						</Subheading>
					</Cancel>
				</Buttons>
			</Container>
		</Modal>
	)
}

export default SettingsModal

const Container = styled.div`
	background-color: ${({ theme }) => theme.palette.common.white};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	gap: 2.6rem;
	padding: 3.6rem 2rem;
	border-radius: 0.8rem;
	margin: auto;

	animation-duration: 0.3s;
	animation-name: grow-up;

	@keyframes appear {
		0% {
			opacity: 1;
		}
	}

	@keyframes grow-up {
		0% {
			transform: scale(0.2);
		}
		100% {
			transform: scale(1);
		}
	}
`

const Buttons = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.2rem;
	width: 28rem;

	button {
		:active {
			transform: scale(0.9);
			transition: all 0.2s ease-out;
		}
	}
`

const Button = styled.button`
	height: 4.2rem;
	border-radius: 10rem;
	cursor: pointer;
`

const Primary = styled(Button)`
	background: ${({ theme }) => theme.gradient.button};
	border: none;
	color: ${({ theme }) => theme.palette.common.white};
`

const Cancel = styled(Button)`
	background: unset;
	border: 0.2rem solid ${({ theme }) => theme.palette.grey[40]};
`
