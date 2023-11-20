import React from "react";
import styled from "styled-components";
import Frame1 from "../../Assets/Images/Frame (9).png";
import Frame2 from "../../Assets/Images/Frame (10).png";
import Image1 from "../../Assets/Images/image 3.png";
import Frame3 from "../../Assets/Images/Frame (8).png";
import Frame4 from "../../Assets/Images/Frame (11).png";

const MainContext = () => {
  return (
    <Context>
      <SearchContext>
        <SearchDiv>
          <InputDiv>
            <Search>
              <img src={Frame1} alt="" />
              <Input type="search" placeholder="UI/UX Designer" />
            </Search>
          </InputDiv>
          <SelectDiv>
            <img src={Frame2} alt="" />
            <Select name="countries">
              <option value="usa">USA</option>
              <option value="usa">USA</option>
              <option value="usa">USA</option>
              <option value="usa">USA</option>
            </Select>
          </SelectDiv>
        </SearchDiv>
        <SearchBtn>Search</SearchBtn>
      </SearchContext>
      <Results>
        <H3>Search Results</H3>
        <P>30,000 results found</P>
      </Results>
      <Cards>
        <Card>
          <CompanyInfo>
            <Brand>
              <IMG src={Image1} alt="" />
              <BrandName>
                <H3>UI/UX Designer</H3>
                <P>Netflix</P>
              </BrandName>
            </Brand>
            <Frame>
              <img src={Frame3} alt="" />
            </Frame>
          </CompanyInfo>
          <ButtonsDiv>
            <Btn>Full-Time</Btn>
            <Btn>Expert</Btn>
            <Btn>Remote</Btn>
          </ButtonsDiv>
          <SallaryDiv>
            <Sallary>
              <img src={Frame4} alt="" />
              <p>$10k/month</p>
            </Sallary>
            <P>2mins ago</P>
          </SallaryDiv>
        </Card>
        <Card>
          <CompanyInfo>
            <Brand>
              <IMG src={Image1} alt="" />
              <BrandName>
                <H3>UI/UX Designer</H3>
                <P>Netflix</P>
              </BrandName>
            </Brand>
            <Frame>
              <img src={Frame3} alt="" />
            </Frame>
          </CompanyInfo>
          <ButtonsDiv>
            <Btn>Full-Time</Btn>
            <Btn>Expert</Btn>
            <Btn>Remote</Btn>
          </ButtonsDiv>
          <SallaryDiv>
            <Sallary>
              <img src={Frame4} alt="" />
              <p>$10k/month</p>
            </Sallary>
            <P>2mins ago</P>
          </SallaryDiv>
        </Card>
      </Cards>
      <Cards>
        <Card>
          <CompanyInfo>
            <Brand>
              <IMG src={Image1} alt="" />
              <BrandName>
                <H3>UI/UX Designer</H3>
                <P>Netflix</P>
              </BrandName>
            </Brand>
            <Frame>
              <img src={Frame3} alt="" />
            </Frame>
          </CompanyInfo>
          <ButtonsDiv>
            <Btn>Full-Time</Btn>
            <Btn>Expert</Btn>
            <Btn>Remote</Btn>
          </ButtonsDiv>
          <SallaryDiv>
            <Sallary>
              <img src={Frame4} alt="" />
              <p>$10k/month</p>
            </Sallary>
            <P>2mins ago</P>
          </SallaryDiv>
        </Card>
        <Card>
          <CompanyInfo>
            <Brand>
              <IMG src={Image1} alt="" />
              <BrandName>
                <H3>UI/UX Designer</H3>
                <P>Netflix</P>
              </BrandName>
            </Brand>
            <Frame>
              <img src={Frame3} alt="" />
            </Frame>
          </CompanyInfo>
          <ButtonsDiv>
            <Btn>Full-Time</Btn>
            <Btn>Expert</Btn>
            <Btn>Remote</Btn>
          </ButtonsDiv>
          <SallaryDiv>
            <Sallary>
              <img src={Frame4} alt="" />
              <p>$10k/month</p>
            </Sallary>
            <P>2mins ago</P>
          </SallaryDiv>
        </Card>
      </Cards>
      <Cards>
        <Card>
          <CompanyInfo>
            <Brand>
              <IMG src={Image1} alt="" />
              <BrandName>
                <H3>UI/UX Designer</H3>
                <P>Netflix</P>
              </BrandName>
            </Brand>
            <Frame>
              <img src={Frame3} alt="" />
            </Frame>
          </CompanyInfo>
          <ButtonsDiv>
            <Btn>Full-Time</Btn>
            <Btn>Expert</Btn>
            <Btn>Remote</Btn>
          </ButtonsDiv>
          <SallaryDiv>
            <Sallary>
              <img src={Frame4} alt="" />
              <p>$10k/month</p>
            </Sallary>
            <P>2mins ago</P>
          </SallaryDiv>
        </Card>
        <Card>
          <CompanyInfo>
            <Brand>
              <IMG src={Image1} alt="" />
              <BrandName>
                <H3>UI/UX Designer</H3>
                <P>Netflix</P>
              </BrandName>
            </Brand>
            <Frame>
              <img src={Frame3} alt="" />
            </Frame>
          </CompanyInfo>
          <ButtonsDiv>
            <Btn>Full-Time</Btn>
            <Btn>Expert</Btn>
            <Btn>Remote</Btn>
          </ButtonsDiv>
          <SallaryDiv>
            <Sallary>
              <img src={Frame4} alt="" />
              <p>$10k/month</p>
            </Sallary>
            <P>2mins ago</P>
          </SallaryDiv>
        </Card>
      </Cards>
      <Cards>
        <Card>
          <CompanyInfo>
            <Brand>
              <IMG src={Image1} alt="" />
              <BrandName>
                <H3>UI/UX Designer</H3>
                <P>Netflix</P>
              </BrandName>
            </Brand>
            <Frame>
              <img src={Frame3} alt="" />
            </Frame>
          </CompanyInfo>
          <ButtonsDiv>
            <Btn>Full-Time</Btn>
            <Btn>Expert</Btn>
            <Btn>Remote</Btn>
          </ButtonsDiv>
          <SallaryDiv>
            <Sallary>
              <img src={Frame4} alt="" />
              <p>$10k/month</p>
            </Sallary>
            <P>2mins ago</P>
          </SallaryDiv>
        </Card>
        <Card>
          <CompanyInfo>
            <Brand>
              <IMG src={Image1} alt="" />
              <BrandName>
                <H3>UI/UX Designer</H3>
                <P>Netflix</P>
              </BrandName>
            </Brand>
            <Frame>
              <img src={Frame3} alt="" />
            </Frame>
          </CompanyInfo>
          <ButtonsDiv>
            <Btn>Full-Time</Btn>
            <Btn>Expert</Btn>
            <Btn>Remote</Btn>
          </ButtonsDiv>
          <SallaryDiv>
            <Sallary>
              <img src={Frame4} alt="" />
              <p>$10k/month</p>
            </Sallary>
            <P>2mins ago</P>
          </SallaryDiv>
        </Card>
      </Cards>
    </Context>
  );
};

