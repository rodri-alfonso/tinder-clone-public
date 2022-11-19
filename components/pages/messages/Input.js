import { useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useAuth } from 'context/auth'
import { arrayUnion, setDoc } from 'firebase/firestore'
import { MATCHES_BY_ID_REF } from 'firebase-config'

function InputMessage({ hasMessage, matchedUser }) {
	const [message, setMessage] = useState('')
	const { user } = useAuth()
	const { query } = useRouter()

	const handleSubmit = (e) => {
		e.preventDefault()

		const payload = {
			message,
			user: user.email,
			photoUrl: user.photoUrl,
		}

		setDoc(MATCHES_BY_ID_REF(query.id), { messages: arrayUnion(payload) }, { merge: true })
		setMessage('')

		//this is ONLY for DEMO purpose. This should NOT be here
		if (!hasMessage) {
			setTimeout(() => {
				const mockPayload = {
					message: 'Hey! this is a test mesage',
					user: 'hellen@email.com',
					photoUrl: matchedUser.photoUrl,
				}

				setDoc(MATCHES_BY_ID_REF(query.id), { messages: arrayUnion(mockPayload) }, { merge: true })
			}, 1000)
		}
	}

	return (
		<Container onSubmit={handleSubmit}>
			<Input
				type='text'
				onChange={(e) => setMessage(e.target.value)}
				value={message}
				placeholder='Write a message...'
				autoFocus
			/>
			<Button disabled={!message}>Send</Button>
		</Container>
	)
}

export default InputMessage

const Container = styled.form`
	padding: 1rem 0.8rem;
	display: flex;
	gap: 1rem;
	align-items: center;
	justify-content: space-between;
	border-top: 0.1rem solid ${({ theme }) => theme.palette.grey[30]};
`
const Input = styled.input`
	flex: 1;
	padding: 1rem 0;
	outline: none;
	border: none;
`
const Button = styled.button`
	outline: none;
	border: none;
	background: unset;
	cursor: pointer;
	text-transform: uppercase;
	color: ${({ theme }) => theme.palette.primary};
	font-weight: 600;

	:disabled {
		color: ${({ theme }) => theme.palette.grey[30]};
		cursor: default;
	}
`
