import { theme } from 'theme'

function ChatIcon({ color }) {
	return (
		<svg width='24' height='24' viewBox='0 0 24 24'>
			<path
				d='M 11.612 16.143 c 0 -2.821 2.627 -5.213 5.97 -5.213 c 0.776 0 1.552 0.184 2.269 0.43 c 0 -4.048 -4 -7.36 -8.836 -7.36 C 6.06 4 2 7.434 2 11.543 c 0 2.637 1.672 5.09 4.18 6.317 v 2.76 c 0 0.307 0.238 0.49 0.596 0.307 l 3.582 -1.84 h 0.896 c 0.418 0 0.836 0 1.194 -0.123 c -0.597 -0.859 -0.836 -1.84 -0.836 -2.821 Z m 5.97 -3.68 c -2.507 0 -4.537 1.595 -4.537 3.68 s 2.03 3.802 4.477 3.802 h 0.299 l 0.597 0.246 l 0.955 0.613 c 0.299 0 0.597 0 0.597 -0.368 v -1.104 c 1.194 -0.613 2.03 -1.84 2.03 -3.189 c 0 -2.085 -1.97 -3.68 -4.478 -3.68 h 0.06 Z'
				fill={color || theme.palette.primary}
			/>
		</svg>
	)
}

export default ChatIcon
