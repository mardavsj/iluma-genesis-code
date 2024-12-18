import NavigationHeader from "@/components/NavigationHeader";

const PrivacyPage = () => {
    return (
        <div>
            <NavigationHeader />
            <div className="p-8 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>
                <ul className="list-disc pl-6 text-gray-400">
                    <li className="mb-4">
                        <strong className="text-gray-300/90">Introduction:</strong> Welcome to Genesis Code. This Privacy Policy explains how we collect, use, and protect your personal data when you use our platform.
                    </li>
                    <li className="mb-4">
                        <strong className="text-gray-300/90">Information We Collect:</strong> We collect personal information such as your email address during registration, as well as usage data like browsing information, pages visited, and interactions with the editor.
                        <ul className="list-disc pl-6 mt-2">
                            <li><strong>Personal Information:</strong> This includes data like your name, email address, and any other details you provide.</li>
                            <li><strong>Usage Data:</strong> We collect data on how you interact with the platform to improve user experience.</li>
                        </ul>
                    </li>
                    <li className="mb-4">
                        <strong className="text-gray-300/90">How We Use Your Information:</strong> The data we collect is used to:
                        <ul className="list-disc pl-6 mt-2">
                            <li>Provide and improve the functionality of Genesis Code Editor.</li>
                            <li>Send updates, notifications, and promotional content if you’ve opted in.</li>
                            <li>Monitor and analyze usage patterns to enhance platform performance.</li>
                        </ul>
                    </li>
                    <li className="mb-4">
                        <strong className="text-gray-300/90">Data Security:</strong> We take your privacy seriously and implement appropriate security measures to protect your data.
                        <ul className="list-disc pl-6 mt-2">
                            <li>Your data is stored securely and encrypted where possible.</li>
                            <li>We restrict access to your data to authorized personnel only.</li>
                        </ul>
                    </li>
                    <li className="mb-4">
                        <strong className="text-gray-300/90">Data Retention:</strong> We will retain your personal data for as long as necessary to fulfill the purposes outlined in this Privacy Policy. If you delete your account, we may retain certain information for legal or operational reasons.
                    </li>
                    <li className="mb-4">
                        <strong className="text-gray-300/90">Your Rights:</strong> Depending on your location, you may have the right to:
                        <ul className="list-disc pl-6 mt-2">
                            <li>Access your personal data.</li>
                            <li>Request correction or deletion of your personal data.</li>
                            <li>Object to or restrict the processing of your personal data.</li>
                        </ul>
                    </li>
                    <li className="mb-4">
                        <strong className="text-gray-300/90">Third-Party Services:</strong> We may use third-party services for analytics, authentication, and hosting. These services may collect data as described in their own privacy policies. We are not responsible for their privacy practices.
                    </li>
                    <li className="mb-4">
                        <strong className="text-gray-300/90">Changes to This Privacy Policy:</strong> We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
                    </li>
                    <li className="mb-4">
                        <strong className="text-gray-300/90">Contact Us:</strong> If you have any questions or concerns regarding this Privacy Policy, please reach out to the creator of Genesis Code at: <a href="mailto:mardavjadaun113@gmail.com" className="text-blue-500">mardavjadaun113@gmail.com</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default PrivacyPage;
