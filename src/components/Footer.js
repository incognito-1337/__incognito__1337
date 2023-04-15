import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/Untitled.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import dc from "../assets/img/discord-mark-white .svg"
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import git from "../assets/img/github-mark-white.svg"

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={1} sm={6}>
            <h1 className="logg">__incognito__1337</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://discord.com/users/1025036230741721149" target="_blank" rel="noopener noreferrer"><img src={dc} alt="" /></a>
            <a href="https://github.com/incognito-1337/" target="_blank" rel="noopener noreferrer"><img src={git} alt="" /></a>


<a href="https://www.instagram.com/__incognito__1337/" target="_blank" rel="noopener noreferrer" ><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