const Frame = styled.div`
  padding-left: 40px;
`;

const Btn = styled.button`
  background-color: rgba(83, 116, 231, 0.1);
  border: none;
  border-radius: 50px;
  padding: 8px 14px;
`;
const Sallary = styled.div`
  display: flex;
  align-items: center;
`;

const BrandName = styled.div``;

const CompanyInfo = styled.div`
  display: flex;
`;
const Brand = styled.div`
  display: flex;
`;
const IMG = styled.img`
  width: 50px;
  height: 50px;
  flex-shrink: 0;
`;

const SallaryDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Cards = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 16px;
`;
const Card = styled.div`
  padding: 20px;
  background-color: white;
  border-radius: 10px;
`;
const ButtonsDiv = styled.div`
  display: flex;
  font-size: 1px;
  justify-content: space-between;
  padding-top: 16px;
  padding-bottom: 16px;
`;

const Select = styled.select`
  border: none;
  color: #6e6e9b;
`;
const SearchContext = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr;
`;
const SearchBtn = styled.button`
  background-color: #537fe7;
  border-radius: 20px;
  padding: 16px 24px;
  color: white;
  border: 0px;
  margin-left: 20px;
`;
const Results = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const SelectDiv = styled.div`
  display: flex;
  align-items: center;
`;
const Search = styled.div`
  display: flex;
  align-items: center;
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
  margin: 0px;
`;
const Input = styled.input`
  border: none;
`;

const InputDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Context = styled.div`
  margin-top: 32px;
  margin-left: 16px;
  margin-right: 16px;
`;
const SearchDiv = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 16px 20px;
  border-radius: 20px;
`;

export default MainContext;
