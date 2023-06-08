import { styled } from "styled-components";

export default function Footer() {
    return (
        <FooterWrapper>
            <FooterShape src={"https://i.imgur.com/SfqJCDU.png"}></FooterShape>
            <FooterText>Desenvolvimento:</FooterText>
            <FooterText>Gabriel Peres Lutz</FooterText>
            <FooterText>Marieli Hubner</FooterText>
        </FooterWrapper>     
    )
}

const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 128px;
    width: 100vw;
    background-color: #1F2022 ;
`

const FooterShape = styled.img`
    width: 350px;
    position: absolute;
    margin-top:  -105px;
`

const FooterText = styled.p`
    font-size: 14px;
    color: #F5F4F5;
    z-index: 2;
    margin: 3px;
    font-weight: 300;
`
