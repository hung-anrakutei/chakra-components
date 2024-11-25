import { Stack } from '@chakra-ui/react'
import { BarChart } from '@mui/x-charts/BarChart'
import { chartsGridClasses } from '@mui/x-charts/ChartsGrid'
import { axisClasses } from '@mui/x-charts/ChartsAxis'

const Chart = () => {
	const dataset = [
		{ day: '11', amount: 22 },
		{ day: '12', amount: 25 },
		{ day: '13', amount: 50 },
		{ day: '14', amount: 49 },
		{ day: '15', amount: 7 },
		{ day: '16', amount: 9 },
		{ day: '17', amount: 19 },
		{ day: '18', amount: 17 },
		{ day: '19', amount: 19 },
		{ day: '20', amount: 61 },
		{ day: '21', amount: 55 },
	]

	return (
		<Stack>
			<BarChart
				xAxis={[
					{
						id: 'barCategories',
						data: [
							'11',
							'12',
							'13',
							'14',
							'15',
							'16',
							'17',
							'18',
							'19',
							'20',
							'21',
						],
						scaleType: 'band',
						colorMap: {
							type: 'ordinal',
							colors: [
								'red',
								'green',
								'blue',
								'yellow',
								'purple',
								'orange',
								'pink',
								'cyan',
								'magenta',
								'lime',
								'teal',
								'indigo',
							],
						},
					},
				]}
				yAxis={[
					{
						id: 'y-axis',
						valueFormatter: (value: string) => `${value}$`, // Thêm ký hiệu `$` vào giá trị
					},
				]}
				grid={{
					horizontal: true,
				}}
				series={[
					{
						data: [21, 23, 50, 51, 7, 9, 19, 17, 19, 61, 54],
						color: 'blue',
					},
				]}
				width={600}
				height={300}
				borderRadius={10}
			/>
			<BarChart
				dataset={dataset}
				xAxis={[
					{
						id: 'day',
						scaleType: 'band',
						dataKey: 'day',
						tickPlacement: 'middle',
						label: 'Days',
					},
				]}
				series={[
					{
						dataKey: 'amount',
						label: 'Amount',
					},
				]}
				width={500}
				height={300}
				margin={{ top: 40, right: 5, left: 70 }}
				yAxis={[
					{
						valueFormatter: (value: number) => `$${value}`,
						label: 'Values',
					},
				]}
				slotProps={{
					legend: {
						direction: 'column',
						position: { vertical: 'bottom', horizontal: 'left' },
						padding: 0,
					},
				}}
				borderRadius={10}
				grid={{
					vertical: false,
					horizontal: true,
				}}
				sx={{
					[`& .${chartsGridClasses.line}`]: {
						strokeDasharray: '5 3',
						strokeWidth: 2,
					},

					[`.${axisClasses.left} .${axisClasses.label}`]: {
						// Move the y-axis label with CSS
						transform: 'translateX(-15px)',
					},
					'& .MuiChartsAxis-left .MuiChartsAxis-line': {
						display: 'none',
					},
				}}
			/>
		</Stack>
	)
}

export default Chart
