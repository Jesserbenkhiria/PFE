import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./StudentJob.css";
const StudentJob = () => {
    const AncienStudent=[
        {
            Job:"Education Manager",
           Name:"Slim Kasraoui",
           Image:"/assets/Capture8.PNG"
           } ,
           {
            Job:"Full Stack Developer",
           Name:"Knaizia Yassine",
           Image:"/assets/Capture14.PNG"
           } ,
           {
            Job:"Front End Developer",
           Name:"Hamrouni Safa",
           Image:"/assets/Capture15.PNG"
           } ,
           {
            Job:"Back End Developer",
           Name:"Ala Lassoued",
           Image:"/assets/Capture9.PNG"
           } ,
           {
            Job:"Software developer",
           Name:"Balli Mohamed",
           Image:"/assets/Capture12.PNG"
           } ,
           {
            Job:"Full Stack engineer",
           Name:"Bjeoui Saber",
           Image:"/assets/Capture10.PNG"
           } ,
           {
            Job:"Product Owner",
           Name:"Abdaoui Wala",
           Image:"/assets/Capture11.PNG"
           } ,
           
           {
            Job:"Odoo developer",
           Name:"Ziadi Amine",
           Image:"/assets/Capture13.PNG"
           } ,
           
        {
            Job:"Orange Digital Center Manager",
            Name:"Heni Mezrani",
        Image:"/assets/Capture1.PNG"
    },
           {
            Job:"Software developer",
           Name:"Kortas Ahmed",
       Image:"/assets/Capture2.PNG"
    } ,
    {
     Job:"Consultant Technique",
    Name:"Ousema Yahyaoui",
Image:"/assets/Capture3.PNG"
} ,

{
 Job:"Mobile Developer",
Name:"Othmen Ghodana",
Image:"/assets/Capture5.PNG"
} ,
{
 Job:"Development Team Lead",
Name:"Fakhredine Mes",
Image:"/assets/Capture6.PNG"
} ,
{
 Job:"Software Engineer",
Name:"Mohamed Dhia",
Image:"/assets/Capture7.PNG"
} ,

{
 Job:"Full Stack Js Developer",
Name:"Temimi Moez",
Image:"/assets/Capture16.PNG"
} ,

    ]

    const responsive = {
        extraLarge: {
          breakpoint: { max: 3000, min: 1324 },
          items: 4,
          slidesToSlide: 1, // optional, default to 1.
        },
        large: {
          breakpoint: { max: 1324, min: 1005 },
          items: 3,
          slidesToSlide: 1, // optional, default to 1.
        },
        medium: {
          breakpoint: { max: 1005, min: 700 },
          items: 2,
          slidesToSlide: 1, // optional, default to 1.
        },
        small: {
          breakpoint: { max: 700, min: 0 },
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
        },
      };
  return (
    <div style={{marginTop:"30px"}}>
     <div style={{width:"80%",marginLeft:"auto",marginRight:"auto",textAlign:"center"}}>
        <h2 style={{marginBottom:"30px"}}>Nos Etudiant</h2>
        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={[
            // "superLargeDesktop",
            // "desktop",
            "tablet",
            "mobile",
          ]}
        >
          {AncienStudent.map((student, index) => {
            return (
                <div key={index} className="card">
                <img src={student.Image} alt="Student" />
                <div className="card-content">
                <span>{student.Name}</span>
                  <p>{student.Job}</p>
                  
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  )
}

export default StudentJob
