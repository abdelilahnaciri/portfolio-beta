import React, { useRef, useState } from "react";
import styled from "styled-components";
import Map from "./Map";
import emailjs from "@emailjs/browser";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 20px;
  background-color: #da4ea2;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border: none;
  border-radius: 5px;
`;

const Right = styled.div`
  flex: 1;
`;

const Contact = () => {
  const formRef = useRef();
  const [isSuccess, setIsSuccess] = useState(false);

  // ** Handlers
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_bxf4xky", "template_z2qwtac", formRef.current, {
        publicKey: "1N2QH1Bvp00I-wFnh",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsSuccess(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsSuccess(false);
        }
      );
  };

  return (
    <Section>
      <Container>
        <Left>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Title>Contact Us</Title>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea
              placeholder="Write your message"
              name="message"
              rows={10}
            />
            <Button type="submit">Send</Button>
            {isSuccess &&
              "Your message has been sent. We'll get back to you soon :)"}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
