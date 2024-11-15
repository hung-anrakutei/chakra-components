import {
	Box,
	Button,
	Flex,
	Heading,
	Input,
	Separator,
	Stack,
	Text,
} from '@chakra-ui/react'
import { Field } from '@/components/ui/field'
import { useForm } from 'react-hook-form'
import { PasswordInput } from '@/components/ui/password-input'
import {
	DialogBody,
	DialogContent,
	DialogFooter,
	DialogRoot,
	DialogHeader,
} from '@/components/ui/dialog'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface FormValues {
	usageCode: string
	employeeCode: string
	password: string
}

const Login = () => {
	const navigate = useNavigate()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>()
	const [openDialogError, setOpenDialogError] = useState(false)
	const [openDialogPinCode, setOpenDialogPinCode] = useState(false)
	const [pinCode, setPinCode] = useState('')
	const [errorMessage, setErrorMessage] = useState('')

	const onSubmit = handleSubmit((data) => {
		if (
			data.usageCode === '' ||
			data.employeeCode === '' ||
			data.password === ''
		) {
			setOpenDialogError(true)
		} else {
			console.log(data)
			setOpenDialogPinCode(true)
		}
	})

	const handleTurnOffDialog = () => {
		setOpenDialogError(false)
	}

	const handleSubmitPINCode = () => {
		if (pinCode === '1234') {
			setErrorMessage('')
			navigate('/home')
		} else {
			setErrorMessage('PINコードが正しくありません。')
		}
	}

	return (
		<>
			<Flex w='100%' h='100vh' justify='center' pt={40} px={2}>
				<Box>
					<Stack align='center'>
						<Heading pb={5}>スマートアシストログイン</Heading>
						<Stack
							as='form'
							onSubmit={onSubmit}
							w='100%'
							maxW={200}
							gap={4}
						>
							<Field
								invalid={!!errors.usageCode}
								errorText={errors.usageCode?.message}
							>
								<Input
									{...register('usageCode')}
									placeholder='利用コード'
								/>
							</Field>
							<Field
								invalid={!!errors.employeeCode}
								errorText={errors.employeeCode?.message}
							>
								<Input
									{...register('employeeCode')}
									placeholder='社員コード'
								/>
							</Field>
							<Field
								invalid={!!errors.password}
								errorText={errors.password?.message}
							>
								<PasswordInput
									{...register('password')}
									placeholder='パスワード'
								/>
							</Field>
							<Stack w='100%'>
								<Button w='100%' type='submit'>
									ログイン
								</Button>
							</Stack>
						</Stack>
					</Stack>
				</Box>
			</Flex>
			<DialogRoot
				open={openDialogError}
				placement='center'
				motionPreset='slide-in-bottom'
			>
				<DialogContent w='80%' maxW='300px' borderRadius='4xl'>
					<DialogBody p={4}>
						<Text textAlign='center'>
							認証できませんでした <br />
							会社利用コード、社員コードまたはパス
							<br />
							ワードが正しくありません。
						</Text>
					</DialogBody>
					<Separator />
					<DialogFooter
						borderTop={1}
						p={2}
						display='flex'
						justifyContent='center'
						cursor='pointer'
						onClick={handleTurnOffDialog}
					>
						<Text>OK</Text>
					</DialogFooter>
				</DialogContent>
			</DialogRoot>
			<DialogRoot
				open={openDialogPinCode}
				placement='center'
				motionPreset='slide-in-bottom'
			>
				<DialogContent w='80%' maxW='300px' borderRadius={0}>
					<DialogHeader p={4} display='flex' justifyContent='center'>
						<Text>ログインPIN番号入力</Text>
					</DialogHeader>
					<Separator />
					<DialogBody p={4}>
						<Stack
							gap={4}
							display='flex'
							flexDirection='column'
							alignItems='center'
						>
							<Input
								width='60%'
								mx='auto'
								placeholder='PINコード'
								onChange={(e) => {
									setPinCode(e.target.value)
									setErrorMessage('')
								}}
								value={pinCode}
								onKeyDown={(e) => {
									if (e.key === 'Enter') handleSubmitPINCode()
								}}
							/>
							<Text textAlign='center'>
								ログイン用のPIN番号を入力してくだ さい。
							</Text>
							{errorMessage && (
								<Text textAlign='center' color='red.500'>
									{errorMessage}
								</Text>
							)}
							<Button
								type='submit'
								w='fit-content'
								bg='blue.500'
								onClick={handleSubmitPINCode}
							>
								ログイン
							</Button>
						</Stack>
					</DialogBody>
				</DialogContent>
			</DialogRoot>
		</>
	)
}

export default Login
