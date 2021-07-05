import { useReducer } from "react";
import Head from 'next/head'
import Link from "next/link"
import styled from '@emotion/styled';
import FormContainer from "../../components/FormContainer";
import DisplayCv from "../../components/DisplayCv";
import cvs from '../../resources/cvs';

function createCv(props) {

    const [data, onUpdate] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            avatar: "",
            name: "",
            email: "",
            phone: "",
            web: "",
            generalColumn: false,

            studies: [],
            educationColumns: 3,

            works: [],

            skills: [],
            round: false,

            langs: [],

            extraInfo: [],

            webs: []
        }
    );

    const setValues = event => {
        if (typeof (event) === "object") {
            if (event != undefined) {
                switch (Object.keys(event)[0]) {
                    case "generalColumn":
                        event.generalColumn ? onUpdate({ ["generalColumn"]: true }) : onUpdate({ ["generalColumn"]: false })
                        break;
                    case "round":
                        event.round ? onUpdate({ ["round"]: true }) : onUpdate({ ["round"]: false })
                        break;
                    case "skills":
                        onUpdate({ ["skills"]: event.skills });
                        break;
                    case "studies":
                        onUpdate({ ["studies"]: event.studies });
                        break;
                    case "works":
                        onUpdate({ ["works"]: event.works });
                        break;
                    case "langs":
                        onUpdate({ ["langs"]: event.langs });
                        break;
                    case "extraInfo":
                        onUpdate({ ["extraInfo"]: event.extraInfo });
                        break;
                    case "webs":
                        onUpdate({ ["webs"]: event.webs });
                        break;
                }
            }
        }

        if (event.educationColumns) {
            onUpdate({ ["educationColumns"]: event.educationColumns })
        }

        if (event.target != undefined) {
            const name = event.target.name;
            let newValue = event.target.value;
            if (event.target.name === "avatar") {
                newValue = URL.createObjectURL(event.target.files[0])
            }
            onUpdate({ [name]: newValue });
        }
    };
    const metaDataDescription = `Rellena y echa tu ${props.title} y encuentra empleo con un modelo elegante y bien estructurado`;
    return (
        <>
            <Head>
                <title>{props.title} | Curricufy</title>
                <meta name="description" content={metaDataDescription}/>
                <link rel="icon" href="/curricufy.ico" />
            </Head>
            <HeroWrapper>
                <HomeTitle>Rellena tu {props.title} {props.emoji}</HomeTitle>
            </HeroWrapper>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 190">
                <path fill="#a96da3" fill-opacity="1" d="M0,96L40,112C80,128,160,160,240,149.3C320,139,400,85,480,80C560,75,640,117,720,133.3C800,149,880,139,960,122.7C1040,107,1120,85,1200,96C1280,107,1360,149,1400,170.7L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
            </svg>
            <CreateCvWrapper>
                <FormContainer
                    setValues={setValues}
                    data={data}
                    sections={props.sections}
                />
                <DisplayCv sections={props.sections} {...data} />
            </CreateCvWrapper>
        </>
    )
}

export const getStaticPaths = async () => {
    return {
        paths: cvs.map((el) => ({
            params: {
                slug: el.slug
            },
        })),
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const slug = context.params.slug;
    return {
        props: cvs.find((el) => el.slug === slug),
    };
}

export default createCv;

const CreateCvWrapper = styled.div`
    max-width: 95%;
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    justify-content: center;
    margin: 0px auto 32px auto;
    gap: 16px;
    background: #dbdbdb;
`
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
    font-size: 46px;
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