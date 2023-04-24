import MinimalLayout from 'layout/MinimalLayout'
import { lazy } from 'react'
const Signin = lazy(() => import('views/signin'))
// ==============================|| MAIN ROUTING ||============================== //

const SignRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: '/',
            element: <Signin />
        }
    ]
}

export default SignRoutes
