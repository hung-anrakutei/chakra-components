import { Provider } from '@/components/ui/provider'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Login from '@/pages/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '@/pages/Home'
import PasswordChange from '@/pages/PasswordChange'
import Ticket from '@/pages/Ticket'
import Delivery from '@/pages/Delivery'
import Chart from '@/pages/Chart'
import './index.css'
import Settings from './pages/Settings'
import Accounts from './pages/Accounts'
import Pricing from './pages/Pricing'
import Page404 from './pages/Page404'
import Help from './pages/Help'

const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <Home />,
		},
		{
			path: '/login',
			element: <Login />,
		},
		{
			path: '/password-change',
			element: <PasswordChange />,
		},
		{
			path: '/ticket',
			element: <Ticket />,
		},
		{
			path: '/delivery',
			element: <Delivery />,
		},
		{
			path: '/chart',
			element: <Chart />,
		},
		{
			path: '/settings',
			element: <Settings />,
		},
		{
			path: '/accounts',
			element: <Accounts />
		},
		{
			path: '/pricing',
			element: <Pricing />
		},
		{
			path: '/help',
			element: <Help />
		},
		{
			path: '*',
			element: <Page404 />
		}
	],
	{
		future: {
			v7_fetcherPersist: true,
			v7_normalizeFormMethod: true,
			v7_partialHydration: true,
			v7_relativeSplatPath: true,
			v7_skipActionErrorRevalidation: true,
		},
	}
)

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider>
			<RouterProvider
				router={router}
				future={{
					v7_startTransition: true,
				}}
			/>
		</Provider>
	</StrictMode>
)
