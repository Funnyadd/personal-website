import React from "react"
import Tilt from "react-parallax-tilt"
import styled, { keyframes } from "styled-components"
import RevealContent from "../../RevealContent"
import DesktopContent from "./DesktopContent.js"

class PortfolioItem extends React.Component {
    constructor(props) {
        super(props)
        this.showContent = this.showContent.bind(this)
    }

    showContent() {
        setTimeout(() => {
            this.child.enable()
            document.getElementById(`portfolio-item-${this.props.index}`).classList.add("blue-shadow")
        }, 800)
    }

    showImage() {
        const Image = styled.img`
            width: 100%;
            object-fit: cover;
            height: ${this.props.type !== "slider" ? "100%" : "600px"};
            transition: 0.5s;
            vertical-align: middle;
            
            @media (max-width: 1400px) {
                height: 530px;
            }

            @media (max-width: 1200px) {
                height: 440px;
            }

            @media (max-width: 1024px) {
                height: 500px;
            }
        `
        if (this.props.type === "slider") {
            return <Image src={this.props.image} alt={this.props.text} />
        } else {
            return (
                <RevealContent style={{ display: "flex", "justify-content": "center" }} callParentMethod={true} parentMethod={this.showContent}>
                    <Image src={this.props.image} alt={this.props.text} />
                </RevealContent>
            )
        }
    }

    render() {
        const MoveUp = keyframes`
            0% { transform: translateY(0); }
            100% { transform: translateY(-20px); }
        `

        const MoveDown = keyframes`
            0% { transform: translateY(0); }
            100% { transform: translateY(20px); }
        `

        const Text = styled.div`
            transform: translateY(50px);
            transition: 0.5s;
            width: 100%;
            text-align: center;
        `
        const Heading = styled.h4`
            color: #fff;
            font-weight: 600;
            font-size: 25px;
        `

        const SubHeading = styled.h5`
            color: #fff;
            font-size: 20px;
            font-weight: 400;
            text-transform: uppercase;
        `

        const MobileContent = styled.div`
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            opacity: 0 !important;
            transition: 0.5s;
            display: flex;
            align-items: flex-end;
            visibility: visible;
            background-image: linear-gradient(to top, rgba(4, 229, 229, 1), rgba(255, 255, 255, 0));

            @media (min-width: 1025px) {
                display: none !important;
            }
        `
        const Item = styled.div`
            position: relative;
            height: 600px;
            overflow: hidden;
            max-width: 95%;
            margin: 40px ${this.props.type !== "slider" ? "0" : "auto"};
            border-radius: 10px;

            &.move-up {
                animation: ${MoveUp} 5s infinite alternate;
            }

            &.move-down {
                animation: ${MoveDown} 5s infinite alternate;
            }
            
            &:hover {
                ${Text} {
                    transform: translateY(-10px);
                }

                img {
                    transform: scale(1.1);
                }

                ${MobileContent} {
                    opacity: 1 !important;
                }
            }

            @media (max-width: 1400px) {
                height: 90%;
            }

            @media (max-width: 1200px) {
                height: 80%;
            }
        `

        if (this.props.type === "slider") {
            return (
                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1}>
                    <a href={this.props.link} target="_blank" rel="noopener noreferrer" aria-label="Portfolio Link">
                        <Item className="blue-shadow">
                            {this.showImage()}
                            <MobileContent>
                                <Text>
                                    <Heading>{this.props.text}</Heading>
                                    <SubHeading>{this.props.category}</SubHeading>
                                </Text>
                            </MobileContent>
                            <DesktopContent text={this.props.text} category={this.props.category} ref={cd => (this.child = cd)} type={this.props.type} />
                        </Item>
                    </a>
                </Tilt>
            )
        } else {
            return (
                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1}>
                    <a href={this.props.link} target="_blank" rel="noopener noreferrer" aria-label="Portfolio Link">
                        <Item className={`${this.props.index % 2 === 0 ? "move-up" : "move-down"}`} id={`portfolio-item-${this.props.index}`}>
                            {this.showImage()}
                            <MobileContent>
                                <Text>
                                    <Heading>{this.props.text}</Heading>
                                    <SubHeading>{this.props.category}</SubHeading>
                                </Text>
                            </MobileContent>
                            <DesktopContent text={this.props.text} category={this.props.category} ref={cd => (this.child = cd)} type={this.props.type} />
                        </Item>
                    </a>
                </Tilt>
            )
        }
    }
}

export default PortfolioItem
