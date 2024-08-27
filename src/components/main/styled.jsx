import styled from "styled-components";


export const MainUserContainer= styled.div`
    width:100%;
    height : 35%;
    flex-wrap : wrap;
    gap : 20px;
`
export const UserWeather = styled.img`
    width: 320px;
    height: 110px;
    margin-top: 1em;
`
export const UserWeatherContainer = styled.div `
    width : 100%;
    height : 3%;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    border-radius: 20px;
    padding:2em 0;
    box-shadow: 5px 5px 5px #D9D9D9;
    margin-bottom : 20px;
`
export const UserWeatherSum = styled.p`
    font-size:20px;
    font-weight: 800;
    font-family: Inter;
    margin: 0 0 0 1em;
    flex: 1; 
    text-align: left; 
`
export const WeatherState = styled.img`
    width:35px;
    height: 31px;
    flex: 0 0 auto; 
    margin-left: 1.1em; 
`

export const FeelingWeatherContainer = styled.div`
    display: flex;
`
export const UserText = styled.p`
    display: block;
    font-size: 45px;
    font-weight: bold;
    font-family: Inter;
    margin:0;
    padding: 0 0 0.5em 0.2em;
`

export const HelloText=styled.p`
    display: block;
    font-size: 32px;
    font-weight: bold;
    font-family: Inter;
    margin:0;
    padding: 0 0 0.5em 1em;
`

export const UserStateContainer = styled.div`
    width:100%;
    height: 40%;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 30px;
    padding:2em 0;
    box-shadow: 5px 5px 5px #D9D9D9;
`

export const UserState = styled.img`
    width:62px;
    height: 62px;
    padding-right: 1.5em;
`
export const UserRecommend = styled.p`
    display: flex;
    font-size:20px;
    font-weight: 800;
    font-family: Inter;
    margin:0;
    align-items: center;
`

export const PhraseContainer=styled.div`
    width:100%;
    height: 50%;
    min-height: 260px;
    box-sizing: border-box;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 30px;
    padding:3em;
    margin-top: 1em;
    box-shadow: 5px 5px 5px #D9D9D9;
`

export const PhraseForuul2 = styled.p`
    font-size:20px;
    font-weight: 800;
    font-family: Inter;
    margin:0;
`

// YoutubeGuide 유튜브 링크 예정 ㅇㅇ..
export const YoutubeGuideContainer = styled.div`
    min-height: 20%;
    display:flex;
    flex-direction: row;
    gap:1em;
    overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
`

export const YoutubeContainer = styled.div`
    box-sizing: border-box;
    width: 45%; 
    min-width: 48%;
    height: 80%;
    border-radius: 30px 30px 0 0;
    background-color: #d9d9d9;
    scroll-snap-align: start;
`

export const Thumbnail = styled.img`
    width:100%;
    height: 100%;
    border-radius: 30px 30px 0 0;
`
export const youtubeTitle = styled.div`
    font-size: 15px;
    font-family: Inter;
    font-weight: 600;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 0 0 30px 30px;
    margin-top: -5px;
`