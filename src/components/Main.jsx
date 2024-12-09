import React, { useState } from "react";
import styled from "styled-components";

const MainContainer = styled.main`
  padding: 2rem;
  text-align: center;
  background-color: #f5f5f5;
`;

const HeroSection = styled.section`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  
`;

const SubHeading = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: #fff;
  background-color: #2e6d2d;
  border: none;
  border-radius: 20px;
  height: 35px;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: #244723;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const StatsSection = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1rem;
`;

const StatCardContainer = styled.div`
  flex: 1 1 200px;
`;

const StatCard = styled.div`
  background-color: #ffffff;
  padding: 0.5rem;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease;
  height: 150px;
  font-weight: bold;
  position: relative;
  overflow: hidden;

  

  &:hover {
    transform: scale(1.05);
    transform-origin: center;
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

  }
`;

const StatHeading = styled.h2`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const StatSubHeading = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #333;
  font-size: 10px;

`;

const Main = () => {
  const [clientCount, setClientCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);
  const [serviceYears, setServiceYears] = useState(0);

  const animateCount = (setter, finalValue) => {
    let start = 0;
    const end = finalValue;
    const duration = 1000;
    const stepTime = Math.abs(Math.floor(duration / (end - start)));

    const step = () => {
      start += 1;
      setter(start);
      if (start < end) {
        setTimeout(step, stepTime);
      }
    };

    step();
  };

  return (
    <MainContainer id="home">
      <HeroSection>
        <Heading>
          {" "}
          Technology is anything that wasn’t around when you were born. - Elan
          lee{" "}
        </Heading>
        <SubHeading>
          Expert tech to elevate your manufacturing. Let's take your business
          further.
        </SubHeading>
        <ButtonGroup>
          <Button>Get Started</Button>
          <Button>Try Demo Service</Button>
        </ButtonGroup>
      </HeroSection>
      <StatsSection>
        <StatCardContainer>
          <StatCard onMouseEnter={() => animateCount(setClientCount, 500)}>
            <StatHeading>{clientCount}+</StatHeading>
            <StatSubHeading>Our Customers</StatSubHeading>
          </StatCard>
        </StatCardContainer>
        <StatCardContainer>
          <StatCard onMouseEnter={() => animateCount(setProjectCount, 250)}>
            <StatHeading>{projectCount}+</StatHeading>
            <StatSubHeading>Customer Reviews</StatSubHeading>
          </StatCard>
        </StatCardContainer>
        <StatCardContainer>
          <StatCard onMouseEnter={() => animateCount(setServiceYears, 6)}>
            <StatHeading>{serviceYears}+</StatHeading>
            <StatSubHeading>Years of Dedicated Service</StatSubHeading>
          </StatCard>
        </StatCardContainer>
        <StatCardContainer>
          <StatCard>
            <StatHeading>call us Today for Expert Service 💻</StatHeading>
          </StatCard>
        </StatCardContainer>
      </StatsSection>
    </MainContainer>
  );
};

export default Main;
