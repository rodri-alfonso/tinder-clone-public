import { theme } from 'theme'

function FireIcon({ color }) {
	return (
		<svg width='24' height='24' viewBox='0 0 24 24'>
			<path
				d='M8.21 10.08c-.02 0-.04 0-.06-.02-.67-.9-.84-2.44-.89-3.03 0-.11-.13-.18-.23-.12C4.93 8.08 3 10.86 3 13.54 3 18.14 6.2 22 11.7 22c5.15 0 8.7-3.98 8.7-8.46 0-5.87-4.2-9.77-7.93-11.53a.13.13 0 0 0-.19.14c.48 3.16-.18 6.6-4.07 7.93z'
				fill={color || theme.palette.primary}
				fillRule='nonzero'
			/>
		</svg>
	)
}

export default FireIcon
