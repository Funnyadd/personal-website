import styled from 'styled-components'

export const AboutContainer = styled.div`
`

export const LeftColumn = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: center;
`

export const Content = styled.div`
    animation-duration: 1s;
    animation-name: fadeIn;
    animation-fill-mode: both;
    opacity: 1;
    height: auto;
`

export const Heading = styled.h2`
    font-size: 70px;
    font-family: Teko;
    color: rgb(255, 255, 255);
    line-height: 50px;
    margin-bottom: 0.5rem;
    font-weight: 500;
    margin-top: 0;

    @media screen and (max-width: 576px) {
        padding: 0px 20px;
    }
`

export const Seperator = styled.div`
    height: 5px;
    width: 50px;
    background-color: rgb(12, 148, 0);
    margin-bottom: 20px;

    @media screen and (max-width: 576px) {
        margin: 0px 20px 20px 20px;
    }
`

export const SummaryText = styled.p`
    font-size: 12px;
    font-weight: 300;
    color: rgb(197, 197, 197);

    @media screen and (max-width: 576px) {
        padding: 0px 20px;
    }
`

export const ImageContainer = styled.div`
    border-radius: 20px;
    overflow: hidden;

    @media screen and (max-width: 767px) {
        margin-bottom: 50px;
    }

    @keyframes colorChange {
        0% {
            box-shadow: #10b568 0px 8px 50px;
        }
        100% {
            box-shadow: #4272e3 0px 8px 50px;
        }
    }

    animation: 5s ease 0s infinite alternate none running colorChange;
`

export const Image = styled.img`
    max-width: 400px;
    
    @media screen and (max-width: 1400px) {
        max-width: 280px;
    }

    @media screen and (max-width: 576px) {
        max-width: 200px;
    }
`

export const CounterRow = styled.div`
    margin-top: 100px;
    background-color: rgb(0, 0, 0);
    padding: 100px 0px;
`

export const CounterComponent = styled.div`
    margin: 10px 0px;
    text-align: center;
`

export const CounterContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-items: center;
    align-items: flex-start;

    .symbolContainer {
        flex: 2;
        overflow: visible;
        height: 0;
        transform: translate(2rem, -8rem);
    }

    .valueContainer {
        flex: 3 100%;
    }

    .value {
        font-size: 120px;
        font-family: Teko;
        color: rgb(255, 255, 255);
        line-height: 90px;
    }

    .symbol {
        color: rgb(12, 148, 0);
        font-size: 39px;
    }

    .textContainer {
        flex: 1 100%;
    }

    .text {
        font-size: 20px;
        color: rgb(255, 255, 255);
    }

    @media screen and (max-width: 767px) {
        margin: 50px 0px;
        text-align: center;
    }
    
`

export const TabContainer = styled.div`
    min-height: 400px;
    margin-top: 20px;

    @media screen and (max-width: 576px) {
        margin-top: 50px;
        padding: 0px 20px;
    }
`

export const TabSelectors = styled.div`
    display: flex;
`

export const TabSelector = styled.button`
    color: rgb(255, 255, 255);
    font-size: 20px;
    font-weight: bold;
    background-color: transparent;
    border-top: none;
    border-right: none;
    border-left: none;
    border-image: initial;
    margin: 0px 10px 0px 0px;
    border-bottom: 2px solid rgb(255, 255, 255);
    transition: 0.5s;

    &:hover, &.active {
        border-bottom-color: rgb(12, 148, 0);
    }
    &:focus {
        outline: none
    }

    @media (max-width: 767px) {
        font-size: 18px;
    }
`

export const Tabs = styled.div`
    margin-top: 20px;
`

export const Tab = styled.div`
    display: none;
    
    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    animation: 1s ease 0s 1 normal forwards running fadeIn;
`

export const ProgressBarContainer = styled.div`
    margin-bottom: 25px;
`

export const ProgressBarText = styled.span`
    font-size: 17px;
    font-family: Poppins;
    color: rgb(255, 255, 255);
`

export const ProgressBarValue = styled.span`
    font-size: 17px;
    font-family: Poppins;
    color: rgb(255, 255, 255);
    float: right;
`

export const ProgressBarProgress = styled.div`
    width: ${props => props.width + "%"} !important;
    height: 5px;
    border-radius: 2.5px;
    margin-top: 10px;
    transition: all 2s ease 0s;
    background-color: rgb(12, 148, 0);
`

export const RevealContainer = styled.div`
    position: relative;

    //for future animation
    /* &.animate::before {
        animation: 1.8s ease 0s 1 normal none running;
    }

    &.animate::after {
        animation: 1s ease 0.6s 1 normal none running;
    }

    &::before, &::after {
        content: "";
        position: absolute;
        top: 0px;
        right: 0px;
        height: 100%;
        z-index: 10;
    }

    &::before {
        background-color: rgb(4, 229, 229);
    }

    &::after {
        background-color: rgb(255, 255, 255);
        animation-delay: 0.5s;
    } */
`