import NavigationHeader from "@/components/NavigationHeader";

const SupportPage = () => {
  return (
    <div>
      <NavigationHeader />
      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Support</h1>
        <p className="text-gray-400 mb-6">
          If you are experiencing any issues or have any questions, we are here to help! You can reach out to our support team through the following methods:
        </p>
        <ul className="list-disc pl-6 text-gray-400 mb-6">
          <li className="mb-4">
            <strong>Email Support:</strong> For assistance with any technical issues or inquiries, please email us at:
            <div className="text-blue-400/70">
              <a href="mailto:mardavjadaun113@gmail.com" className="text-blue-500">mardavjadaun113@gmail.com</a>
            </div>
          </li>
          <li className="mb-4">
            <strong>FAQs:</strong> Visit our <a href="/faq" className="text-blue-500 hover:underline">Frequently Asked Questions</a> page for answers to common questions.
          </li>
          <li className="mb-4">
            <strong>Community:</strong> Our community is still small, growing gradually, but we would love for you to join us on Discord! It is a great place to get real-time support and connect with other users. <a href="https://discord.gg/yourdiscordlink" className="text-blue-500" target="_blank" rel="noopener noreferrer">Join our Discord</a>
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">Support Us</h2>
        <p className="text-gray-400 mb-4">
          If you find Genesis Code Editor helpful and want to support its development, consider buying us a coffee:
        </p>
        <div className="text-center">
            <a href="https://buymeacoffee.com/mardav.sj" target="_blank" rel="noopener noreferrer">
            <button className="m-5 px-6 py-3 bg-yellow-400 text-black rounded-full hover:bg-yellow-500">
              Buy Us a Coffee
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
