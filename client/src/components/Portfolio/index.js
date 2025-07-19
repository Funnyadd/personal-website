import React from "react"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import AnimatedHeading from "../AnimatedHeading/index.js"
import AnimationContainer from "../AnimationContainer"
import { PortfolioContainer, Arrow } from "./PortfolioSection"
import PortfolioItem from "./parts/PortfolioItem.js"

const Portfolio = (props) => {
    const strapiMyProject = props.data

    const PrevArrow = ({ onClick }) => (
        <Arrow style={{ left: "-30px" }} onClick={onClick}>
            &#8249;
        </Arrow>
    )

    const NextArrow = ({ onClick }) => (
        <Arrow style={{ right: "-30px" }} onClick={onClick}>
            &#8250;
        </Arrow>
    )

    const settings = {
        dots: true,
        swipe: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        slidesToShow: 3,
        arrows: true,
        pauseOnHover: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }

    return (
        <Col md={12} style={{ padding: 0 }} className="container">
            <Container>
                <AnimatedHeading text={strapiMyProject.title} />
            </Container>
            <PortfolioContainer>
                <AnimationContainer animation="fadeIn" duration={2}>
                    <Slider {...settings}>
                        {strapiMyProject.projects.map((p, index) => {
                            return (
                                <PortfolioItem 
                                    key={index} 
                                    index={index} 
                                    image={p.source.url} 
                                    text={p.title} category={p.category} 
                                    link={p.link} 
                                    type="slider" />
                            )
                        })}
                    </Slider>
                </AnimationContainer>
            </PortfolioContainer>
        </Col>
    )
}

export default Portfolio
