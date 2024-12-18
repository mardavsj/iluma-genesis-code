import NavigationHeader from "@/components/NavigationHeader";

const FaqPage = () => {
  return (
    <div>
      <NavigationHeader />
      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h1>
        <div className="space-y-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-100 mb-4">What is Genesis Code Editor?</h2>
            <p className="text-gray-400">
              Genesis Code Editor is an online code editor designed for developers to write, test, and share code in various programming languages. It provides real-time collaboration and supports syntax highlighting, and more.
            </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-100 mb-4">How can I get started with Genesis Code Editor?</h2>
            <p className="text-gray-400">
                To get started, simply visit our platform and start coding right away! Signing in is only required if you wish to share, star, or interact with code snippets. You can start using the editor and enjoy its features without an account. 
            </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-100 mb-4">What languages does Genesis Code Editor support?</h2>
            <p className="text-gray-400">
              Genesis Code Editor supports a wide range of programming languages including JavaScript, Python, Java, C++, HTML, CSS, and more. We are continuously adding support for more languages and tools to enhance your coding experience.
            </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-100 mb-4">Can I integrate third-party libraries or frameworks into Genesis Code Editor?</h2>
            <p className="text-gray-400">
                Yes, you can integrate third-party libraries and frameworks into your projects on Genesis Code Editor. We provide easy access to many popular libraries, and you can also upload your own files or import external resources as needed.
            </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-100 mb-4">Can I integrate version control (e.g., Git) with Genesis Code Editor?</h2>
            <p className="text-gray-400">
                While Genesis Code Editor does not natively integrate with Git, you can export your code and manually upload it to any Git repository. We are planning to add Git integration in future updates to streamline version control within the platform. Stay tuned until then.
            </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-100 mb-4">Can I collaborate with others on a project?</h2>
            <p className="text-gray-400">
              Yes, Genesis Code Editor allows real-time collaboration. You can invite others to your workspace, share code snippets, and work together on projects in real-time, making it easy to collaborate with teammates or peers.
            </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-100 mb-4">Is there a limit to how many projects I can create?</h2>
            <p className="text-gray-400">
                There are no limits on the number of projects you can create on Genesis Code Editor. You can work on as many projects as you like, and they will be saved to your profile for easy access whenever you need them.
            </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-100 mb-4">Can I use Genesis Code Editor for teaching or educational purposes?</h2>
            <p className="text-gray-400">
                Absolutely! Genesis Code Editor is a great tool for educators and students. It supports real-time collaboration, making it perfect for coding classes, workshops, and group projects. You can also use it to demonstrate coding concepts or have students work on assignments together.
            </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-100 mb-4">Can I access Genesis Code Editor on multiple devices?</h2>
            <p className="text-gray-400">
                Absolutely! Genesis Code Editor is web-based, so you can access it from any device with an internet connection and a modern browser. Whether you are using a desktop, tablet, or smartphone, your work is always accessible.
            </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-100 mb-4">Is there a mobile app for Genesis Code Editor?</h2>
                <p className="text-gray-400">
                    Currently, Genesis Code Editor is optimized for web browsers and does not have a dedicated mobile app. However, you can access the editor on mobile devices using a browser for a responsive experience.
                </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-100 mb-4">How do I save my work on Genesis Code Editor?</h2>
            <p className="text-gray-400">
                Your work is automatically saved as you type. When logged in, your projects are stored in your profile and are accessible anytime you log in to your account. Additionally, you can export your code at any time to ensure you have a local backup.
            </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-100 mb-4">What happens if I lose my internet connection while using Genesis Code Editor?</h2>
            <p className="text-gray-400">
                Genesis Code Editor is designed to automatically save your work as you type. If you lose your internet connection, your work will be saved locally in your browser and will sync once you reconnect. You can continue coding offline and your progress will be recovered when you regain access to the platform.
            </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-100 mb-4">Can I access my code after deleting my account?</h2>
            <p className="text-gray-400">
                Once you delete your account, all associated data, including your projects and code snippets, will be permanently erased from our servers. If you wish to keep your code, we recommend exporting your projects before deleting your account.
            </p>
        </div>


        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-100 mb-4">Is my data and code secure on Genesis Code Editor?</h2>
            <p className="text-gray-400">
                We take the security of your data seriously. Genesis Code Editor uses encrypted connections (SSL) and adheres to industry-standard best practices to protect your code, personal information, and any other data stored on our platform.
            </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-100 mb-4">How can I upgrade my account?</h2>
            <p className="text-gray-400">
                There is no upgrade process for Genesis Code Editor. All features are free, and we do not charge anything now or in the future. You can enjoy the full experience without any hidden fees or premium plans.
            </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-100 mb-4">How do I report a bug or issue with the platform?</h2>
            <p className="text-gray-400">
                If you encounter any bugs or issues, please reach out to our support team via email at <a href="mailto:mardavjadaun113@gmail.com" className="text-blue-500">mardavjadaun113@gmail.com</a>, or report the issue directly on our Discord community where our team is ready to assist. Here you can <a href="https://discord.gg/yourdiscordlink" className="text-blue-500" target="_blank" rel="noopener noreferrer">Join our Discord</a>.
            </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-100 mb-4">How can I contribute to the development of Genesis Code Editor?</h2>
            <p className="text-gray-400">
                We welcome contributions! If you have suggestions for new features or improvements, feel free to contact us or submit your ideas through our Discord community. We also welcome developers who wish to contribute to the codebase, and you can find our open-source repository on <a href="https://github.com/mardavsj/iluma-genesis-code" className="text-blue-500" target="_blank" rel="noopener noreferrer">GitHub</a>.
            </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-100 mb-4">How do I contact support?</h2>
            <p className="text-gray-400">
                You can contact our support team via email at <a href="mailto:mardavjadaun113@gmail.com" className="text-blue-500">mardavjadaun113@gmail.com</a>. We aim to respond to all inquiries within 24 hours.
            </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
