import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import sectionImg from '../../../assets/medical-facilify/benh-vien-go-viet-duc.jpg';
class MedicalFacility extends Component {

    render() {

        return (
            <div className='section-share section-medical-facility'>
                <div className='section-content'>
                    <div className="image-slider-container">
                        <div className='section-container'>
                            <div className='section-header'>
                                <h4 className='title'>Cơ sở y tế nổi bật</h4>
                                <button className='btn-see-more'>Xem thêm</button>
                            </div>
                            <div className='section-body'>
                                <Slider {...this.props.settings}>
                                    <div className='img-customize'>
                                        <img src={sectionImg} className='sectionImg' />
                                        <h5>Hệ thống y tế Thu Cúc </h5>
                                    </div>
                                    <div className='img-customize'>
                                        <img src={sectionImg} className='sectionImg' />
                                        <h5>Hệ thống y tế Thu Cúc</h5>
                                    </div>
                                    <div className='img-customize'>
                                        <img src={sectionImg} className='sectionImg' />
                                        <h5>Hệ thống y tế Thu Cúc</h5>
                                    </div>
                                    <div className='img-customize'>
                                        <img src={sectionImg} className='sectionImg' />
                                        <h5>Hệ thống y tế Thu Cúc</h5>
                                    </div>
                                    <div className='img-customize'>
                                        <img src={sectionImg} className='sectionImg' />
                                        <h5>Hệ thống y tế Thu Cúc</h5>
                                    </div>
                                    <div className='img-customize'>
                                        <img src={sectionImg} className='sectionImg' />
                                        <h5>Hệ thống y tế Thu Cúc</h5>
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

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
