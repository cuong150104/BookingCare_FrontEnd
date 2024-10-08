import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";

import sectionImg from '../../../assets/specialty/co-xuong-khop.jpeg';
class Specialty extends Component {
    render() {
      
        return (
            <div className='section-share section-specialty'>
                <div className='section-content'>
                    <div className="image-slider-container">
                        <div className='section-container'>
                            <div className='section-header'>
                                <h4 className='title'>Chuyên khoa phổ biến</h4>
                                <button className='btn-see-more'>Xem thêm</button>
                            </div>
                            <div className='section-body'>
                                <Slider {...this.props.settings}>
                                    <div className='img-customize'>
                                        <img src={sectionImg} className='sectionImg' />
                                        <h5>Cơ xương khớp</h5>
                                    </div>
                                    <div className='img-customize'>
                                        <img src={sectionImg} className='sectionImg' />
                                        <h5>Cơ xương khớp</h5>
                                    </div>
                                    <div className='img-customize'>
                                        <img src={sectionImg} className='sectionImg' />
                                        <h5>Cơ xương khớp</h5>
                                    </div>
                                    <div className='img-customize'>
                                        <img src={sectionImg} className='sectionImg' />
                                        <h5>Cơ xương khớp</h5>
                                    </div>
                                    <div className='img-customize'>
                                        <img src={sectionImg} className='sectionImg' />
                                        <h5>Cơ xương khớp</h5>
                                    </div>
                                    <div className='img-customize'>
                                        <img src={sectionImg} className='sectionImg' />
                                        <h5>Cơ xương khớp</h5>
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
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
