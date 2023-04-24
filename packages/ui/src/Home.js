import { BrowserRouter as Router, Route } from 'react-router-dom'
// import Signin from './components/pages/Signin'
// import Signup from './components/pages/Signup'

export default function Home() {
    return (
        <Router>
            <div>
                <Route path='/signin' component={Signin} />
                <Route path='/signup' component={Signup} />
            </div>
        </Router>
    )
}
