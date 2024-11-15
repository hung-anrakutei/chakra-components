import {
	Box,
	Text,
	Flex,
	Heading,
	IconButton,
	Stack,
	Button,
	Input,
} from '@chakra-ui/react'
import { Field } from '@/components/ui/field'
import { useNavigate } from 'react-router-dom'
import { FaAngleLeft } from 'react-icons/fa'
import { useForm } from 'react-hook-form'

interface FormValues {
	newPassword: string
	confirmPassword: string
}
const PasswordChange = () => {
	const { register, handleSubmit } = useForm<FormValues>()

	const navigate = useNavigate()

	const handleBackToHome = () => {
		navigate('/')
	}

	const onSubmit = handleSubmit(() => {
		navigate('/')
	})

	return (
		<Box p={5} h='100vh'>
			<Flex align='center' justifyContent='center' pb={20}>
				<Box flex='1' textAlign='center' w='100%' position='relative'>
					<IconButton
						onClick={handleBackToHome}
						variant='ghost'
						aria-label='Back to home'
						position='absolute'
						left='-10px'
						top='50%'
						transform='translateY(-50%)'
					>
						<FaAngleLeft />
					</IconButton>
					<Heading size='lg'>安城 太郎の予定一覧</Heading>
				</Box>
			</Flex>
			<Stack gap={6}>
				<Text>
					一部の旧システムを除き、各システムの共通パ
					スワードを変更します。
				</Text>
				<Text>
					※8文字以上で、半角英数字・半角記号
					（@_-.!）を設定してください。
				</Text>
				<Stack
					as='form'
					onSubmit={onSubmit}
					w='100%'
					maxW={200}
					gap={4}
				>
					<Field>
						<Input
							{...register('newPassword')}
							placeholder='新しいパスワード'
						/>
					</Field>
					<Field>
						<Input
							{...register('confirmPassword')}
							placeholder='新しいパスワード（確認）'
						/>
					</Field>

					<Stack>
						<Button
							w='fit-content'
							type='submit'
							onClick={onSubmit}
						>
							ログイン
						</Button>
					</Stack>
				</Stack>
			</Stack>
		</Box>
	)
}

export default PasswordChange
