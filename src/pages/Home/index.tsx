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

	const navigateToDelivery = () => {
		navigate('/delivery')
	}

	const navigateToChart = () => {
		navigate('/chart')
	}

	const navigateToSettings = () => {
		navigate('/settings')
	}	
	
	return (
		<Center h='100vh'>
			<Stack>
				<Button onClick={navigateToTicket}>案件DBシステム</Button>
				<Button onClick={navigateToPasswordChange}>
					パスワード変更
				</Button>
				<Button
					onClick={() => {
						navigate('/login')
					}}
				>
					Login
				</Button>
				<Button onClick={navigateToDelivery}>Delivery</Button>
				<Button onClick={navigateToChart}>Chart</Button>
				<Button onClick={navigateToSettings}>Settings</Button>

			</Stack>
		</Center>
	)
}

export default Home
