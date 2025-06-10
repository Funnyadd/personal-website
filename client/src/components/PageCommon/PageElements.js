import styled, { keyframes } from 'styled-components';
import logo from "../../images/personal-logo.png"
import * as React from "react"

export const Heading = styled.div`
    text-align: center;
    margin-top: 100px;
    margin-bottom: 50px;
    font-size: 50pt;
    color: grey;
`

export const Text = styled.p`
    text-align: center;
    font-size: 16pt;
    margin-bottom: 100px;
    color: grey;
`

const TopBar = styled.div`
    background-color: #111;
    height: 70px;
    padding: 10px;
    display: flex;
`

const LogoContainer = styled.a`
    display: flex;
    width: 100%;
    justify-content: center;
`

export const ErrorPageTopBar = () => {
    return (
        <TopBar>
            <LogoContainer href={"/"}>
                <img 
                    src={logo} 
                    id="websiteLogoSomethingBrokePage" 
                    alt="Website Logo"
                />
            </LogoContainer>
        </TopBar>
    )
}