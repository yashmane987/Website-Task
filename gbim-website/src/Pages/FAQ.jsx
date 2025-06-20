import React, { useState } from "react";
import {
  Container,
  Button,
  Accordion,
  Nav,
  Row,
  Col,
} from "react-bootstrap";


const FAQ = () => {
  const [activeTab, setActiveTab] = useState("Marketing Creatives");

  const faqs = [
    {
      question: "What is creative design thinking?",
      answer:
        "Creative design thinking is an approach that combines analytical thinking and creative problem-solving techniques to generate innovative solutions. It involves applying empathy, experimentation, and collaboration to understand the needs of users, redefine problems, and explore new possibilities.",
    },
    {
      question: "How can creative design thinking benefit my design projects?",
      answer:
        "It helps generate user-centric solutions, promotes innovative ideas, and improves team collaboration.",
    },
    {
      question: "How can creative design thinking benefit my design projects?",
      answer:
        "It improves communication and brainstorming in design teams to reach faster and better results.",
    },
    {
      question: "How can creative design thinking benefit my design projects?",
      answer:
        "It supports the iterative process of prototyping and testing ideas based on real user feedback.",
    },
  ];

  return (
    <Container className="faq-wrapper text-center py-5">
      <h5 className="faq-subtitle">FREQUENTLY ASKED QUESTIONS</h5>
      <h2 className="faq-title">
        Got Questions? <span>We’ve Got Answers!</span>
      </h2>

      <Nav className="justify-content-center my-4" variant="pills">
        {["Marketing Creatives", "Branding", "UI/UX Designing"].map((tab) => (
          <Nav.Item key={tab}>
            <Nav.Link
              eventKey={tab}
              active={activeTab === tab}
              onClick={() => setActiveTab(tab)}
              className="faq-tab-btn"
            >
              {tab}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>

      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <Accordion defaultActiveKey="0" alwaysOpen>
            {faqs.map((faq, index) => (
              <Accordion.Item eventKey={index.toString()} key={index}>
                <Accordion.Header>{faq.question}</Accordion.Header>
                <Accordion.Body>{faq.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default FAQ;
