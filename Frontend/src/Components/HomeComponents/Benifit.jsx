import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HealthInsure = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const themeColor = 'rgb(57, 115, 210)'; // 🎨 Your exact color

  const features = [
    'Wide range of Health Insurance plans for individuals, families, senior citizens, and corporate employees.',
    'Cashless hospitalisation at 14,000+ network hospitals across India.',
    'Coverage for pre-existing diseases after a waiting period.',
    'Maternity benefits covering hospitalisation expenses during childbirth.',
    'No medical check-up required for individuals up to 50 years.',
    '24/7 customer support via phone, email, or chat.'
  ];

  const relatedProducts = [
    'Health Insurance Plans',
    'Health Checkup Packages',
    'What Is Health Insurance',
    'Types Of Health Insurance',
    'Maternity Health Insurance',
    'Health Insurance For Pre-existing Conditions',
    'Health Insurance Premium Calculator',
    'Compare Health Insurance Plans',
    '1 Crore Health Insurance',
    'Benefits Of Health Insurance',
    'Affordable Health Insurance Plans',
    'Critical Illness Insurance',
    'Diabetes Health Insurance',
    'Cashless Health Insurance',
    'Comprehensive Insurance Policy',
    'Day Care Treatment and Procedures',
    'Top up Health Insurance',
    'OPD Insurance',
    'Health Insurance For Newborn',
    'Arogya Sanjeevani Policy'
  ];

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Hero Section */}
      <div className="text-white text-center py-5" style={{ backgroundColor: themeColor }} data-aos="fade-down">
        <h1 className="mb-3 fw-bold">Protect Your Health. Secure Your Future.</h1>
        <p className="mb-4">Comprehensive Health Insurance Plans from Star Health Insurance.</p>
        <Button variant="light" size="lg" className="fw-semibold" style={{ color: themeColor }}>
          Get a Plan
        </Button>
      </div>

      {/* Introduction Section */}
      <Container className="my-5" data-aos="fade-up">
        <h2 className="mb-3 text-center fw-bold" style={{ color: themeColor }}>Why Buy Health Insurance?</h2>
        <p className="text-center">
          Health insurance is an essential requirement in today's world. It provides financial security to individuals and families in case of medical emergencies.
          With the increasing cost of healthcare in India, having a Health Insurance plan is a necessity.
        </p>
        <p className="text-center">
          Insure Tech Insurance stands out for its unique features and benefits. Established in 2006 and headquartered in Chennai, Tamil Nadu,
          it offers a wide range of Health Insurance plans across India with more than 14,000 network hospitals.
        </p>
      </Container>

      {/* Features Section */}
      <div style={{ backgroundColor: '#f8faff' }} className="py-5">
        <Container>
          <h2 className="mb-4 text-center fw-bold" style={{ color: themeColor }} data-aos="fade-up">Key Benefits</h2>
          <Row>
            {features.map((feature, idx) => (
              <Col md={6} lg={4} className="mb-4" key={idx} data-aos="zoom-in" data-aos-delay={idx * 100}>
                <Card
                  className="h-100 shadow-sm border-0"
                  style={{
                    borderTop: `4px solid ${themeColor}`,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-6px)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  <Card.Body>
                    <Card.Text>{feature}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* About Section */}
      <Container className="my-5" data-aos="fade-up">
        <h2 className="mb-3 text-center fw-bold" style={{ color: themeColor }}>About Insure Tech Insurance</h2>
        <p>
          Insure tech Insurance offers plans for individuals, families, senior citizens, and corporate employees.
          Special policies are available for individuals with diabetes, heart disease, cancer, and children with special needs.
        </p>
        <p>
          With features like cashless hospitalisation, coverage for pre-existing diseases, maternity benefits, and no medical check-up for individuals up to 50 years,
          Insure Tech Insurance ensures financial security in case of medical emergencies. It also has a high claim settlement ratio and 24/7 customer support.
        </p>
      </Container>

      {/* Related Products Section */}
      <div style={{ backgroundColor: '#f8faff' }} className="py-5">
        <Container>
          <h2 className="mb-4 text-center fw-bold" style={{ color: themeColor }} data-aos="fade-up">Related Health Insurance Products</h2>
          <Row>
            {relatedProducts.map((product, idx) => (
              <Col md={6} lg={4} className="mb-3" key={idx} data-aos="fade-up" data-aos-delay={idx * 50}>
                <Card
                  className="text-center shadow-sm border-0"
                  style={{
                    borderTop: `3px solid ${themeColor}`,
                    background: '#fff',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#eaf2ff')}
                  onMouseLeave={e => (e.currentTarget.style.background = '#fff')}
                >
                  <Card.Body className="fw-semibold text-dark">{product}</Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

     \
     
    </div>
  );
};

export default HealthInsure;
