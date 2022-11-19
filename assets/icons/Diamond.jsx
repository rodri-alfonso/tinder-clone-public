import { theme } from 'theme'

function DiamondIcon({ color }) {
	return (
		<svg width='24' height='24' viewBox='0 0 24 24'>
			<path
				d='M11.999 2C11.999 7.001 17 12 22 12c-5.001 0-10 5.382-10 10 0-4.618-5.027-10-10-10 4.974 0 9.999-4.999 9.999-10z'
				fill={color || theme.palette.primary}
			/>
		</svg>
	)
}

export default DiamondIcon
