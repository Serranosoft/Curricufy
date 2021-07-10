import Head from 'next/head'
import Link from "next/link"
import styled from '@emotion/styled';

function CvTemplate({ emoji, title, descr, slug }) {
    return (
        <CvWrapper>
            <Link href={`/curriculums/${slug}`} passHref>
                <a>
                    <CvEmoji>
                        {emoji}
                    </CvEmoji>
                    <CvTitle>
                        {title}
                    </CvTitle>
                    <CvDescr>
                        {descr}
                    </CvDescr>
                </a>
            </Link>
        </CvWrapper>
    )
}

const CvWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid lightgray;
    border-radius: 7px;
    box-shadow: 0 0 10px gray;
    transition: 1s;
    background-color: white;
    & > a {
        display: block;
        height: 100%;
        padding: 8px 16px;
    }
    &:hover {
        transform: scale(1.06);
        cursor: pointer;
    }
`

const CvEmoji = styled.span`
    font-size: 25px;
`

const CvTitle = styled.p`
    font-size: 22px;
`

const CvDescr = styled.p`
    font-size: 14px;
    color: black;
`

export default CvTemplate