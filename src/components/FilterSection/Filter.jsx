import React from "react";
import styled from "styled-components";

const Filter = () => {
  return (
    <FilterPage>
      <FilterDiv>
        <H2>Filters</H2>
        <ResetBtn>Reset All</ResetBtn>
      </FilterDiv>
      <hr />
      <SortByDiv>
        <H2>Sort By</H2>
        <CheckBoxDiv>
          <CheckBoxRow>
            <div>
              <input type="checkbox" id="recent" checked />
              <Label htmlFor="recent">Most Recent</Label>
            </div>
            <div>
              <input type="checkbox" id="recent" />
              <Label htmlFor="recent">A-Z</Label>
            </div>
          </CheckBoxRow>
          <CheckBoxRow>
            <div>
              <input type="checkbox" id="recent" />
              <Label htmlFor="recent">Top Salary</Label>
            </div>
            <div>
              <input type="checkbox" id="recent" />
              <Label htmlFor="recent">Trending</Label>
            </div>
          </CheckBoxRow>
        </CheckBoxDiv>
      </SortByDiv>
      <hr />
      <SalaryRangeDiv>
        <RangeInputDiv>
          <H2>Salary Range</H2>
        </RangeInputDiv>
        <RangeInput type="range" name="" id="ranges" list="values" />
        <DataList id="ranges">
          <option value="0" label="$100k"></option>
          <option value="50" label="$60k"></option>
        </DataList>
      </SalaryRangeDiv>
      <hr />
      <ExperienceDiv>
        <H2>Experience</H2>
        <CheckBoxDiv>
          <CheckBoxRow>
            <div>
              <input type="checkbox" id="recent" checked />
              <Label htmlFor="recent">Full-Time</Label>
            </div>
            <div>
              <input type="checkbox" id="recent" />
              <Label htmlFor="recent">Part-Time</Label>
            </div>
          </CheckBoxRow>
          <CheckBoxRow>
            <div>
              <input type="checkbox" id="recent" />
              <Label htmlFor="recent">Internship</Label>
            </div>
            <div>
              <input type="checkbox" id="recent" />
              <Label htmlFor="recent">Volunteer</Label>
            </div>
          </CheckBoxRow>
        </CheckBoxDiv>
      </ExperienceDiv>
      <hr />
      <PositionDiv>
        <H2>Position</H2>
        <CheckBoxDiv>
          <CheckBoxRow>
            <div>
              <input type="checkbox" id="recent" checked />
              <Label htmlFor="recent">On-Site</Label>
            </div>
            <div>
              <input type="checkbox" id="recent" />
              <Label htmlFor="recent">Hybrid</Label>
            </div>
          </CheckBoxRow>
          <CheckBoxRow>
            <div>
              <input type="checkbox" id="recent" />
              <Label htmlFor="recent">Remote</Label>
            </div>
          </CheckBoxRow>
        </CheckBoxDiv>
      </PositionDiv>
    </FilterPage>
  );
};

const PositionDiv = styled.div`
  padding-top: 34px;
`;

const RangeInputDiv = styled.div`
  padding-bottom: 20px;
`;
const DataList = styled.datalist`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  writing-mode: horizontal-tb;
  justify-content: space-between;
  width: 200px;
`;
const RangeInput = styled.input`
  width: 200px;
`;
const SalaryRangeDiv = styled.div`
  padding-top: 34px;
  padding-bottom: 34px;
`;
const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  color: #181823;
`;
const SortByDiv = styled.div`
  padding-top: 34px;
  margin-bottom: 34px;
`;
const ExperienceDiv = styled.div`
  margin-top: 34px;
  padding-bottom: 34px;
`;
const CheckBoxRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 20%;
  padding-bottom: 14px;
`;
const CheckBoxDiv = styled.div`
  padding-top: 24px;
`;
const FilterPage = styled.div`
  background-color: white;
  margin-top: 32px;
  margin-left: 32px;
  margin-bottom: 32px;
  padding: 32px;
  border-radius: 10px;
`;
const FilterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 34px;
`;
const H2 = styled.h2`
  margin: 0px;
`;
const ResetBtn = styled.button`
  border: 0px;
  color: #537fe7;
  border-bottom: 1px solid #537fe7;
  background-color: white;
  font-size: 16px;
`;

export default Filter;
