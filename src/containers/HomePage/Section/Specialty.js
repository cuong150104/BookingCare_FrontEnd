import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import './Specialty.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import specialtyImg from '../../../assets/specialty/co-xuong-khop.jpeg';
class Specialty extends Component {
    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
        };
        return (
            <div className='section-specialty'>
                <div className='specialty-content'>
                    <div className="image-slider-container">
                        <div className='specialty-container'>
                            <div className='specialty-header'>
                                <h4 className=''>Chuyên khoa phổ biến</h4>
                                <button >Xem thêm</button>
                            </div>
                            <div className='specialty-body'>
                                <Slider {...settings}>
                                    <div className='img-customize'>
                                        <img src={specialtyImg} className='specialtyImg' />
                                        <h3>Cơ xương khớp</h3>
                                    </div>
                                    <div className='img-customize'>
                                        <img src={specialtyImg} className='specialtyImg' />
                                        <h3>Cơ xương khớp</h3>
                                    </div>
                                    <div className='img-customize'>
                                        <img src={specialtyImg} className='specialtyImg' />
                                        <h3>Cơ xương khớp</h3>
                                    </div>
                                    <div className='img-customize'>
                                        <img src={specialtyImg} className='specialtyImg' />
                                        <h3>Cơ xương khớp</h3>
                                    </div>
                                    <div className='img-customize'>
                                        <img src={specialtyImg} className='specialtyImg' />
                                        <h3>Cơ xương khớp</h3>
                                    </div>
                                    <div className='img-customize'>
                                        <img src={specialtyImg} className='specialtyImg' />
                                        <h3>Cơ xương khớp</h3>
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
