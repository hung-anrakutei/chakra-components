import {
	Box,
	Button,
	Flex,
	Heading,
	HStack,
	IconButton,
	Stack,
	Text,
	Center,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { FaAngleLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

import { StatusType, getData } from './data'

const Ticket = () => {
	const navigate = useNavigate()
	const [category, setCategory] = useState<StatusType>('all')
	const [dataAll, setDataAll] = useState<any[]>([]) // Specify a type for the data
	const [dataPerson, setDataPerson] = useState<any[]>([])

	const handleBackToHome = () => {
		navigate('/home')
	}

	useEffect(() => {
		setDataPerson(getData('Yamada', category))
		setDataAll(getData('', category))
	}, [category])

	const handleStatusChange = (newCategory: StatusType) => {
		setCategory(newCategory)
	}

	return (
		<Box p={4} h='100vh'>
			<Flex align='center' justifyContent='center' pb={5}>
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
					<Heading size='lg'>
						案件DBシステム
						<br /> 安楽 花子
					</Heading>
				</Box>
			</Flex>
			<Stack gap={6} pb={4}>
				<HStack>
					<Text fontSize='sm'>対応ステータス: </Text>

					<Button
						size='xs'
						onClick={() => handleStatusChange('all')}
						bg='blue.500'
					>
						全て
					</Button>
					<Button
						size='xs'
						onClick={() => handleStatusChange('new')}
						bg='orange.500'
					>
						新規
					</Button>
					<Button
						size='xs'
						onClick={() => handleStatusChange('progress')}
						bg='gray.500'
					>
						対応中
					</Button>
					<Button
						size='xs'
						onClick={() => handleStatusChange('done')}
					>
						完了
					</Button>
				</HStack>
			</Stack>
			<Stack w={'100%'} pb={2}>
				<Flex
					alignItems='center'
					justifyContent='center'
					bg='gray.200'
					p={1}
				>
					<Text>担当案件</Text>
				</Flex>
				<Box display='flex' flexDirection='column' gap={2}>
					{dataPerson.map((item) => (
						<Stack
							borderWidth={1}
							borderColor='black'
							rounded='md'
							bg={
								item.category === 'new'
									? 'orange.500'
									: item.category === 'progress'
									? 'gray.500'
									: 'bg'
							}
							key={item.case_id}
						>
							<Center p={1} borderBottom='1px solid'>
								<Text fontSize='sm'>{item.case_id}</Text>
							</Center>
							<Text p={1} fontSize='sm'>
								{item.description}
							</Text>
						</Stack>
					))}
				</Box>
			</Stack>
			<Stack w={'100%'} pb={2}>
				<Flex
					alignItems='center'
					justifyContent='center'
					bg='gray.200'
					p={1}
				>
					<Text>全体案件</Text>
				</Flex>
				<Box display='flex' flexDirection='column' gap={2}>
					{dataAll.map((item) => (
						<Stack
							borderWidth={1}
							borderColor='black'
							rounded='md'
							bg={
								item.category === 'new'
									? 'orange.500'
									: item.category === 'progress'
									? 'gray.500'
									: 'bg'
							}
							key={item.case_id}
						>
							<Center p={1} borderBottom='1px solid'>
								<Text fontSize='sm'>{item.case_id}</Text>
							</Center>
							<Text p={1} fontSize='sm'>
								{item.description}
							</Text>
						</Stack>
					))}
				</Box>
			</Stack>
		</Box>
	)
}

export default Ticket
