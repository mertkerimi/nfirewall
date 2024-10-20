import { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import contactImg from "../assets/img/contact-img.svg";
import TrackVisibility from "react-on-screen";
import "animate.css";
const Contact1 = () => {
  const formRef = useRef();
  const [status, setStatus] = useState({});
  const [buttonText, setButtonText] = useState("Gönder");

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Gönderiliyor...");
    emailjs
      .sendForm(
        "service_izgl1lg",
        "template_78ywhhe",
        formRef.current,
        "XXgWEUnqUJkM3K1lt"
      )
      .then(
        (result) => {
          setButtonText("Gönder");
          console.log(result.text);
          setStatus({
            succes: true,
            message: "Message sent successfully",
          });
        },
        (error) => {
          setButtonText("Gönder");
          console.log(error.text);
          setStatus({
            succes: false,
            message: "Something went wrong, please try again later.",
          });
        }
      );
  };
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <div>
              {/* <h2>Bize Ulaşın</h2> */}
              <h3>Email: info@nfirewall.com</h3>
              {/* <form ref={formRef} onSubmit={handleSubmit}>
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="text"
                      placeholder="İsim"
                      name="firstName"
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="text"
                      placeholder="Soyisim"
                      name="lastName"
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="tel" placeholder="Telefon Numarası" name="phone" />
                  </Col>
                  <Col size={12} className="px-1">
                    <textarea rows="6" placeholder="Mesaj" name="message" />
                    <button type="submit">
                      <span>{buttonText}</span>
                    </button>
                    {status.message && (
                      <Col>
                        <p
                          className={
                            status.success === false ? "danger" : "success"
                          }
                        >
                          {status.message}
                        </p>
                      </Col>
                    )}
                  </Col>
                </Row>
              </form> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact1;
