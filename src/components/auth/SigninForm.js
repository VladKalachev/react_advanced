import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form'

class SigninForm extends Component {

    static defaultProps = {

    }

    render() {
        return (
            <div>
                <h2>Sign In</h2>
                <form>
                    <div>
                        <label>
                            Email
                        </label>
                        <Field name="mail" component="input" />
                    </div>
                    <div>
                        <label>
                            Password
                        </label>
                        <Field name="password" component="input" type="password" />
                    </div>
                    <div>
                        <input type="submit" />
                    </div>
                </form>
            </div>
        )
    }
}

export default reduxForm({
    form: 'auth'
})(SigninForm)
