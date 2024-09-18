// Contact.js
function Contact() {
    return (
      <section id="contact" className="my-16">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="mb-6">
          I'm open to opportunities and collaborations. Feel free to reach out!
        </p>
        <form className="max-w-md mx-auto">
          <input type="text" name="name" placeholder="Your Name" className="w-full mb-4 p-3 border rounded" required />
          <input type="email" name="email" placeholder="Your Email" className="w-full mb-4 p-3 border rounded" required />
          <textarea name="message" placeholder="Your Message" className="w-full mb-4 p-3 border rounded h-32" required></textarea>
          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition">Send Message</button>
        </form>
      </section>
    );
  }
  
  export default Contact;
  