import NavigationHeader from "@/components/NavigationHeader";
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "FAQs - Star Code"
}

const FaqPage = () => {
  return (
    <div>
      <NavigationHeader />
      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h1>
        <div className="space-y-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-100 mb-4">What is Star Code Editor?</h2>
            <p className="text-gray-400">
                Star Code Editor is an intuitive online platform designed to empower developers by providing a space to write, test, and share code seamlessly across a variety of programming languages. The editor supports real-time collaboration, making it an ideal tool for teams, solo developers, and coding enthusiasts alike.
            </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-100 mb-4">How can I get started with Star Code Editor?</h2>
            <p className="text-gray-400">
                Getting started with Star Code Editor is simple! Just visit our platform and dive straight into coding. While signing up is optional, registering an account gives you extra perks like saving your projects and sharing your code with others. No need to worry about complex setups—just start coding. 
            </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-100 mb-4">What languages does Star Code Editor support?</h2>
            <p className="text-gray-400">
              We support a wide range of popular programming languages, including JavaScript, Python, C++, Java, HTML, and CSS. And we&apos;re not stopping there! We&apos;re constantly expanding the list of supported languages to keep pace with emerging technologies.
            </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-100 mb-4">Can I integrate third-party libraries or frameworks into Star Code Editor?</h2>
            <p className="text-gray-400">
                Absolutely! Whether it&apos;s React, Vue, or any other framework, you can easily incorporate third-party libraries into your projects. Plus, you can upload files and include external resources, making your project as robust as you need it to be.
            </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-100 mb-4">Can I integrate version control (e.g., Git) with Star Code Editor?</h2>
            <p className="text-gray-400">
                At the moment, Star Code Editor doesn&apos;t offer native Git integration. However, you can easily export your code and sync it with any Git repository manually. We&apos;re working on bringing seamless version control integration in the future!
            </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-100 mb-4">Can I collaborate with others on a project?</h2>
            <p className="text-gray-400">
              Yes! Collaboration is at the heart of Star Code Editor. You can invite others to join your workspace, allowing you to work on projects together in real-time. Whether it&apos;s team collaboration or peer review, the platform makes it easy to share and edit code together.
            </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-100 mb-4">Is there a limit to how many projects I can create?</h2>
            <p className="text-gray-400">
                Nope! There are absolutely no limits to the number of projects you can create. Feel free to work on as many projects as you&apos;d like. Everything is stored securely and easily accessible through your profile, whenever you need it.
            </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-100 mb-4">Can I use Star Code Editor for teaching or educational purposes?</h2>
            <p className="text-gray-400">
                Star Code Editor is an excellent tool for educators and students alike. With features that support real-time collaboration, it&apos;s perfect for coding lessons, workshops, and group projects. Use it to demonstrate coding concepts, or let students collaborate on assignments.
            </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-100 mb-4">Can I access Star Code Editor on multiple devices?</h2>
            <p className="text-gray-400">
                Absolutely! Star Code Editor is cloud-based and works on any modern browser, so whether you&apos;re on a desktop, tablet, or smartphone, your work will be available to you from anywhere, anytime.
            </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-100 mb-4">Is there a mobile app for Star Code Editor?</h2>
                <p className="text-gray-400">
                    Currently, there is no dedicated mobile app, but our web-based editor is fully optimized for mobile browsers, so you can access and work on your projects from any device, even on the go.
                </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-100 mb-4">How do I save my work on Star Code Editor?</h2>
            <p className="text-gray-400">
                Don&apos;t worry about losing your progress! Your work is automatically saved as you type. When logged in, your projects are securely stored in your profile for easy access. Additionally, you can export your code at any time for local backups.
            </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-100 mb-4">What happens if I lose my internet connection while using Star Code Editor?</h2>
            <p className="text-gray-400">
                If you lose your internet connection while working, don&apos;t panic! Your work is saved locally in your browser, and once you reconnect, everything will sync automatically. You can even continue coding offline, and your progress will be restored once you&apos;re back online.
            </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-100 mb-4">Can I access my code after deleting my account?</h2>
            <p className="text-gray-400">
                Once you delete your account, all your data, including code and projects, will be permanently deleted from our servers. If you&apos;d like to keep any code, be sure to export your projects before proceeding with account deletion.
            </p>
        </div>


        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-100 mb-4">Is my data and code secure on Star Code Editor?</h2>
            <p className="text-gray-400">
                Your privacy and data security are our top priority. We use industry-standard encryption (SSL) to protect your data and ensure that your personal information and code remain safe. We implement strong access controls to limit who can view or interact with your data.
            </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-100 mb-4">How can I upgrade my account?</h2>
            <p className="text-gray-400">
                Star Code Editor is completely free to use! All features, including saving and sharing projects, are available at no cost. We believe in providing the best experience without the need for hidden fees or premium accounts.
            </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-100 mb-4">How do I report a bug or issue with the platform?</h2>
            <p className="text-gray-400">
                If you run into any bugs or issues, we&apos;re here to help! You can reach out to our support team by emailing us at <a href="mailto:mardavjadaun113@gmail.com" className="text-blue-500">mardavjadaun113@gmail.com</a>, or join our Discord community to report issues directly and get support from our team. Here you can <a href="https://discord.gg/mWfFfTgS" className="text-blue-500" target="_blank" rel="noopener noreferrer">Join our Discord</a>.
            </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-100 mb-4">How can I contribute to the development of Star Code Editor?</h2>
            <p className="text-gray-400">
                We welcome contributions! If you have ideas for new features or improvements, we&apos;d love to hear from you. Join our community on Discord or submit your ideas through our GitHub repository. We also welcome developers who wish to contribute to the codebase, and you can find our open-source repository on <a href="https://github.com/mardavsj/iluma-genesis-code" className="text-blue-500" target="_blank" rel="noopener noreferrer">GitHub</a>.
            </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-100 mb-4">How do I contact support?</h2>
            <p className="text-gray-400">
                For any support inquiries, feel free to email us at <a href="mailto:mardavjadaun113@gmail.com" className="text-blue-500">mardavjadaun113@gmail.com</a>. We strive to respond to all requests within 24 hours.
            </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
