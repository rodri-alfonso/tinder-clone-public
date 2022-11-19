export const theme = {
	palette: {
		common: {
			black: '#21262E',
			white: '#ffffff',
		},
		primary: '#ED4258',

		system: {
			green: '#21D07C',
			red: '#FF4458',
			purple: '#9908E8',
			blue: '#47A1FF',
			pink: '#ed2776',
			orange: '#ee5b3c',
		},

		grey: {
			10: '#f0f2f4',
			20: '#e9ebee',
			30: '#d4d8de',
			40: '#b9bfc8',
			50: '#7C8492',
			60: '#505965',
			70: '#21262E',
		},
	},

	gradient: {
		primary: {
			vertical: 'linear-gradient(180deg, #ed2776 0%, #ee5b3c 100%)',
			horizontal: 'linear-gradient(90deg,#ed2776 0%, #ee5b3c 100%)',
		},
		button: 'linear-gradient(45deg, #fd267a, #ff6036)',
	},

	media: {
		mobile: '(max-width: 440px)',
		tablet: '(max-width: 1025px)',
		desktop: '(min-width: 440px)',
	},
}
