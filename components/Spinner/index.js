import styled from 'styled-components'
import FireIcon from 'assets/icons/Fire'

function Spinner() {
	return (
		<Container>
			<FireIcon />
		</Container>
	)
}

export default Spinner

const Container = styled.div`
	height: var(--doc-height);
	width: 100%;
	display: grid;
	place-items: center;

	background-color: ${({ theme }) => theme.palette.system.pink};
	background: ${({ theme }) => theme.gradient.primary.vertical};

	svg {
		width: 7rem;
		height: 7rem;

		animation-duration: 2.8s;
		animation-name: logo-spin;
		animation-iteration-count: infinite;

		@keyframes logo-spin {
			0% {
				transform: scale(1);
			}
			50% {
				transform: scale(1.4);
			}
			100% {
				transform: scale(1);
			}
		}
	}

	path {
		fill: ${({ theme }) => theme.palette.common.white};
	}
`
