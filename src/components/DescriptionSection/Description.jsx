import React from "react";
import styled from "styled-components";
import Logo from "../../Assets/Images/image 3.png";
import Frame1 from "../../Assets/Images/Frame (7).png";
import Frame2 from "../../Assets/Images/Frame (8).png";

const Description = () => {
  return (
    <DescriptionPage>
      <CompanyInfo>
        <MainInfro>
          <img src={Logo} alt="" />
          <H2>UI/UX Designer</H2>
          <P>Netflix New York,US</P>
          <Applicants>1000+ Applicants</Applicants>
        </MainInfro>
        <div>
          <FramesDiv>
            <img src={Frame1} alt="" />
            <img src={Frame2} alt="" />
          </FramesDiv>
        </div>
      </CompanyInfo>
      <hr />
      <JobInfo>
        <InfroRow>
          <Infos>
            <H3>Job Type</H3>
            <P>Full-Time</P>
          </Infos>
          <Infos>
            <H3>Experience</H3>
            <P>Expert</P>
          </Infos>
        </InfroRow>
        <InfroRow>
          <Infos>
            <H3>Position</H3>
            <P>Remote</P>
          </Infos>
          <Infos>
            <H3>Date Posted</H3>
            <P>2 march, 2023</P>
          </Infos>
        </InfroRow>
      </JobInfo>
      <hr />
      <JobDescription>
        <H2>Job Description</H2>
        <P>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, qui
          repellat adipisci debitis beatae ducimus perspiciatis ab dolor
          asperiores molestiae nihil aperiam magni porro praesentium a eaque
          facere, consectetur amet.
        </P>
      </JobDescription>
      <hr />
      <ApplyPage>
        <H2>Base Salary</H2>
        <P>10k/Month</P>
      </ApplyPage>
      <ButtonPlace>
        <ApplyBtn>Apply</ApplyBtn>
      </ButtonPlace>
    </DescriptionPage>
  );
};
const ButtonPlace = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
`;
const JobDescription = styled.div`
  padding-top: 10px;
`;
const ApplyBtn = styled.button`
  background-color: #537fe7;
  border-radius: 12px;
  padding: 13px 24px;
  color: white;
  border: 0px;
`;

const JobInfo = styled.div`
  padding-top: 10px;
  /* padding-bottom: 18px; */
`;
const InfroRow = styled.div`
  display: flex;
  padding-top: 10px;
`;
const Infos = styled.div`
  padding-right: 25px;
`;
const Applicants = styled.button`
  color: #5374e7;
  background-color: rgba(83, 116, 231, 0.1);
  border: none;
  border-radius: 50px;
  padding: 8px 14px;
`;
const FramesDiv = styled.div`
  display: flex;
  align-items: center;
`;

const DescriptionPage = styled.div`
  background-color: white;
  margin-top: 32px;
  margin-right: 32px;
  margin-bottom: 32px;
  padding: 32px;
  border-radius: 10px;
`;
const CompanyInfo = styled.div`
  display: flex;
  padding-bottom: 20px;
  justify-content: space-between;
`;
const H2 = styled.h2`
  margin: 0px;
`;
const H3 = styled.h3`
  margin: 0px;
`;
const P = styled.p`
  color: #6e6e9b;
  font-weight: 400;
`;
const MainInfro = styled.div``;
const ApplyPage = styled.div`
  padding-top: 10px;
`;

export default Description;
