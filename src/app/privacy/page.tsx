import NavigationHeader from "@/components/NavigationHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy - Star Code"
};

const PrivacyPage = () => {
    return (
        <div>
            <NavigationHeader />
            <div className="p-8 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>
                <ul className="list-disc pl-6 text-gray-400">
                    <li className="mb-4">
                        <strong className="text-gray-300/90">Welcome to Star Code:</strong> We value your privacy and are committed to safeguarding your personal information. This Privacy Policy outlines how we collect, use, store, and safeguard your data as you interact with our platform. By using our services, you agree to the terms outlined below.
                    </li>
                    <li className="mb-4">
                        <strong className="text-gray-300/90">Information We Collect:</strong> At Star Code, we collect two primary types of information: personal and usage data. This helps us provide you with the best possible service and experience.
                        <ul className="list-disc pl-6 mt-2">
                            <li><strong>Personal Information:</strong> This includes any information that can be used to identify you personally, such as your name, email address, and any other contact details you choose to provide. This data is collected during the registration process and when you communicate with us.</li>
                            <li><strong>Usage Data:</strong> We gather data on your interactions with our platform. This includes information on pages you visit, time spent on the platform, actions performed, and technical data like browser type, operating system, and IP address. This helps us understand how users engage with our platform to enhance functionality.</li>
                        </ul>
                    </li>
                    <li className="mb-4">
                        <strong className="text-gray-300/90">How We Use Your Information:</strong> Your data is essential for us to offer a smooth and efficient service. Here&apos;s how we use it:
                        <ul className="list-disc pl-6 mt-2">
                            <li>To personalize your experience and customize the features and content we offer based on your preferences.</li>
                            <li>To send transactional communications, such as registration confirmations, password reset instructions, and other essential notifications related to your account.</li>
                            <li>If you opt in, we may send marketing communications, promotional offers, and updates about new features or services.</li>
                            <li>To analyze platform usage patterns, conduct research, and improve our services. This includes understanding how you interact with the Star Code Editor and identifying areas for optimization.</li>
                        </ul>
                    </li>
                    <li className="mb-4">
                        <strong className="text-gray-300/90">Data Security and Protection:</strong> We take extensive precautions to protect your personal data from unauthorized access, disclosure, or alteration. Some of the key security measures include:
                        <ul className="list-disc pl-6 mt-2">
                            <li>All sensitive data is transmitted using encryption protocols, ensuring it is protected during transfer.</li>
                            <li>Our servers are secured with state-of-the-art firewall protection and frequent security audits to mitigate risks.</li>
                            <li>We limit access to your personal data to authorized personnel only, and we implement regular training for our staff to ensure they follow the best security practices.</li>
                        </ul>
                    </li>
                    <li className="mb-4">
                        <strong className="text-gray-300/90">Data Retention:</strong> We retain your personal data only as long as necessary to fulfill the purposes described in this Privacy Policy. In the event that you choose to delete your account, we will retain certain data for legal, accounting, or operational purposes. For instance:
                        <ul className="list-disc pl-6 mt-2">
                            <li>Account-related information may be retained for up to 90 days following deletion for fraud detection or dispute resolution.</li>
                            <li>We may retain certain anonymized data for analytical purposes even after your account is deleted.</li>
                        </ul>
                    </li>
                    <li className="mb-4">
                        <strong className="text-gray-300/90">Your Data Protection Rights:</strong> Depending on where you are located, you may have the following rights regarding your personal data:
                        <ul className="list-disc pl-6 mt-2">
                            <li>Access: You may request copies of your personal data we hold about you.</li>
                            <li>Correction: You can request corrections to any inaccurate or incomplete personal data.</li>
                            <li>Deletion: You have the right to request the deletion of your personal data under certain conditions.</li>
                            <li>Restriction: You may request the restriction of how we process your personal data in certain circumstances.</li>
                            <li>Portability: You may request a transfer of your personal data to another organization, where applicable.</li>
                            <li>Opt-out: You have the right to object to any data processing that is not in line with our legitimate interests, including direct marketing.</li>
                        </ul>
                    </li>
                    <li className="mb-4">
                        <strong className="text-gray-300/90">Third-Party Integrations:</strong> Star Code utilizes third-party services to enhance your experience, and these providers may collect data as described in their own privacy policies. Some of the third-party services we use include:
                        <ul className="list-disc pl-6 mt-2">
                            <li><strong>Analytics Services:</strong> We use third-party services like Google Analytics to monitor platform usage and improve our services.</li>
                            <li><strong>Hosting and Authentication:</strong> We use services like Firebase and AWS to securely host your data and manage authentication processes.</li>
                            <li><strong>Payment Providers:</strong> If applicable, we may use external payment processors to handle financial transactions, and their privacy policies will apply to any payments made through the platform.</li>
                        </ul>
                    </li>
                    <li className="mb-4">
                        <strong className="text-gray-300/90">Cookies and Tracking Technologies:</strong> To offer a better and more personalized experience, Star Code may use cookies and other tracking technologies to collect and store information about how you use the platform. This helps us improve our services, analyze usage patterns, and deliver relevant content.
                        <ul className="list-disc pl-6 mt-2">
                            <li><strong>Cookies:</strong> These are small data files stored on your device that help us recognize your preferences, session information, and improve site performance.</li>
                            <li><strong>Tracking Technologies:</strong> We may use pixels and web beacons to track user activities for analytics and to deliver targeted ads, if you have consented to such use.</li>
                        </ul>
                    </li>
                    <li className="mb-4">
                        <strong className="text-gray-300/90">Changes to This Privacy Policy:</strong> We periodically update this Privacy Policy to reflect changes in our practices or the law. When we update this policy. We encourage you to review this Privacy Policy regularly to stay informed about how we are protecting your data.
                    </li>
                    <li className="mb-4">
                        <strong className="text-gray-300/90">Contact Us:</strong> If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your data, please do not hesitate to contact us. You can reach us at: <a href="mailto:mardavjadaun113@gmail.com" className="text-blue-500">mardavjadaun113@gmail.com</a>.
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default PrivacyPage;
