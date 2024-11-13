import { Provider } from '@/components/ui/provider'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Login from '@/pages/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '@/pages/Home'
import PasswordChange from '@/pages/PasswordChange'
import Ticket from '@/pages/Ticket'

const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <Login />,
		},
		{
			path: '/home',
			element: <Home />,
		},
		{
			path: '/password-change',
			element: <PasswordChange />,
		},
		{
			path: '/ticket',
			element: <Ticket />,
		},
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
