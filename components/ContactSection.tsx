import ContactForm from './ContactForm';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out using the form below.
          </p>
        </div>
        
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;