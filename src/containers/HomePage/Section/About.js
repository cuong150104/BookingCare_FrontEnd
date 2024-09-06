import React, { Component } from 'react';
import { connect } from 'react-redux';

class About extends Component {
    render() {

        return (
            <div className='section-share section-about'>
                <div className='about-header'>
                    Giới thiệu về BookingCare
                </div>
                <div className='about-content'>
                    <div className='content-left'>
                        <iframe
                            width="90%" height="300px"
                            src="https://www.youtube.com/embed/vK6oRhio2Ek"
                            title="BookingCare: Hệ thống đặt lịch khám bác sĩ chuyên khoa"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen>

                        </iframe>
                    </div>
                    <div className='content-right'>
                        <p className='text-about'>
                            Trong video này, chúng ta sẽ hoàn tất việc design giao diện theo trang bookingcare.vn. Chúng ta sẽ hoàn thiện những phần đang còn dang dở, để từ video tiếp theo, chúng ta sẽ bắt đầu làm về backend và react để tạo dữ liệu thật cho trang home design này.
                        </p>
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

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
