import '../styles/globals.css'
import { ThemeProvider } from 'styled-components'
import { theme } from 'theme'
import { AuthProvider } from 'context/auth'
import { useEffect } from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		document.documentElement.style.setProperty('--doc-height', `${window.innerHeight}px`)
	}, [])

	return (
		<ThemeProvider theme={theme}>
			<AuthProvider>
				<Head>
					<meta
						name='viewport'
						content='width=device-width, height=device-height,  initial-scale=1.0, user-scalable=no;user-scalable=0;'
					/>
					<Component {...pageProps} />
				</Head>
			</AuthProvider>
		</ThemeProvider>
	)
}

export default MyApp
