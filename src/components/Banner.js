import { useState, useEffect } from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg1 from "../assets/img/cyber-card.png";
import TrackVisibility from "react-on-screen";
import CV from "../assets/CV/CV.pdf";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Siber Güvenlik","IT Danışmanlığı"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
    // eslint-disable-next-line
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updateText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            {/* <a href={CV} download="Mert Kerimi CV">
              <button className="tagline">Download my CV</button>
            </a> */}
            <h1>
              {`Hizmetlerimiz`}
              <br />
              <span
                className="txt-rotate"
                data-rotate='[ "Web Developer", "Web Designer", "Mobile Developer" ]'
              >
                <span className="wrap">{text}</span>
              </span>
            </h1>
            <Navbar.Brand href="#connect">
              <button onClick={() => console.log("connect")}>
                Bize Ulaşın <ArrowRightCircle size={25} />
              </button>
            </Navbar.Brand>
          </Col>
          <Col xs={10} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg1} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;