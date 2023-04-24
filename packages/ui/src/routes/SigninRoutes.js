import SigninLayout from 'layout/SigninLayout'
import { lazy } from 'react'
const Signin = lazy(() => import('views/signin'))
// ==============================|| MAIN ROUTING ||============================== //

const SigninRoutes = {
    path: '/',
    element: <SigninLayout />,
    children: [
        {
            path: '/signin',
            element: <Signin />
        }
    ]
}

export default SigninRoutes
