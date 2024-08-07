import React, { useEffect } from "react"
import Typewriter from "typewriter-effect"
import background_loop from '../../images/background_loop.mp4'
import "./HeroCSS.scss"
import {
    Background,
    Heading,
    HeadingBox,
    HeadingText,
    HeroContainer,
    ResumeLink,
    SubHeading,
    Type,
} from "./HeroSection"
import AnimatedArrow from "../AnimatedArrow"

const Hero = (props) => {
    const strapiHero = props.data

    useEffect(() => {
        document.body.addEventListener('mousemove', (e) => {
            var amountMovedX = (e.clientX * -.1 / 8);
            var amountMovedY = (e.clientY * -.1 / 8);
            var x = document.getElementsByClassName("parallax-hero-item");
            var i;
            for (i = 0; i < x.length; i++) {
                if (window.innerWidth >= 950) {
                    x[i].style.transform='translate(' + amountMovedX + 'px,' + amountMovedY + 'px)'
                } else {
                    x[i].style.transform='none'
                }
            }
        });
    }, [])

    return (
        <>
            <HeroContainer>
                <Background autoPlay muted loop playsInline id="backgroundVideo">
                    <source src={background_loop} type="video/mp4" />
                </Background>
                <HeadingBox className={"parallax-hero-item"}>
                    <SubHeading>{strapiHero.beforeName}</SubHeading>
                    <Heading>
                        <HeadingText className="glitch" data-text={strapiHero.name}>
                            {strapiHero.name}
                        </HeadingText>
                    </Heading>
                    <Type>
                        <Typewriter
                            options={{
                                strings: strapiHero.quotes,
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </Type>
                    <ResumeLink href={strapiHero.Download.url}>{strapiHero.Download.title}</ResumeLink>
                </HeadingBox>
                <AnimatedArrow />
            </HeroContainer>
        </>
    )
}

export default Hero
