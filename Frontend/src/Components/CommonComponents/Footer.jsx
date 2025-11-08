import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-4">
      <div className="container">

        {/* Accordion for Mobile */}
        <div className="d-md-none">
          <div className="accordion" id="footerAccordion">

            {/* Insurance */}
            <div className="accordion-item bg-dark border-0">
              <h2 className="accordion-header" id="headingInsurance">
                <button
                  className="accordion-button bg-dark text-light collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseInsurance"
                  aria-expanded="false"
                  aria-controls="collapseInsurance"
                >
                  Insurance
                </button>
              </h2>
              <div
                id="collapseInsurance"
                className="accordion-collapse collapse"
                aria-labelledby="headingInsurance"
                data-bs-parent="#footerAccordion"
              >
                <div className="accordion-body">
                  <ul className="list-unstyled">
                    <li>Group Health Insurance</li>
                    <li>Family Health Insurance</li>
                    <li>Senior Citizen Health Insurance</li>
                    <li>Maternity Insurance</li>
                    <li>Travel Insurance</li>
                    <li>Critical Illness Insurance</li>
                    <li>OPD Insurance</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div className="accordion-item bg-dark border-0">
              <h2 className="accordion-header" id="headingResources">
                <button
                  className="accordion-button bg-dark text-light collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseResources"
                  aria-expanded="false"
                  aria-controls="collapseResources"
                >
                  Resources
                </button>
              </h2>
              <div
                id="collapseResources"
                className="accordion-collapse collapse"
                aria-labelledby="headingResources"
                data-bs-parent="#footerAccordion"
              >
                <div className="accordion-body">
                  <ul className="list-unstyled">
                    <li>Blog</li>
                    <li>Agents</li>
                    <li>Hospital Portal</li>
                    <li>Employee Login</li>
                    <li>Glossary</li>
                    <li>Downloads</li>
                    <li>Preventive Health Check-up</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="accordion-item bg-dark border-0">
              <h2 className="accordion-header" id="headingServices">
                <button
                  className="accordion-button bg-dark text-light collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseServices"
                  aria-expanded="false"
                  aria-controls="collapseServices"
                >
                  Services
                </button>
              </h2>
              <div
                id="collapseServices"
                className="accordion-collapse collapse"
                aria-labelledby="headingServices"
                data-bs-parent="#footerAccordion"
              >
                <div className="accordion-body">
                  <ul className="list-unstyled">
                    <li>Corporate Health Claim</li>
                    <li>DND Registration</li>
                    <li>Portability</li>
                    <li>Service Parameters</li>
                    <li>Renewals</li>
                    <li>Grievance</li>
                    <li>Submit CKYC</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* About Us */}
            <div className="accordion-item bg-dark border-0">
              <h2 className="accordion-header" id="headingAbout">
                <button
                  className="accordion-button bg-dark text-light collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseAbout"
                  aria-expanded="false"
                  aria-controls="collapseAbout"
                >
                  About Us
                </button>
              </h2>
              <div
                id="collapseAbout"
                className="accordion-collapse collapse"
                aria-labelledby="headingAbout"
                data-bs-parent="#footerAccordion"
              >
                <div className="accordion-body">
                  <ul className="list-unstyled">
                    <li>Board of Directors</li>
                    <li>Leadership Team</li>
                    <li>Careers</li>
                    <li>Contact Us</li>
                    <li>Media Center</li>
                    <li>Quality Policy</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Desktop Grid */}
        <div className="row d-none d-md-flex">
          <div className="col-md-3">
            <h6 className="text-uppercase fw-bold">Insurance</h6>
            <ul className="list-unstyled">
              <li>Group Health Insurance</li>
              <li>Family Health Insurance</li>
              <li>Senior Citizen Health Insurance</li>
              <li>Maternity Insurance</li>
              <li>Travel Insurance</li>
              <li>Critical Illness Insurance</li>
              <li>OPD Insurance</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 className="text-uppercase fw-bold">Resources</h6>
            <ul className="list-unstyled">
              <li>Blog</li>
              <li>Agents</li>
              <li>Hospital Portal</li>
              <li>Employee Login</li>
              <li>Glossary</li>
              <li>Downloads</li>
              <li>Preventive Health Check-up</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 className="text-uppercase fw-bold">Services</h6>
            <ul className="list-unstyled">
              <li>Corporate Health Claim</li>
              <li>DND Registration</li>
              <li>Portability</li>
              <li>Service Parameters</li>
              <li>Renewals</li>
              <li>Grievance</li>
              <li>Submit CKYC</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 className="text-uppercase fw-bold">About Us</h6>
            <ul className="list-unstyled">
              <li>Board of Directors</li>
              <li>Leadership Team</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>Media Center</li>
              <li>Quality Policy</li>
            </ul>
          </div>
        </div>

        <hr className="bg-light" />

        {/* Company Info */}
        <div className="row mb-3">
          <div className="col-md-6">
            <p>
              <strong>InsureTech Insurance Solutions Pvt. Ltd.</strong>
              <br />
              Registered Office: 123 Tech Avenue, Lower Parel, Mumbai - 400013
              <br />
              IRDAI Registration No: 129 | CIN : L66010MH2020PLC012345
              <br />
              Ph: +91-22-4000-1234 | Toll Free: 1800-200-2025
              <br />
              Email: support@insuretech.com | Website: www.insuretech.com
            </p>
          </div>
          <div className="col-md-6">
            <p>
              <strong>IRDAI Address:</strong>
              <br />
              Insurance Regulatory and Development Authority of India
              <br />
              Sy No. 115/1, Financial District, Nanakramguda, Gachibowli, Hyderabad – 500032
              <br />
              Website:{" "}
              <a href="https://irdai.gov.in" className="text-light">
                irdai.gov.in
              </a>
            </p>
          </div>
        </div>

        <hr className="bg-light" />

        {/* Social Media */}
        <div className="text-center mb-3">
          <a href="#" className="text-light me-3"><FaFacebookF /></a>
          <a href="#" className="text-light me-3"><FaTwitter /></a>
          <a href="#" className="text-light me-3"><FaInstagram /></a>
          <a href="#" className="text-light me-3"><FaLinkedin /></a>
        </div>

        {/* Disclaimer */}
        <div className="text-center small mb-3">
          <p>
            The insurance products are offered and underwritten by InsureTech Insurance Solutions Pvt. Ltd.
            Tax benefits under this plan are as per prevailing Income Tax laws. The trade logo belongs to
            and is used by InsureTech Insurance Solutions Pvt. Ltd. The company does not guarantee the
            accuracy of external linked websites.
          </p>
          <p>© {new Date().getFullYear()} InsureTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
