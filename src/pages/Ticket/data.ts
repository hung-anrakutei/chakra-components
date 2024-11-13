export const data = [
	{
		description: '設備であるフライヤーが故障し、通常の調理ができない状態。',
		category: 'new',
		assigned_to: 'Tanaka',
		case_id: 'CASE-20240305-001',
	},
	{
		description:
			'食材の納品が2日遅延しており、在庫不足が発生。仕入先に確認し、納品日を調整。',
		category: 'new',
		assigned_to: 'Suzuki',
		case_id: 'CASE-20240224-002',
	},
	{
		description: '冷蔵庫が正常に冷えなくなり、食材の保存に支障が出ている。',
		category: 'new',
		assigned_to: 'Yamada',
		case_id: 'CASE-20240226-003',
	},
	{
		description: '冷蔵庫が正常に冷えなくなり、食材の保存に支障が出ている。',
		category: 'progress',
		assigned_to: 'Yamada',
		case_id: 'CASE-20240226-004',
	},
	{
		description:
			'お客様から「オーダーした料理がメニューと違うものが提供された」',
		category: 'done',
		assigned_to: 'Yamada',
		case_id: 'CASE-20240126-005',
	},
]

export type StatusType = 'new' | 'progress' | 'done' | 'all'

export const getData = (person: string = '', category: StatusType = 'all') => {
	if (!person) {
		return data.filter((item) =>
			category === 'all' ? true : item.category === category
		)
	}

	return data.filter(
		(item) =>
			item.assigned_to === person &&
			(category === 'all' ? true : item.category === category)
	)
}
