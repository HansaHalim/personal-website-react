import React, {useState} from "react";
import phone from '../../assets/icons/phone.png';
import email from '../../assets/icons/email.png';

import { 
    Container, 
    ContentWrapper, 
    Content,
    HeaderContainer, 
    Header, 
    Label,
    FormGroup,
    NameEmail,
    MessageFormGroup,
    MessageInput,
    ContactItemContainer,
    ContactItem
} from "./styles";

const ContactMe = () => {
    const [status, setStatus] = useState("Not Sent");

  function submitForm(ev:any) {
      ev.preventDefault();
      const form = ev.target;
      const data = new FormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            form.reset();
            setStatus("SUCCESS")
        } else {
            setStatus("ERROR")
        }
      };
      xhr.send(data);
  }

  return (
    <Container>
        <HeaderContainer>
            <Header>
                Let's Get In Touch!
            </Header>
            <p>Feel free to send me a message and I will get back to you within 24 hours.</p>
        </HeaderContainer>
        <Content>
        <ContentWrapper>
        <form
            onSubmit={submitForm}
            action="https://formspree.io/xyynlnrr"
            method="POST"
        >
            <NameEmail>
                <FormGroup>
                    <Label>Name:</Label>
                    <input type="text" name="Name" />
                </FormGroup>
                <FormGroup>
                    <Label>Email:</Label>
                    <input type="email" name="Email" />
                </FormGroup>
            </NameEmail>
            <MessageFormGroup>
                <Label>Message:</Label>
                <MessageInput name="Message" rows={5}/>
            </MessageFormGroup>
            {status === "SUCCESS" ? <p>Thanks!</p> : <button>Send</button>}
            {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>
        </ContentWrapper>
        <ContactItemContainer>
            <ContactItem>
                <img src={phone} alt="phone"/>
                <p>+1 (226) 868-5607</p>
            </ContactItem>
            <ContactItem>
                <img src={email} alt="email"/>
                <a href="mailto:hhalim@uwaterloo.ca">
                    <p>hansa@halim.ca</p></a>
            </ContactItem>
        </ContactItemContainer>
        </Content>
    </Container>
  );
};

export default ContactMe;
