import styled from 'styled-components'
import Brand from 'assets/Brand'
import { useAuth } from 'context/auth'
import SettingsModal from './SettingsModal'
import { useState } from 'react'

function Header() {
	const { user } = useAuth()
	const [isOpenModal, setIsOpenModal] = useState(false)

	return (
		<Container>
			<Image onClick={() => setIsOpenModal(true)} src={user.photoUrl} alt='profile pic' />
			<Brand />
			{isOpenModal && <SettingsModal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} />}
		</Container>
	)
}

export default Header

const Container = styled.header`
	display: flex;
	align-items: center;
	padding: 0.8rem 0 1.2rem 0.4rem;
	position: relative;

	svg {
		margin: auto;
	}
`
const Image = styled.img`
	border-radius: 100%;
	width: 3.2rem;
	height: 3.2rem;
	cursor: pointer;
	position: absolute;

	:active {
		transform: scale(1.1);
		transition: all 0.3s ease-out;
		border: 1px solid whitesmoke;
	}
`
