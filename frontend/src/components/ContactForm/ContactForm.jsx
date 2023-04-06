import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./contactform.css";

function ContactForm() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  return (
    <><form
      className="formstyling"
      onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
    >
      <fieldset>
        <ul>
          <li>
            <label htmlFor="name">Username</label> <br />
            <input className="input" {...register("name")} placeholder="Your Username" />
          </li>
          <br />
          <li>
            <label htmlFor="email">E-mail</label> <br />
            <input
              className="input"
              {...register("email")}
              placeholder="Your Email" />{" "}
            <br />
          </li>
          <br />
          <li>
            <label htmlFor="phone">Phone</label> <br />
            <input
              className="input"
              {...register("phone")}
              type="phone"
              placeholder="Enter your Phone here" />
          </li>
          <br />
          <li>
            <label htmlFor="budget">Budget</label> <br />
            <input
              className="input"
              {...register("budget")}
              type="number"
              step="0.01"
              placeholder="0.00€" />
          </li>
          <br />
          <li>
            <label htmlFor="goals">Goals</label> <br />
            <textarea
              className="input"
              rows="5"
              cols="30"
              {...register("Goals")}
              placeholder="Your goals" />
          </li>
        </ul>
      </fieldset>

      <p>{data}</p>
      <button className="btn-form" type="submit">
        Send Enquiry
      </button>
    </form>
    <div className="terms">
        <h6 className="title-terms">Terms & Conditions</h6>
        <p id="paragraph-terms">Welcome to BoostMyAthlete, a platform designed to connect athletes with coaches and sponsors. Before using our services, please carefully read these Terms and Conditions ("Terms") as they govern your use of the BoostMyAthlete platform, including our website, applications, and all other services provided by BoostMyAthlete (collectively referred to as the "Platform").</p>

        <span id="term-1">Acceptance of Terms</span>
        <p id="paragraph-terms"> By accessing or using the Platform, you agree to be bound by these Terms, which constitute a legally binding agreement between you and BoostMyAthlete. If you do not agree to these Terms, you should not use the Platform.</p>

         <span id="term-1">Eligibility</span>
         <p id="paragraph-terms"> To use the Platform, you must be at least 18 years old. By using the Platform, you represent and warrant that you are 18 years of age or older and have the legal capacity to enter into this agreement.</p>

          <span id="term-1">Registration</span>
          <p id="paragraph-terms"> To use the Platform, you may need to create an account by providing us with accurate and complete information. You are responsible for maintaining the confidentiality of your account and password, and for restricting access to your account. You agree to accept responsibility for all activities that occur under your account.</p>

         <span id="term-1">Use of the Platform</span>
         <p id="paragraph-terms"> You agree to use the Platform only for lawful purposes and in accordance with these Terms. You are responsible for your conduct on the Platform and any consequences that may result from your conduct.</p>

         <span id="term-1">User Content</span>
         <p id="paragraph-terms"> You may upload, submit or post content, including but not limited to photos, videos, comments, and messages ("User Content") on the Platform. You retain all rights to your User Content. By uploading, submitting or posting User Content on the Platform, you grant BoostMyAthlete a non-exclusive, royalty-free, transferable, sublicense, worldwide license to use, copy, modify, create derivative works based on, distribute, publicly display, publicly perform, and otherwise exploit in any manner such User Content in all formats and distribution channels now known or hereafter devised (including in connection with the Platform and BoostMyAthlete's business and on third-party sites and services), without further notice to or consent from you, and without the requirement of payment to you or any other person or entity.

          You represent and warrant that: (i) you either are the sole and exclusive owner of all User Content or you have all rights, licenses, consents and releases that are necessary to grant to BoostMyAthlete the rights in such User Content, as contemplated under these Terms; and (ii) neither the User Content, nor your submission, uploading, publishing or otherwise making available of such User Content, nor BoostMyAthlete's use of the User Content as permitted herein will infringe, misappropriate or violate a third party's patent, copyright, trademark, trade secret, moral rights or other proprietary or intellectual property rights, or rights of publicity or privacy, or result in the violation of any applicable law or regulation.</p>

          <span id="term-1">Prohibited Activities</span>
          <p id="paragraph-terms">You agree not to engage in any of the following activities:

          Use the Platform for any unlawful purpose, or to solicit others to engage in unlawful activities;
          Engage in any conduct that restricts or inhibits any other user from using or enjoying the Platform, or which may harm BoostMyAthlete or users of the Platform;
          Impersonate any person or entity or falsely state or otherwise misrepresent your affiliation with a person or entity;
          Upload, submit or post any User Content that is defamatory, obscene, abusive, or otherwise objectionable;
          Upload, submit or post any User Content that contains viruses or other harmful computer code, files or programs;
          Interfere with or disrupt the Platform, servers or networks connected to the Platform, or disobey any requirements, procedures
          </p>
          </div>
          <br />
          <br />
        <div className="privacy-policy">
          <h1 className="title-privacy-policy">Privacy Policy</h1>
          <p className="paragraph-privacy-policy"> We, BoostMyAthlete, take your privacy seriously. To better protect your privacy we provide this privacy policy notice explaining the way your personal information is collected and used.</p>
          <h2 className="subtitle-privacy-policy">Collection of Routine Information</h2>
          <p className="paragraph-privacy-policy">This website track basic information about their users. This information includes, but is not limited to, IP addresses, browser details, timestamps and referring pages. None of this information can personally identify specific user to this website. The information is tracked for routine administration and maintenance purposes.</p>
          <h3 className="subtitle-privacy-policy">Cookies</h3>
          <p className="paragraph-privacy-policy">Where necessary, this website uses cookies to store information about a visitor's preferences and history in order to better serve the user and/or present the user with customized content.</p>
          <h4 className="subtitle-privacy-policy">Advertisement and Other Third Parties</h4>
          <p className="paragraph-privacy-policy">Advertising partners and other third parties may use cookies, scripts and/or web beacons to track user activities on this website in order to display advertisements and other useful information. Such tracking is done directly by the third parties through their own servers and is subject to their own privacy policies. This website has no access or control over these cookies, scripts and/or web beacons that may be used by third parties. Learn how to opt out of Google's cookie usage.</p>
          <h5 className="subtitle-privacy-policy">Links to Third Party Websites</h5>
          <p className="paragraph-privacy-policy">We have included links on this website" or  for your use and reference. We are not responsible for the privacy policies on these websites. You should be aware that the privacy policies of these websites may differ from our own.</p>
          <h6 className="subtitle-privacy-policy">Security</h6>
          <p className="paragraph-privacy-policy">The security of your personal information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.</p>
          <h7 className="subtitle-privacy-policy">Changes To This Privacy Policy</h7>
          <p className="paragraph-privacy-policy">This Privacy Policy is effective as of 6/April/2023 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.
              We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us, or by placing a prominent notice on our website.</p>
          <h8 className="subtitle-privacy-policy">Contact Information</h8>
          <p className="paragraph-privacy-policy">For any questions or concerns regarding the privacy policy, please send us an email to CustomerService@BoostMyAthlete.com</p>
        </div>
      </>
       
  );
}

export default ContactForm;
