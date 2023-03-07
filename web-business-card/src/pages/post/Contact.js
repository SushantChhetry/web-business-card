import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Footer />
      <div className="contact-wrapper">
        <form className="form-wrapper">
          <label>
            First Name:
            <input type="text" name="fname" />
          </label>
          <label>
            Last Name:
            <input type="text" name="lname" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <label>
            Message:
            <textarea type="text" name="message" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div className="misc">
          <p>twitter scroll</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
