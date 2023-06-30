import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Markets from "./Pages/Markets/Markets";
import Vote from "./Pages/Vote/Vote";

function App() {
  return (
    <Container>
      <Row>
        <Col className="mx-auto" lg={11}>
          {/* Navbar */}
          <Navbar />       
          <Routes >
            <Route exact path="/" element={<Dashboard/>} />
            <Route path="/markets" element={<Markets/>} />
            <Route path="/vote" element={<Vote/>} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
