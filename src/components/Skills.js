import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import security from "../assets/img/security.png";
import network from "../assets/img/network.png";
import cloud from "../assets/img/cloud.png";
import wrench from "../assets/img/wrench.png";
import management from "../assets/img/management.png";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1, // Her seferinde 1 öğe gösterilecek
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1, // Her seferinde 1 öğe gösterilecek
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1, // Her seferinde 1 öğe gösterilecek
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1, // Her seferinde 1 öğe gösterilecek
    },
  };

  const skillsData = [
    {
      img: cloud,
      title: "Bulut Hizmetleri",
      description: "Bulut hizmetleri, veri depolama, hesaplama ve ağ hizmetlerini bir araya getirerek kullanıcılara eşsiz bir esneklik, kolay erişilebilirlik ve ölçeklenebilirlik sunar. Bu sayede, kullanıcılar ihtiyaçlarına göre kaynaklarını dinamik bir şekilde yönetebilir ve iş süreçlerini daha verimli hale getirebilirler."
    },
    {
      img: network,
      title: "Ağ Altyapı İşlemleri",
      description: "Verimli bir ağ altyapısı, şirketlerin bilgi işlem sistemlerinde olağanüstü performans ve güvenilirlik sunarak, iş süreçlerinin aksamadan sürdürülmesine olanak tanır. Bu altyapı, sistemlerin sorunsuz çalışabilmesi için kritik bir öneme sahiptir ve işletmelerin hedeflerine ulaşmalarında temel bir rol oynar."
    },
    {
      img: security,
      title: "Güvenlik",
      description: "Güvenlik, bilgi koruma, siber saldırıların etkili bir şekilde önlenmesi ve güvenlik açıklarının titizlikle kapatılması gibi temel fonksiyonlara odaklanarak, dijital varlıkların güvenliğini sağlamak için kritik bir rol oynar. Bu kapsamda, sistemlerin bütünlüğü ve kullanıcıların gizliliği korunarak, güvenli bir dijital ortam oluşturulması hedeflenir."
    },
    {
      img: wrench,
      title: "Bakım Destek",
      description: "Bakım destek hizmetleri, BT altyapılarının güvenliğini, güncelliğini ve performansını sağlamanın yanı sıra, iş sürekliliğini ve verimliliği artırarak işletmelere önemli katkılar sunar. Bununla birlikte, veri güvenliği ve gizliliğinin korunmasına yönelik önlemler alarak, kullanıcıların dijital varlıklarının güvenliğini pekiştirir."
    },
    {
      img: management,
      title: "Yönetilen Hizmetler",
      description: "Yönetilen hizmetler, çeşitli iş yüklerini optimize ederek BT süreçlerinden en yüksek verimliliği elde etmeye olanak tanır ve kaynakların etkin bir şekilde kullanılmasını sağlar. Bu sayede, işletmelerin operasyonel verimliliği artarken, aynı zamanda maliyetlerin minimize edilmesi hedeflenir."
    },
  ];

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Hizmetlerimiz</h2>
              <Carousel
                responsive={responsive}
                className="skill-slider"
                infinite={true}
                arrows={false} // Disable arrows
                showDots={true} // Enable dots pagination
                autoPlay={true}
                dotListClass="custom-dot-list-style"
              >
                {skillsData.map((skill, index) => (
                  <div className="item" key={index}>
                    <img src={skill.img} alt={skill.title} />
                    <h5>{skill.title}</h5>
                    <p>{skill.description}</p> {/* Açıklayıcı metin */}
                  </div>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;