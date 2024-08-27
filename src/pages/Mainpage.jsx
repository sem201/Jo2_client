import React from "react";
import Header from "../components/common/Header";
import UserInfo from "../components/main/Userinfo";
import Phrase from "../components/main/Phrase";
import YoutubeGuide from "../components/main/YoutubeGuide"
import Footer from "../components/common/Footer";
import styled from "styled-components";

const FooterContainer=styled.div`
    padding-top: 70px;
`

const Mainpage=()=>{
    return(
        <>
        <Header/>
        <UserInfo/>
        <Phrase/>
        <YoutubeGuide/>
        <FooterContainer>
            <Footer/>
        </FooterContainer>
        
        </>
    )
}

export default Mainpage;