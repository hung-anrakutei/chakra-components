import { getData } from '@/pages/Delivery/data'
import {
	Box,
	Button,
	Center,
	Heading,
	HStack,
	Input,
	Table,
	Text,
} from '@chakra-ui/react'
import Papa from 'papaparse'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { ja } from 'date-fns/locale/ja'

import './Delivery.css'
import { useState } from 'react'

function formatNumber(number: number): string {
	return new Intl.NumberFormat().format(number)
}
const Delivery = () => {
	const [startDate, setStartDate] = useState<Date | null>(null)
	const [endDate, setEndDate] = useState<Date | null>(null)
	const [data, setData] = useState<any[]>(getData(startDate, endDate, ''))

	const [searchText, setSearchText] = useState('')

	const handleExportCSV = () => {
		const csvData = data.map((item) => ({
			店舗コード: item.id,
			店舗名: item.storeName,
			テイクアウト出庫量: item.takeOutQuantity,
			テイクアウト売上金額: `¥${formatNumber(item.takeOutSalesAmount)}`,
			UBER出庫量: item.uberQuantity,
			UBER売上金額: `¥${formatNumber(item.uberSalesAmount)}`,
			出前館出庫量: item.deliveryQuantity,
			出前館売上金額: `¥${formatNumber(item.deliverySalesAmount)}`,
			MENU出庫量: item.menuQuantity,
			MENU売上金額: `¥${formatNumber(item.menuSalesAmount)}`,
		}))

		const csv = Papa.unparse(csvData)

		const blob = new Blob([csv], { type: 'text/csv' })
		const link = document.createElement('a')
		link.href = URL.createObjectURL(blob)
		link.download = `delivery-${new Date().toISOString()}.csv`
		link.click()
	}

	const handleSort = () => {
		const newData = getData(startDate, endDate, searchText)
		setData(newData)
	}

	return (
		<Box p={4}>
			<Center pb={20}>
				<Heading size={'2xl'} textAlign='center'>
					テイクアウト・デリバリー売上確認システム
				</Heading>
			</Center>
			<HStack pb={10} flexWrap='wrap'>
				<Text fontWeight={'bold'}>期間:</Text>
				<LocalizationProvider
					dateAdapter={AdapterDateFns}
					adapterLocale={ja}
				>
					<DatePicker
						slotProps={{
							textField: { placeholder: '年 / 月 / 日' },
						}}
						value={startDate}
						onChange={(date) => {
							if (date) {
								setStartDate(date)
							}
						}}
					/>
					<DatePicker
						slotProps={{
							textField: { placeholder: '年 / 月 / 日' },
						}}
						value={endDate}
						onChange={(date) => {
							if (date) {
								setEndDate(date)
							}
						}}
					/>
				</LocalizationProvider>
				<Input
					w={200}
					placeholder='店舗名で検索...'
					value={searchText}
					onChange={(e) => setSearchText(e.target.value)}
				/>
				<Button onClick={handleSort}>検索</Button>
				<Button onClick={handleExportCSV}>CSVダウンロード</Button>
			</HStack>
			<Box overflowX='auto' p={1}>
				<Table.Root size='sm' showColumnBorder variant='outline'>
					<Table.Header background='#b1c5fa'>
						<Table.Row>
							<Table.ColumnHeader>コード</Table.ColumnHeader>
							<Table.ColumnHeader>店舗名</Table.ColumnHeader>
							<Table.ColumnHeader
								borderLeftWidth={1}
								textAlign='end'
								colSpan={2}
							>
								テイクアウト
							</Table.ColumnHeader>
							<Table.ColumnHeader textAlign='end' colSpan={2}>
								UBER
							</Table.ColumnHeader>
							<Table.ColumnHeader textAlign='end' colSpan={2}>
								出前館
							</Table.ColumnHeader>
							<Table.ColumnHeader textAlign='end' colSpan={2}>
								MENU
							</Table.ColumnHeader>
						</Table.Row>
						<Table.Row>
							<Table.ColumnHeader></Table.ColumnHeader>
							<Table.ColumnHeader></Table.ColumnHeader>
							<Table.ColumnHeader textAlign='end'>
								出庫量
							</Table.ColumnHeader>
							<Table.ColumnHeader textAlign='end'>
								売上金額
							</Table.ColumnHeader>
							<Table.ColumnHeader textAlign='end'>
								出庫量
							</Table.ColumnHeader>
							<Table.ColumnHeader textAlign='end'>
								売上金額
							</Table.ColumnHeader>
							<Table.ColumnHeader textAlign='end'>
								出庫量
							</Table.ColumnHeader>
							<Table.ColumnHeader textAlign='end'>
								売上金額
							</Table.ColumnHeader>
							<Table.ColumnHeader textAlign='end'>
								出庫量
							</Table.ColumnHeader>
							<Table.ColumnHeader textAlign='end'>
								売上金額
							</Table.ColumnHeader>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{data.map((item) => (
							<Table.Row key={item.id}>
								<Table.Cell textAlign='end'>
									{item.id}
								</Table.Cell>
								<Table.Cell>{item.storeName}</Table.Cell>
								<Table.Cell textAlign='end'>
									{item.takeOutQuantity}
								</Table.Cell>
								<Table.Cell textAlign='end'>
									¥{formatNumber(item.takeOutSalesAmount)}
								</Table.Cell>
								<Table.Cell textAlign='end'>
									{item.uberQuantity}
								</Table.Cell>
								<Table.Cell textAlign='end'>
									¥{formatNumber(item.uberSalesAmount)}
								</Table.Cell>
								<Table.Cell textAlign='end'>
									{item.deliveryQuantity}
								</Table.Cell>
								<Table.Cell textAlign='end'>
									¥{formatNumber(item.deliverySalesAmount)}
								</Table.Cell>
								<Table.Cell textAlign='end'>
									{item.menuQuantity}
								</Table.Cell>
								<Table.Cell textAlign='end'>
									¥{formatNumber(item.menuSalesAmount)}
								</Table.Cell>
							</Table.Row>
						))}
					</Table.Body>
				</Table.Root>
			</Box>
		</Box>
	)
}

export default Delivery
