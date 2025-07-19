import styled from "styled-components"

export const PortfolioContainer = styled.div`
    .slick-slide {
        display: block;
    }

    .slick-slide > div > div {
        height: 100%;

        @media (max-width: 1400px) {
            height: 580px !important;
        }

        @media (max-width: 1200px) {
            height: 550px !important;
        }

        @media (max-width: 1024px) {
            height: 600px !important;
        }
    }

    .slick-dots {
        bottom: 0;

        li button:before,
        .slick-dots li.slick-active button:before {
            color: #04e5e5;
        }
    }

    .slick-list {
        @media (max-width: 1400px) {
            height: 620px;
        }

        @media (max-width: 1200px) {
            height: 540px;
        }

        @media (max-width: 1024px) {
            height: 580px;
        }
    }

    margin: 0 4%;

    @media (max-width: 600px) {
        margin: 0 10%;
    }

    @media (max-width: 480px) {
        margin: 0 13%;
    }
`

export const Arrow = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    font-size: 4rem;
    color: gray;
    cursor: pointer;
    user-select: none;
    padding: 20% 0;
`
