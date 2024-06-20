import React from 'react'
import Description from "../Components/Description/Description";
import Presentation from '../Components/Presentation/Presentation';
import StudentJob from"../Components/StudentJob/StudentJob";
import MessageForm from '../Components/MessageForm/messageForm';


const Home = () => {
  return (
    <>
    <Description />
    <Presentation  />
    <StudentJob/>
    <MessageForm/>
    </>
    )
  
}

export default Home