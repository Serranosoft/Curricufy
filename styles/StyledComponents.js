import styled from '@emotion/styled';
import Link from 'next/link';

/* GLOBALS */


/* INPUTS */

const SectionTitle = styled.p`
    font-size: 19px;
    font-weight: bold;

`

const Input = styled.input`
    display: block;
    width: 80%;
    padding: 8px 24px;
    font-size: 16px;
    background-color: transparent;
    color: black;
    border: 3px solid #575859;
    outline: 0;
    &:focus {
        border-color: black;
    }
    @media(max-width: 920px) {
        width: 95%;
        margin: 0 auto;
    }
`

const TextArea = styled.textarea`
    width: 80%;
    padding: 8px 24px;
    outline: none;
    background: transparent;
    resize: none;
    color: black;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    border: 3px solid #575859;
    &:focus {
        border-color: black;
    }
    @media(max-width: 920px) {
        width: 95%;
        margin: 0 auto;
    }
`

const Select = styled.select`
    display: block;
    width: 80%;
    padding: 8px 24px;
    font-size: 16px;
    background-color: transparent;
    color: black;
    border: 3px solid #575859;
    outline: 0;
    &:focus {
        border-color: black;
    }
    & > option {
        background-color: #151719;
        color: white;
    }
    @media(max-width: 920px) {
        width: 95%;
        margin: 0 auto;
    }
`

const ChooseColor = styled.input`
    display: block;
    width: 80%;
    padding: 2px 24px;
    font-size: 16px;
    background-color: transparent;
    color: white;
    border: 3px solid #373c40;
    outline: 0;
    height: 40px;
    @media(max-width: 920px) {
        width: 95%;
        margin: 0 auto;
    }
`

const Label = styled.label`
    display: block;
    margin: 8px 0;
    & > span {
        display: flex;
        justify-content: center;
        font-size: 13px;
    }
    @media(max-width: 920px) {
        text-align: center;
        & > span {
            margin: 8px 0;
        }
    }
`

const Button = styled.button`
    padding: 10px 24px;
    border-radius: 5px;
    outline: 0;
    border: 0;
    background-color: #a96da3;
    color: black;
    font-weight: bold;
    font-family: "Inter", sans-serif;
    cursor: pointer;
    &:hover {
        background-color: #c280bb;
    }
`


const ErrorInput = styled.span`
    display: block;
    color: red;
    font-size: 12px;
`

const HandleFiles = styled.input`
    display: block;
    padding: 12px 16px;
    border: 3px solid #a96da3;
    border-radius: 7px;
    color: black;
    text-align: center;
    font-weight: bold;
    cursor: pointer;
    @media(max-width: 920px) {
        width: 85%;
        padding: 12px 0;
    }
`

const ProfileImg = styled.img`
    max-width: 250px;
    max-height: 150px;
    display: block;
    justify-self: center;
    margin: 8px auto;
    border-radius: 50%;
`

const GridOptions = styled.img`
    width: 18px;
    height: 18px;
    margin: 0 8px;
    cursor: pointer;
`

/* FLEX */

const FlexEvenly = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    @media(max-width: 920px) {
        flex-direction: ${props =>
        props.gridOpt ? 'column' : 'row'};
        & > button{
            margin: 8px 0;
        }
    }
`

const FlexAround = styled.div`
    display: flex;
    align-items: center; 
    justify-content: space-around ;
`

const FlexBetween = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media(max-width: 920px) {
        flex-direction: ${props =>
        props.gridOpt ? 'column' : 'row'};
    }
    
`

const FlexCenter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 auto;
`

const FlexColumn = styled.div`
    width: 95%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`

/* GRID */

const Grid2 = styled.div`
    width: 95%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;
    @media(max-width: 920px) {
        grid-template-columns: 1fr;
    }
`
const Grid3 = styled.div`
    width: 95%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 0 auto;
    gap: 16px;
    @media(max-width: 920px) {
        grid-template-columns: 1fr;
    }
`

const Sticky = styled.div`
    position: sticky;
    top: 10px;
`

/* DisplayCV */

const DisplayBoldInfo = styled.p`
    line-height: 0.3;
    font-size: 14px;
    font-weight: bold;
`

const SectionLabel = styled.h3`
    width: 40%;
    text-align: center;
    border-bottom: 3px solid black;
    margin: 16px auto;
`

export {
    ErrorInput, HandleFiles, ProfileImg, GridOptions, FlexEvenly, FlexAround, FlexBetween, FlexCenter, Grid2,
    Grid3, Sticky, Input, TextArea, Label, Button, Select, ChooseColor, FlexColumn, DisplayBoldInfo, SectionLabel,
    SectionTitle

}