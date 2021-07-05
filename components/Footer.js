import React from "react";
import styled from '@emotion/styled';
import Link from "next/link";

function Footer() {

    return (
        <FooterSection>
            <FooterWrapper>
                <div>

                    <FooterTitle><Link href="/">Curricufy</Link></FooterTitle>

                    <FooterDescr>La solución mas fácil para decorar tus webs de Wordpress para Adsense o Amazon Afiliados.</FooterDescr>
                </div>
                <Menu>
                    <MenuColumn>
                        <MenuColumnTitle>PRODUCTO</MenuColumnTitle>
                        <Link href="/">Aplicación</Link>
                    </MenuColumn>
                    <MenuColumn>
                        <MenuColumnTitle>FUNDADOR</MenuColumnTitle>
                        <a href="https://twitter.com/ImScholz" target="_blank">Twitter</a>
                        <a href="https://www.linkedin.com/in/manuel-serrano-scholz/" target="_blank">LinkedIn</a>
                    </MenuColumn>
                    <MenuColumn>
                        <MenuColumnTitle>PROYECTOS</MenuColumnTitle>
                        <a href="https://bloques-gutenberg.com" target="_blank">Bloques Gutenberg</a>
                        <a href="https://memorify.manu-scholz.com" target="_blank">Memorify</a>
                        <a href="https://spotify.manu-scholz.com" target="_blank">Fake Spotify</a>
                    </MenuColumn>
                </Menu>
            </FooterWrapper>
        </FooterSection>
    )
}

export default Footer;


const FooterSection = styled.footer`
  width: 100%;
  padding: 80px 40px;
  background-color: #A96DA3;
  color: white;
  @media(max-width: 768px) {
      padding: 40px 16px;
  }
`

const FooterWrapper = styled.section`
  width: 80%;
  display: grid;
  grid-template-columns: 0.7fr 1fr;
  gap: 30px;
  margin: 0 auto;
  @media(max-width: 768px) {
      width: 95%;
      grid-template-columns: 1fr;
    }
`

const FooterTitle = styled.p`
    text-decoration: none;
    font-size: 35px;
    font-weight: bold;
    margin: 0 0 16px 0;
    @media(max-width: 768px) {
        display: block;
        font-size: 18px;
        margin: 8px 0;
    }
`

const Menu = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`

const MenuColumn = styled.div`
    & > a {
        width: 100px;
        display: block;
        color: black;
        text-decoration: none;
        font-size: 15px;
        margin: 3px 0;
    }
    & > a:hover {
        text-decoration: underline;
    }
    @media(max-width: 768px) {
        & > a {
            font-size: 12px;
            margin: 6px 0;
        }
    }
`

const MenuColumnTitle = styled.p`
    font-size: 15px;
    color: white;
    font-weight: bold;
    margin: 8px 0;
    @media(max-width: 768px) {
        font-size: 13px;
    }
`

const FooterDescr = styled.span`
    font-size: 15px;
    color: black;
    font-weight: 300;
    margin: 8px auto;
    & > a {
      color: #34d399;
    }
    @media(max-width: 768px) {
      font-size: 13.5px;
    }
`