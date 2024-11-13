import { Button, Center, Stack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
	const navigate = useNavigate()

	const navigateToPasswordChange = () => {
		navigate('/password-change')
	}

	const navigateToTicket = () => {
		navigate('/ticket')
	}

	return (
		<Center h='100vh'>
			<Stack>
				<Button onClick={navigateToTicket}>案件DBシステム</Button>
				<Button onClick={navigateToPasswordChange}>
					パスワード変更
				</Button>
			</Stack>
		</Center>
	)
}

export default Home
