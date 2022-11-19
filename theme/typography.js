import styled from 'styled-components'

const Typography = styled.p`
	font-weight: ${({ weight }) => {
		switch (weight) {
			case 'bold':
				return 600
			case 'medium':
				return 500
			default:
				return 400
		}
	}};

	color: ${({ color, theme }) => {
		switch (color) {
			case 'white':
				return theme.palette.common.white
			case 'grey':
				return theme.palette.grey[60]
			default:
				return theme.palette.common.black
		}
	}};
`

export const Text = styled(Typography)`
	font-size: ${({ normal }) => (normal ? '1.4rem' : '1.2rem')};
`
export const BigText = styled(Typography)`
	font-size: 1.6rem;
`
export const Subheading = styled(Typography)`
	font-size: ${({ big }) => (big ? '2rem' : '1.8rem')};
`
export const Title = styled(Typography)`
	font-size: ${({ small }) => (small ? '2.6rem' : '3.2rem')};
`
export const Handwriting = styled.h1`
	font-family: 'Montez', cursive;
	font-size: 6.6rem;
`
