import React from "react";
import styled from '@emotion/styled';
import Link from "next/link";

function Header() {

    return (
        <HeaderSection>
            <Link href="/">
                <a>
                    <Logo src="/images/curricufy.png" alt="Curricufy.com - crear cv" /><HeaderTitle>urricufy</HeaderTitle>
                </a>
            </Link>
        </HeaderSection>
    )
}

export default Header;


const HeaderSection = styled.header`
  width: 100%;
  display: flex;
  padding: 24px 32px;
  align-items: center;
  justify-content: space-between;
  background-color: #A96DA3;
  @media(max-width: 768px) {
      flex-direction: column;
      padding: 10px 8px;
  }
  & > a {
      text-decoration: none;
      display: flex;
      align-items: flex-end;
  }
`

const HeaderTitle = styled.span`
  font-size: 24px;
  margin-left: 4px;
  margin-bottom: 5px;
  letter-spacing: 5px;
`

const Logo = styled.img`
  width: 55px;
  cursor: pointer;

`