import React from "react";
import styled from "styled-components";
import Image1 from "../../Assets/Images/majesticons_suitcase-2.png";
import Image2 from "../../Assets/Images/Frame (1).png";
import Image3 from "../../Assets/Images/Frame (2).png";
import Image4 from "../../Assets/Images/Ellipse 2.png";
import Image5 from "../../Assets/Images/Frame (3).png";
import Image6 from "../../Assets/Images/Frame (4).png";
import Image7 from "../../Assets/Images/Frame (5).png";
import Image8 from "../../Assets/Images/Frame (6).png";

const Navbar = () => {
  return (
    <NavigationBar>
      <Logo>
        <img src={Image1} alt="" />
        <H1>Jobee</H1>
      </Logo>
      <ButtonsDiv>
        <Btns>
          <img src={Image2} alt="" />
          <P>Home</P>
        </Btns>
        <Btns>
          <img src={Image5} alt="" />
          <P>Find Jobs</P>
        </Btns>
        <Btns>
          <img src={Image6} alt="" />
          <P>My Jobs</P>
        </Btns>
        <Btns>
          <img src={Image7} alt="" />
          <P>Saved Jobs</P>
        </Btns>
        <Btns>
          <img src={Image8} alt="" />
          <P>Messages</P>
        </Btns>
      </ButtonsDiv>
      <PostDiv>
        <Bell>
          <img src={Image3} alt="" />
        </Bell>
        <img src={Image4} alt="" />
        <PostBtn>Post a Job</PostBtn>
      </PostDiv>
    </NavigationBar>
  );
};

const NavigationBar = styled.div`
  background-color: white;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 32px;
  padding-right: 32px;
  display: flex;
  justify-content: space-between;
`;
const PostDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Bell = styled.button`
  border-radius: 50px;
  border: 1px solid #c9c9da;
  padding: 8px;
  margin-right: 12px;
`;
const PostBtn = styled.button`
  background-color: #537fe7;
  border-radius: 12px;
  padding: 13px 24px;
  color: white;
  border: 0px;
  margin-left: 12px;
`;

const Btns = styled.div`
  display: flex;
  align-items: center;
  margin-right: 32px;
`;

const ButtonsDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
`;
const H1 = styled.h1`
  margin: 0px;
  padding-left: 5px;
`;
const P = styled.p`
  color: #6e6e9b;
  font-weight: 400;
`;

export default Navbar;
