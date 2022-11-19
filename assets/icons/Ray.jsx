import { theme } from 'theme'

function RayIcon({ color }) {
	return (
		<svg width='24' height='24' viewBox='0 0 24 24'>
			<path
				d='M15.979 14.018c.637-.638.51-1.275-.192-1.722l-1.275-.765c-.638-.383-1.148-1.275-.956-2.104L15.15 2.73c.191-.765-.128-.956-.765-.446L6.414 9.937c-.638.638-.51 1.275.19 1.722l1.276.765c.638.382 1.148 1.275.957 2.168l-1.658 6.632c-.191.829.191 1.02.765.446l8.035-7.652z'
				fill={color || theme.palette.primary}
			/>
		</svg>
	)
}

export default RayIcon
