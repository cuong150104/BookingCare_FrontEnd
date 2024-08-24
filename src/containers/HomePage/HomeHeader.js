import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './HomeHeader.scss'

class HomeHeader extends Component {

    render() {
        console.log(">>check porp", this.props)
        return (
            <React.Fragment>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <i className="fa-solid fa-bars i_header"></i>
                            <div className='header-logo'>

                            </div>
                        </div>
                        <div className='center-content'>
                            <div className='child-content'>
                                <div><b><FormattedMessage id ="home-header.speciality"/></b></div>
                                <div className='subs-title'><FormattedMessage id ="home-header.searchdoctor"/></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="home-header.Medical-facility"/></b></div>
                                <div className='subs-title'><FormattedMessage id="home-header.Select-hospital-clinic"/></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="home-header.doctor"/></b></div>
                                <div className='subs-title'><FormattedMessage id = "home-header.Choose-a-good-doctor"/></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id ="home-header.Medical-examination-package"/></b></div>
                                <div className='subs-title'><FormattedMessage id ="home-header.general-health-check"/></div>
                            </div>
                        </div>
                        <div className='right-content'>
                            <div className='support'><i className="fa-solid fa-question question-icon"></i><FormattedMessage id="home-header.support"/></div>
                            <div className='language-vi'>VN</div>
                            <div className='language-en'>EN</div>
                        </div>
                    </div>

                </div>
                <div className='home-header-banner'>
                    <div className='content-up'>
                        <div className='title1'><FormattedMessage id ="banner.MEDICAL-PLATFORM"/></div>
                        <div className='title2'><FormattedMessage id ="banner.COMPREHENSIVE-HEALTH-CARE"/></div>
                        <div className='search'>
                            <i className="fa-solid fa-magnifying-glass i-search"></i>
                            <input type='text' placeholder='Tìm chuyên khoa khám bệnh' />
                        </div>
                    </div>
                    <div className='content-down'>
                        <div className='options'>
                            <div className='options-child'>
                                <div className='icon-child'><i className="fa-solid fa-hospital i-icon"></i></div>
                                <div className='text-child'><FormattedMessage id ="banner.Specialist-examination"/></div>
                            </div>
                            <div className='options-child'>
                                <div className='icon-child'><i className="fa-solid fa-mobile i-icon "></i></div>
                                <div className='text-child'><FormattedMessage id ="banner.Remote-examination"/></div>
                            </div>
                            <div className='options-child'>
                                <div className='icon-child'><i className="fa-solid fa-bed-pulse  i-icon"></i> </div>
                                <div className='text-child'><FormattedMessage id ="banner.General-examination"/></div>
                            </div>
                            <div className='options-child'>
                                <div className='icon-child'><i className="fa-solid fa-microscope i-icon "></i></div>
                                <div className='text-child'><FormattedMessage id ="banner.Medical-test"/></div>
                            </div>
                            <div className='options-child'>
                                <div className='icon-child'><i className="fa-solid fa-brain i-icon "></i></div>
                                <div className='text-child'><FormattedMessage id ="banner.Mental-health"/></div>
                            </div>
                            <div className='options-child'>
                                <div className='icon-child'><i className="fa-solid fa-tooth i-icon "></i></div>
                                <div className='text-child'><FormattedMessage id ="banner.Dental-checkup"/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
