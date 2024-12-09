import React from "react";
import styled from "styled-components";

const ServicesContainer = styled.section`
  background-color: #1d2b36;
  padding: 3rem 2rem;
  text-align: center;
  border-radius: 0.5rem;
  color: #fff;
`;

const ServicesHeading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ServicesSubHeading = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
`;

const ServiceCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const ServiceCard = styled.div`
  background-color: #2b3a48;
  padding: 1.5rem;
  border-radius: 0.5rem;
  text-align: left;
  flex: 1 1 300px;
  max-width: 300px;
  color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  & h3 {
    margin-top: 0;
    font-size: 1.5rem;
  }

  & p {
    font-size: 1rem;
    color: #b0bec5;
  }

  & svg {
    margin-bottom: 1rem;
    font-size: 2rem;
    color: #00bcd4;
  }

  /* Styling the image */
  & img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
  }
`;

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesHeading>
        Efficient and Integrated Manufacturing Services
      </ServicesHeading>
      <ServicesSubHeading>
        Simplify operations with our efficient, quality-focused services.
      </ServicesSubHeading>
      <ServiceCards>
        <ServiceCard>
          <img
            src="https://media.istockphoto.com/id/1254347556/photo/business-people-joining-gears.jpg?s=612x612&w=0&k=20&c=ecAQGD0w20yZ1rEyUt_bYaJ_OmgLM0KjAhRo1OHKcIU="
            alt="Production and Assembly"
          />
          <h3>Production and Assembly</h3>
          <p>
            Details on production processes, assembly, capacity, and product
            types.
          </p>
        </ServiceCard>
        <ServiceCard>
          <img
            src="https://media.istockphoto.com/id/1449084209/photo/concentrated-black-female-engineer-writing-code-developing-software-for-modern-drone-control.jpg?s=612x612&w=0&k=20&c=_PTVwMC49_1OEkUNxpkM8-PQCWgA34-BTdAoObvsH_8="
            alt="Custom Manufacturing"
          />
          <h3>Custom Manufacturing</h3>
          <p>Custom product creation with design and customization options.</p>
        </ServiceCard>
        <ServiceCard>
          <img
            src="https://media.istockphoto.com/id/1357020474/photo/quality-management-with-qa-qc-and-improvement-standardisation-and-certification-concept.jpg?s=612x612&w=0&k=20&c=TQzsNI-voLUKsgpX9KBsZWvEyQx8R1TlTISMvabKcAI="
            alt="Quality Control"
          />
          <h3>Quality Control</h3>
          <p>Procedures and systems in place to ensure high product quality.</p>
        </ServiceCard>
        <ServiceCard>
          <img
            src="https://media.istockphoto.com/id/1081869356/photo/taking-on-the-late-shift-with-true-dedication.jpg?s=612x612&w=0&k=20&c=6cd0XCc7SXbwh3gDTDgg7yjljBPbW8gAmUUmDCQqs9E="
            alt="Technology and Innovation"
          />
          <h3>Technology and Innovation</h3>
          <p>
            Details on the latest manufacturing technologies and ongoing
            innovations.
          </p>
        </ServiceCard>

        <ServiceCard>
          <img
            src="https://media.istockphoto.com/id/1449490038/photo/online-shopping-and-e-commerce-technology-concept-shopper-using-computer-laptop-to-input.jpg?s=612x612&w=0&k=20&c=t_0z_Vm6_5vmzuwZl6HydbwsYesuHcbF-uRU23KtOvk="
            alt="Consulting Market Research"
          />
          <h3>Consulting Market Research</h3>
          <p>
            Services to help companies understand market needs and provide
            strategic advice.
          </p>
        </ServiceCard>
      </ServiceCards>
    </ServicesContainer>
  );
};

export default Services;
