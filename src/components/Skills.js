import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import javascript from "../assets/img/javascript.svg";
import swift from "../assets/img/swift.svg";
import reactNative from "../assets/img/react-native.svg";
import html from "../assets/img/html.svg";
import css from "../assets/img/css.svg";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>About Me</h2>
              <p>
                I'm a Frontend Web Developer and Mobile Developer building the
                Front-end of Websites and Web Applications that leads to the
                success of the overall product. Check out some of my work in the
                Projects section.
              </p>
              <p>
                I'm open to Job opportunities where I can contribute, learn and
                grow. If you have a good opportunity that matches my skills and
                experience then don't hesitate to contact me.
              </p>
              <h2>Skills</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={reactNative} alt="reactNative" />
                  <h5>React/React Native</h5>
                </div>
                <div className="item">
                  <img src={swift} alt="swift" />
                  <h5>Swift</h5>
                </div>
                <div className="item">
                  <img src={javascript} alt="javascript" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={html} alt="html" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={css} alt="css" />
                  <h5>CSS</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
