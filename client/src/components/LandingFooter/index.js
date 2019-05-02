import React from "react";
import {Col, Row} from "../Grid/Grid";
import "./style.css";

const LandingFooter = () => (
<Row className="justify-content-center footer sticky-footer">
  
  <nav className="navbar footer sticky-footer">
    <Col size="12 col-sm-12" className="pt-3">

      <p className="text-center font-italic footer-text">
        Created by Liam, Eric, Calvin &amp; Thor.
        <br />
        Check out our code on <a href="https://github.com/ltcondon/Project-3"><i className="fab fa-github"></i> Github</a>
      </p>

    </Col>
  </nav>
</Row>
);

export default LandingFooter;