import { useState } from "react";
import HomeHeader from "../../components/HomeHeader";
import HomeFooter from "../../components/HomeFooter";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import styles from "./index.module.css";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameRegex = /^[A-Za-z ]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out all fields.");
      return;
    }
    if (!nameRegex.test(formData.name)) {
      alert("Name should only contain letters and spaces.");
      return;
    }
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    alert("Message sent! We will get back to you soon.");

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className={styles.pageWrapper}>
      <HomeHeader />
      <div className={styles.contentWrapper}>
        <div className={styles.contactContainer}>
          <h1>Contact Us</h1>
          <p className={styles.subtitle}>
            <span>Mail : blogit@gmail.com</span>
            <span>Phone :9876543210</span>
          </p>
          <div className={styles.formWrapper}>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
            <TextArea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            />
            <button className={styles.submitBtn} onClick={handleSubmit}>
              Send Message
            </button>
          </div>
        </div>
      </div>
      <HomeFooter />
    </div>
  );
}

export default ContactUs;
