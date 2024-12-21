import NavigationHeader from "@/components/NavigationHeader";

const ContactPage = () => {
  return (
    <div>
      <NavigationHeader />
      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
        <p className="text-gray-400 mb-6 text-center">
          Have a question, feedback, or just want to say hello? We&apos;d love to hear from you! Here&apos;s how you can get in touch with us.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Email Us</h2>
          <p className="text-gray-400 mb-4">
            For general inquiries, technical support, or collaboration opportunities, drop us an email:
          </p>
          <a
            href="mailto:mardavjadaun113@gmail.com"
            className="text-blue-500 hover:underline"
          >
            mardavjadaun113@gmail.com
          </a>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
          <p className="text-gray-400 mb-4">
            Connect with us and fellow developers on Discord. Share ideas, ask questions, or collaborate on exciting projects:
          </p>
          <a
            href="https://discord.gg/yourdiscordlink"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Join our Discord Community
          </a>
        </div>
        
      </div>
    </div>
  );
};

export default ContactPage;
