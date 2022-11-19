import styled from 'styled-components'

function Modal({ isOpen, children }) {
	if (!isOpen) return

	return <Container>{children}</Container>
}

export default Modal

const Container = styled.div`
	display: grid;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 100;
	background-color: #00000072;

	animation-duration: 0.9s;
	animation-name: appear;

	@keyframes appear {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`
