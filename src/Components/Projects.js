import React from "react";
import styled from "styled-components";
// import cry from "../imgs/crypto.jpg";

const Projectss = styled.section`
  padding: 90px 60px;
  width: 100%;
  @media (max-width: 1024px) {
    padding: 90px 0;
  }
  h3 {
    font-weight: 800;
    font-family: "Khula", sans-serif;
    font-size: 50px;
    line-height: 59px;
    letter-spacing: 0em;
    text-align: left;
    @media (max-width: 768px) {
      font-size: 25px;
      line-height: 29px;
    }
  }
  .ProjectGrid {
    margin-top: 60px;
    display: grid;
    grid-row-gap: 60px;
    grid-column-gap: 75px;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));

    @media (max-width: 768px) {
      margin-top: 30px;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      grid-column-gap: 50px;
    }
    a {
      color: white;
    }
    a:hover {
      text-decoration: none;
      transform: scale(1.05);
    }
    .box {
      position: relative;
      padding: 0 20px;
      height: 680px;
      background: #5252c2;
      box-sizing: border-box;
      
      @media (max-width: 768px) {
        height: 500px;
        margin: auto;
        padding-left: 10px;
      }
      .text {
        padding: 40px 20px 20px;
        height: 300px;
        @media (max-width: 768px) {
            height: 250px;
            padding-right: 10px;
            
          }
        h4 {
          text-transform: uppercase;
          font-weight: 800;
          letter-spacing: 3px;
          font-size: 18px;
          font-family: "Khula", sans-serif;
          line-height: 41px;
          color: #ffffff;
          @media (max-width: 768px) {
            font-size: 17px;
          }
        }
       
        p {
          font-family: "Manrope",sans-serif;
          font-weight: 800;
          font-size: 37px;
          padding-right: 60px;
          margin-top: 15px;
          line-height: 1.2;
          @media (max-width: 768px) {
            font-size: 25px;
            padding-right: 0;
          }
        }
      }
        
          
        
        
      }
    }
  }
`;

const Projects = () => {
  return (
    <>
      <Projectss id="projects">
        <h3>Checkout some of my works</h3>

        <div className="ProjectGrid">
          <a
            href="https://getcryptonews.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="box">
              <div className="text">
                <h4>Crypto News </h4>
                <p>
                  A website that displays news about Crypto currencies made with
                  Vue
                </p>
              </div>
              <div className="photo">
                {/* <img src={cry} alt="crypto mockup" /> */}
              </div>
            </div>
          </a>
          <a
            href="https://instaclone70.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="box">
              <div className="text">
                <h4>Instagram Clone </h4>
                <p>
                  A web clone of Instagram, made with React, nodejs and MongoDB
                </p>
              </div>
              <div className="insta">
                {/* <img src={cry} alt="crypto mockup" /> */}
              </div>
            </div>
          </a>
          <a
            href="https://moshchatapp.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="box">
              <div className="text">
                <h4>Chat App </h4>
                <p>
                  {" "}
                  A messaging app made with Nuxtjs, Vue, Vuetify and Firebase{" "}
                </p>
              </div>
              <div className="chat">
                {/* <img src={cry} alt="crypto mockup" /> */}
              </div>
            </div>
          </a>
          <a
            href="https://killuaquiz.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="box">
              <div className="text">
                <h4>Quizer</h4>
                <p>An Online Quiz App made with React </p>
              </div>
              <div className="quiz">
                {/* <img src={cry} alt="crypto mockup" /> */}
              </div>
            </div>
          </a>

          <a
            href="https://relaxed-shirley-f10c3b.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="box">
              <div className="text">
                <h4>Whoisng </h4>
                <p>
                  A website that searches and displays information about domain,
                  made with React
                </p>
              </div>
              <div className="who">
                {/* <img src={cry} alt="crypto mockup" /> */}
              </div>
            </div>
          </a>
        </div>
      </Projectss>
    </>
  );
};

export default Projects;
