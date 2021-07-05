import Head from 'next/head'
import Link from "next/link"
import styled from '@emotion/styled';
import cvs from '../resources/cvs';
import CvTemplate from '../components/cvTemplate';

function curriculums() {
    return (
        <>
            <Head>
                <title>Currículums para cada empleo - Diseños elegantes para 2021 | Curricufy</title>
                <meta name="description" content="Rellena y personaliza currículums online para cualquier tipo de empleo con una estructura elegante, moderna y diferente a todos los demás." />
                <link rel="icon" href="/curricufy.ico" />
            </Head>
            <HeroWrapper>
                <HomeTitle>Elige el currículum que necesitas para postular en tu empleo</HomeTitle>
            </HeroWrapper>
            <Svg3 src="/images/decoration/lapiz.svg" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 230">
                <path fill="#a96da3" fill-opacity="1" d="M0,96L40,112C80,128,160,160,240,149.3C320,139,400,85,480,80C560,75,640,117,720,133.3C800,149,880,139,960,122.7C1040,107,1120,85,1200,96C1280,107,1360,149,1400,170.7L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
            </svg>
            <CvsGrid>
                {cvs.map((el) => {
                    return <CvTemplate key={el.id} emoji={el.emoji} title={el.title} descr={el.descr} slug={el.slug} />
                })}
            </CvsGrid>
        </>
    )
}

export default curriculums;

const HeroWrapper = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #A96DA3;
    @media(max-width: 768px) {
        grid-template-columns: 1fr;
        margin-bottom: 24px;
    }
`

const HomeTitle = styled.h1`
    font-size: 60px;
    font-family: 'Cabin', sans-serif;
    color: #242424;
    text-align: center;
    margin: 0 auto;
    @media(max-width: 768px) {
        padding: 36px 8px 8px 8px;
        font-size: 33px;
        line-height: 1.3;
        word-spacing: 1px;
    }
`

const CvsGrid = styled.div`
    width: 85%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 50px;
    margin: 0px auto 24px auto;
`

const Svg3 = styled.img`
    width: 40px;
    position: absolute;
    top: 200px;
    right: 600px;
`