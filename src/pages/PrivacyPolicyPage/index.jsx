import React from "react";
import { Container } from "react-bootstrap";
import PrivacyHeader from "../../components/PrivacyHeader";

import "./style.css";
const PrivacyPolicyPage = () => {
  return (
    <div className="privacy">
            <PrivacyHeader />

      <Container>
        <main className="d-flex flex-column gap-3 py-3 gap-md-5 py-sm-5">
          <p className="text-md">
            Fusion Flare Technologies is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you visit our website, use our
            services, or interact with us in other ways.
          </p>
          <div>
            <h4 className="text-lg">Information We Collect</h4>
            <p className="mb-0">
              <strong> Personal Data:</strong> We collect information that you
              voluntarily provide to us, including but not limited to your name,
              email address, phone number, mailing address, and payment details.
            </p>
            <p className="mb-0">
              <strong>Usage Data:</strong> We automatically collect certain
              information about your use of our services and interactions with
              our content, such as IP address, browser type, operating system,
              referring URLs, and information on your activities, such as pages
              viewed and links clicked.
            </p>
            <p>
              <strong>Cookies and Similar Technologies:</strong> We use cookies,
              web beacons, and similar tracking technologies to track activity
              on our services and store certain information. You can control the
              use of cookies through your browser settings.
            </p>
          </div>
          <div>
            <h4>How We Use Your Information </h4>
            <div className="d-flex flex-column gap-4">
              <div>
                <p className="fw-bold">To Provide and Manage Our Services</p>
                <p>
                  We use your information to deliver, operate, and manage our
                  services, including processing transactions, managing your
                  account, providing customer support, and sending you
                  administrative messages.
                </p>
              </div>
              <div>
                <p className="fw-bold">To Improve Our Services</p>
                <p>
                  We analyze data on how our services are used to improve
                  functionality, develop new products, enhance user experience,
                  and optimize content and marketing strategies.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h4>How We Share Your Information </h4>
            <div className="d-flex flex-column gap-4">
              <div>
                <p className="fw-bold">With Service Providers</p>
                <p>
                  We may share your information with trusted third-party service
                  providers who perform services on our behalf, such as payment
                  processing, data analysis, email delivery, hosting services,
                  and customer support.
                </p>
              </div>
              <div>
                <p className="fw-bold">In Business Transfers</p>
                <p>
                  If we are involved in a merger, acquisition, or sale of all or
                  a portion of our assets, your information may be transferred
                  as part of that transaction.
                </p>
              </div>

              <div>
                <p className="fw-bold">For Legal Reasons</p>
                <p>
                  We may disclose your information if required to do so by law
                  or in response to valid requests by public authorities, such
                  as a court or government agency.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h4>Data Security </h4>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal data against unauthorized access, loss,
              destruction, or alteration. However, no method of transmission
              over the internet or method of electronic storage is 100% secure,
              so we cannot guarantee absolute security.
            </p>
          </div>
          <div>
            <h4>Your Rights </h4>
            <div className="d-flex flex-column gap-4">
              <div>
                <p className="fw-bold">Access and Update</p>
                <p>
                  You have the right to access and update the personal
                  information we hold about you. You can do this by logging into
                  your account or contacting us directly.
                </p>
              </div>
              <div>
                <p className="fw-bold">Data Portability</p>
                <p>
                  {" "}
                  You have the right to request a copy of your personal data in
                  a structured, machine-readable format.
                </p>
              </div>
              <div>
                <p className="fw-bold">Deletion</p>
                <p>
                  You have the right to request that we delete your personal
                  data, subject to certain exceptions, such as where we are
                  legally required to retain it.
                </p>
              </div>
              <div>
                <p className="fw-bold">Opt-Out</p>
                <p>
                  You can opt-out of receiving marketing communications from us
                  at any time by following the unsubscribe instructions included
                  in our emails or contacting us directly.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h4>Changes to This Privacy Policy</h4>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or for other operational, legal, or
              regulatory reasons. We will notify you of any significant changes
              by posting the new Privacy Policy on our website and, where
              appropriate, informing you via email.
            </p>
          </div>
          <div>
            <h4>Data Collection and Usage</h4>
            <div className="d-flex flex-column gap-4">
              <div>
                <p>
                  We collect and use data to provide, improve, and customize our
                  services. This includes:
                </p>
                <p>
                  {" "}
                  <strong>Personal Data:</strong> Used to create and manage
                  accounts, process transactions, and deliver customer support.
                </p>
                <p>
                  <strong>Usage Data:</strong> Helps us understand how our
                  services are used, enabling us to optimize features and user
                  experience.
                </p>
                <p>
                  <strong>Cookies and Tracking:</strong> Facilitates site
                  navigation, personalizes content, and analyzes site traffic.
                </p>
              </div>
              <div>
                <p className="fw-bold mb-0">Purpose of Data Collection</p>
                <p>We collect data for the following purposes:</p>
                <p> Service Delivery: To provide and maintain our services.</p>
                <p>
                  Enhancement and Development: To improve and develop new
                  services based on user interaction.
                </p>
                <p>
                  Security and Compliance: To secure our services and ensure
                  compliance with legal obligations.
                </p>
              </div>
              <div>
                <p className="fw-bold">Data Sharing</p>
                <p>We may share your data with:</p>

                <li>
                  Service Providers: For processing payments, hosting,
                  analytics, and customer support.
                </li>
                <li>
                  Business Partners: In cases of mergers, acquisitions, or other
                  business transfers.
                </li>
                <li>
                  Legal Authorities: To comply with legal obligations or respond
                  to legal requests.
                </li>
              </div>

              <div>
                <p className="fw-bold">Data Retention</p>
                <p>
                  {" "}
                  We retain your personal data only as long as necessary to
                  fulfill the purposes for which it was collected, including
                  legal, accounting, or reporting requirements.
                </p>
              </div>
              <div>
                <p className="fw-bold"> Data Security</p>
                <p>
                  We employ robust security measures to protect your data from
                  unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>
              <div>
                <p className="fw-bold">User Control</p>
                <p>
                  You have the right to access, update, delete, or opt-out of
                  certain data usage practices. You can manage your preferences
                  through your account settings or by contacting us directly.
                </p>
              </div>
              <div>
                <p className="fw-bold">Compliance with Global Standards</p>
                <p>
                  {" "}
                  Our data usage practices are designed to comply with
                  international data protection standards, including GDPR and
                  CCPA, ensuring your rights and data privacy are respected.
                </p>
              </div>
              <div>
                <p className="fw-bold">Updates to Data Usage Policy</p>
                <p>
                  {" "}
                  We may revise this Data Usage policy as needed. Updates will
                  be posted on our website, and significant changes will be
                  communicated to you via email or other channels.
                </p>
              </div>
              <div>
                <p className="fw-bold">Contact Us</p>
                <p>
                  {" "}
                  If you have any questions about this Privacy Policy or our
                  data practices, please contact us at:
                </p>
                <li>Email: FusionFlareTech@outlook.com</li>
              </div>
            </div>
          </div>
        </main>
      </Container>
    </div>
  );
};

export default PrivacyPolicyPage;
