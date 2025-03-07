import { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });
    const [status, setStatus] = useState(""); // For success/error messages
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      // Basic validation
      if (!formData.name || !formData.email || !formData.message) {
        setStatus("Please fill out all fields");
        return;
      }

      // EmailJS parameters
      const serviceID = "service_ngx70ak";
      const templateID = "template_cark7pc";
      const publicKey = "l0m5mEijS_jNs4l4p";

      emailjs.send(serviceID, templateID, formData, publicKey)
        .then(() => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: ""}); // Reset form
        })
        .catch((error) => {
          console.error("EmailJS Error:", error);
          setStatus("Failed to send message. Try again later.");
        });
    };

    return (
      <section id="contact" className="my-16">
        <h2 className="text-exl font-bold mb-6 text-center">Contact</h2>
        <p className="mb-6 text-center">
          I'm open to opportunities and collaborations. Feel free to reach out!
        </p>
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mb-4 p-3 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mb-4 p-3 border rounded"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full mb-4 p-3 border rounded h-32"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Success/Error Message */}
        {status && (
          <p className={`text-center mt-4 ${status.includes("success") ? "text-green-500" : "text-red-500"}`}>
            {status}
          </p>
        )}
      </section>
    );
  }
  
  export default Contact;
  