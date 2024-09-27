import './login.css'
import '../../atomic/atomo/buttons/buttons'
import {InputLogin} from '../../atomic/atomo/inputs/inputs'

function Login () {
    return (
        <div className='loginContainer'>
            <div className='loginArea'>
                <div className='loginInputs'>
                    <InputLogin/>
                </div>
            </div>
        </div>
    )
}


export default Login;