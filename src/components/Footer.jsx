import React, { useState } from "react";
import styled from "styled-components";
import { FaLinkedin, FaTwitter, FaFacebookF, FaEnvelope } from "react-icons/fa";

const FooterContainer = styled.footer`
  background-color: #2b3a48;
  padding: 2rem;
  text-align: center;
  color: #fff;
`;

const FooterTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 2rem;
`;

const FooterColumn = styled.div`
  flex: 1 1 200px;
  max-width: 200px;
  margin-bottom: 1rem;
`;

const FooterHeading = styled.h4`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const FooterLink = styled.a`
  display: block;
  color: #b0bec5;
  margin-bottom: 0.5rem;
  text-decoration: none;
  font-size: 1rem;
  display: flex;
  align-items: center;

  &:hover {
    color: #fff;
  }

  svg {
    margin-right: 0.5rem; /* Adds space between icon and text */
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #4a4a4a;
  padding-top: 1rem;
  margin-top: 1rem;
`;

const FeedbackForm = styled.form`
  margin-top: 2rem;
  background-color: #3a4d63;
  padding: 2rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputField = styled.input`
  width: 70%;
  padding: 0.75rem;
  margin: 0.5rem 0;
  border: none;
  border-radius: 0.5rem;
  background-color: #fff;
  color: #333;
  font-size: 1rem;

  &:focus {
    outline: none;
    border: 1px solid #00bcd4;
  }
`;

const TextAreaField = styled.textarea`
  width: 70%;
  padding: 0.75rem;
  margin: 0.5rem 0;
  border: none;
  border-radius: 0.5rem;
  background-color: #fff;
  color: #333;
  font-size: 1rem;
  height: 70px;

  &:focus {
    outline: none;
    border: 1px solid #00bcd4;
  }
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background-color: #2e6d2d;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;

  &:hover {
    background-color: #2e6d2d;
  }
`;

const Footer = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    if (form.checkValidity()) {
      setFormSubmitted(true);
      alert("Success! Your feedback has been submitted.");
      form.reset();
    }
  };

  return (
    <FooterContainer id="footer">
      <FooterTop>
        <FooterColumn>
          <FooterHeading>Company</FooterHeading>
          <FooterLink href="#">About Us</FooterLink>
          <FooterLink href="#">Customers</FooterLink>
          <FooterLink href="#">Newsroom</FooterLink>
          <FooterLink href="#">Events</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterHeading>Get In Touch</FooterHeading>
          <FooterLink href="mailto:hello@prodmast.com">
            <FaEnvelope /> hello@fixordi.com
          </FooterLink>
          <FooterLink href="#">
            <FaLinkedin /> LinkedIn
          </FooterLink>
          <FooterLink href="#">
            <FaTwitter /> Twitter
          </FooterLink>
          <FooterLink href="#">
            <FaFacebookF /> Facebook
          </FooterLink>
        </FooterColumn>
      </FooterTop>

      {/* Feedback Form */}
      <FeedbackForm onSubmit={handleSubmit}>
        <h4>We value your feedback!</h4>
        <InputField type="text" placeholder="Your Name" required />
        <InputField type="email" placeholder="Your Email" required />
        <TextAreaField placeholder="Your Feedback" required />
        <SubmitButton type="submit">Submit Feedback</SubmitButton>
      </FeedbackForm>

      <FooterBottom>
        <p>© 2024 FIX ordi. All rights reserved</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
