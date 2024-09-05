import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import sectionImg from '../../../assets/doctorHOT/bs-chu-minh-ha.png';
class OutStandingDoctor extends Component {

    render() {

        return (
            <div className='section-share section-out-standing-doctor'>
                <div className='section-content'>
                    <div className="image-slider-container">
                        <div className='section-container'>
                            <div className='section-header'>
                                <h4 className='title'>Bác sĩ nổi bật tuần qua</h4>
                                <button className='btn-see-more'>Xem thêm</button>
                            </div>
                            <div className='section-body'>
                                <Slider {...this.props.settings}>
                                    <div className='img-customize'>
                                        <div className='customize-boder'>
                                            <div className='outer'>
                                                <img src={sectionImg} className='sectionImg section-outstading-doctor' />
                                            </div>
                                            <div className='position text-center'>
                                                <div>Giáo sư, tiến sĩ Nguyễn Đức Cường</div>
                                                <div>Chuyên khoa xương khớp</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='img-customize'>
                                        <div className='customize-boder'>
                                            <div className='outer'>
                                                <img src={sectionImg} className='sectionImg section-outstading-doctor' />
                                            </div>
                                            <div className='position text-center'>
                                                <div>Giáo sư, tiến sĩ Nguyễn Đức Cường</div>
                                                <div>Chuyên khoa xương khớp</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='img-customize'>
                                        <div className='customize-boder'>
                                            <div className='outer'>
                                                <img src={sectionImg} className='sectionImg section-outstading-doctor' />
                                            </div>
                                            <div className='position text-center'>
                                                <div>Giáo sư, tiến sĩ Nguyễn Đức Cường</div>
                                                <div>Chuyên khoa xương khớp</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='img-customize'>
                                        <div className='customize-boder'>
                                            <div className='outer'>
                                                <img src={sectionImg} className='sectionImg section-outstading-doctor' />
                                            </div>
                                            <div className='position text-center'>
                                                <div>Giáo sư, tiến sĩ Nguyễn Đức Cường</div>
                                                <div>Chuyên khoa xương khớp</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='img-customize'>
                                        <div className='customize-boder'>
                                            <div className='outer'>
                                                <img src={sectionImg} className='sectionImg section-outstading-doctor' />
                                            </div>
                                            <div className='position text-center'>
                                                <div>Giáo sư, tiến sĩ Nguyễn Đức Cường</div>
                                                <div>Chuyên khoa xương khớp</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='img-customize'>
                                        <div className='customize-boder'>
                                            <div className='outer'>
                                                <img src={sectionImg} className='sectionImg section-outstading-doctor' />
                                            </div>
                                            <div className='position text-center'>
                                                <div>Giáo sư, tiến sĩ Nguyễn Đức Cường</div>
                                                <div>Chuyên khoa xương khớp</div>
                                            </div>
                                            <div />
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
