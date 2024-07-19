import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import '@fortawesome/fontawesome-free/js/all.js';
import * as actions from "../../store/actions";

import './Login.scss';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleOnChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    hangleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value

        })
    }

    handleLogin = () => {
        console.log(this.state.username, this.state.password)
    }


    render() {
        return (
            <div className='login-backgound'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='text-center col-12 text-login '>Login</div>
                        <div className='form-group col-12 login-input'>
                            <label>Username:</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter your username'
                                value={this.state.username}
                                onChange={(event) => { this.handleOnChangeUsername(event) }} />
                        </div>
                        <div className='form-group col-12 login-input'>
                            <label>Password</label>
                            <input
                                type='password'
                                className='form-control'
                                placeholder='Enter your password'
                                value={this.state.password}
                                onChange={(event) => { this.hangleOnChangePassword(event) }}
                            />
                        </div>
                        <div className='text-center col-12 '>

                            <button className='btn-login' onClick={() => { this.handleLogin() }}>Login</button>
                        </div>
                        <div className='col-12 forgot-login'>
                            Forgot your password
                        </div>
                        <div className='clo-12'>
                            <span className='author-login'>Or sign with:</span>
                        </div>
                        <div className='icon-login'>
                            <i className="fa-brands fa-google-plus-g google"></i>
                            <i className="fa-brands fa-facebook facebook"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
