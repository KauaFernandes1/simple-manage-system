import './login.css'
import {LoginButton} from '../../atomic/atomo/buttons/buttons-styles.js'


function Login () {
    return (
        <div className='loginContainer'>
            <LoginButton/>
            <div className='loginArea'>
                <div className='loginInputs'>
                </div>
            </div>
        </div>
    )
}


export default Login;