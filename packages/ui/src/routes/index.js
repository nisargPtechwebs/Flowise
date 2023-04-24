import { useRoutes } from 'react-router-dom'

// routes
import MainRoutes from './MainRoutes'
import CanvasRoutes from './CanvasRoutes'
import SigninRoutes from './SigninRoutes'
import SignupRoutes from './SignupRoutes'
import config from 'config'

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    // return useRoutes([MainRoutes, CanvasRoutes, SignRoutes], config.basename)
    return useRoutes([MainRoutes, CanvasRoutes, SigninRoutes, SignupRoutes], config.basename)
}
