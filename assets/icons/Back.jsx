import { theme } from 'theme'

function BackIcon({ color }) {
	return (
		<svg width='24' height='24' viewBox='0 0 24 24'>
			<path
				d='M13.98 20.717a1.79 1.79 0 0 0 2.685 0 1.79 1.79 0 0 0 0-2.684l-7.158-6.62 7.158-6.8a1.79 1.79 0 0 0 0-2.684 1.79 1.79 0 0 0-2.684 0L5.929 9.98a1.79 1.79 0 0 0 0 2.684l8.052 8.052z'
				fill={color || theme.palette.primary}
			/>
		</svg>
	)
}

export default BackIcon
