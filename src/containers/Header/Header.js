import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import { adminMenu } from './menuApp';
import './Header.scss';
import { LANGUAGES } from '../../utils';
class Header extends Component {
    handleChangeLanguges = (language) => {
        this.props.changeLanguageAppRedux(language)
    }
    render() {
        const { processLogout, language } = this.props;

        return (
            <div className="header-container">
                {/* thanh navigator */}
                <div className="header-tabs-container">
                    <Navigator menus={adminMenu} />
                </div>
                <div className='languages'>
                    <div
                        className={language == LANGUAGES.VI ? 'languages-vi active' : 'languages-vi'}
                        onClick={() => this.handleChangeLanguges(LANGUAGES.VI)}
                    >
                        VI
                    </div>
                    <div
                        className={language == LANGUAGES.EN ? 'languages-vi active' : 'languages-vi'}
                        onClick={() => this.handleChangeLanguges(LANGUAGES.EN)}
                    >
                        EN
                    </div>
                    {/* nút logout */}
                    <div className="btn btn-logout" onClick={processLogout} title='log out'>
                        <i className="fas fa-sign-out-alt"></i>
                    </div>
                </div>

            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
        changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
