import React, {Component} from 'react';
import SignInForm from '../auth/SigninForm'

class AuthPage extends Component {
    static defaultProps = {

    }

    render() {
        return (
            <div>
                <h1>Auth Page</h1>
                <SignInForm/>
            </div>
        )
    }
}

export default AuthPage;
