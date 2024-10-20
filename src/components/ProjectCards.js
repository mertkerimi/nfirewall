import React from "react";
import { Col } from "react-bootstrap";
import { ChevronRight } from "react-bootstrap-icons";

const ProjectCards = ({ title, description, imgUrl, link }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div>
            <a href={link}>
              <button>Visit <ChevronRight size={18} /> </button>
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCards;
