import SignupLayout from 'layout/SignupLayout'
import { lazy } from 'react'
const Signup = lazy(() => import('views/signup'))
// ==============================|| MAIN ROUTING ||============================== //

const SignupRoutes = {
    path: '/',
    element: <SignupLayout />,
    children: [
        {
            path: '/signup',
            element: <Signup />
        }
    ]
}

export default SignupRoutes
