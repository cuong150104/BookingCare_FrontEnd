import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import '@fortawesome/fontawesome-free/js/all.js';
import * as actions from "../../store/actions";
import './Login.scss';
import {handleLogin}from '../../services/userService';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
            errMessage: ''
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

    handleLogin = async () => {
        this.setState({
            errMessage:''
        })
        try {
            let data = await handleLogin(this.state.username, this.state.password)
            if(data && data.errCode !== 0)
            {
                this.setState({
                    errMessage: data.message
                })
            }

            if(data && data.errCode === 0)
            {
                this.props.userLoginSuccess(data.user)
                console.log('seccess')
            }
        } catch (error) {
            this.setState({
                errMessage: error.response.data.message
            })
        }
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
                        <div className='col-12' style={{color: 'red'}}>
                            {this.state.errMessage}
                        </div>
                        <div className='text-center col-12 '>
                            <button className='btn-login' onClick={() => { this.handleLogin() }}>Login</button>
                        </div>
                        <div className='col-12 forgot-login'>
                            Forgot your password
                        </div>
                        <div className='clo-12'>
                            <span className='author-login'>Or sign with:   </span>
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
        // userLoginFail: () => dispatch(actions.adminLoginFail()),
        userLoginSuccess: (userInfo) =>dispatch(actions.userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
