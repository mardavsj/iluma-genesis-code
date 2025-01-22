import NavigationHeader from "@/components/NavigationHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions - Star Code"
};

const TermsPage = () => {
  return (
    <div>
      <NavigationHeader />
      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Terms and Conditions</h1>
        <ul className="list-disc pl-6 text-gray-400">
          <li className="mb-4">
            <strong className="text-gray-300/90">Acceptance of Terms:</strong> 
            Welcome to Star Code. By accessing or using our platform, you agree to abide by these Terms and Conditions. If you do not agree to any part of these terms, you may not use the Service. Your continued use of Star Code Editor constitutes your acceptance of these terms.
          </li>

          <li className="mb-4">
            <strong className="text-gray-300/90">License to Use:</strong> 
            We grant you a non-exclusive, non-transferable, and limited license to access and use Star Code Editor for personal or commercial coding purposes, under the following conditions:
            <ul className="list-disc pl-6 mt-2">
              <li>You may not sell, sublicense, or redistribute the Service.</li>
              <li>You agree not to reverse engineer, modify, or disrupt the platform in any way.</li>
              <li>You must comply with all applicable laws and regulations when using Star Code Editor.</li>
            </ul>
          </li>

          <li className="mb-4">
            <strong>User Responsibilities:</strong>
            As a user of Star Code Editor, you agree to:
            <ul className="list-disc pl-6 mt-2">
              <li>Use the editor lawfully and responsibly, respecting other&apos;s rights and the platform&apos;s integrity.</li>
              <li>Avoid creating, uploading, or sharing any harmful, malicious, or illegal content.</li>
              <li>Take reasonable measures to secure your account and prevent unauthorized access to your workspace.</li>
            </ul>
            <div className="text-blue-500/90">
              Star Code Editor is not responsible for the content you create, share, or execute. You remain responsible for ensuring that your actions comply with all applicable laws.
            </div>
          </li>

          <li className="mb-4">
            <strong>Code Snippets and Sharing:</strong>
            When you share code snippets using Star Code Editor, you retain ownership of the code you write. However, you agree that:
            <ul className="list-disc pl-6 mt-2">
              <li>Your shared content must not violate intellectual property rights.</li>
              <li>Your code must not contain viruses, malicious code, or harmful scripts.</li>
            </ul>
            <div className="text-blue-500/90">
              Star Code Editor reserves the right to remove or disable shared content if it violates these terms or is deemed inappropriate.
            </div>
          </li>

          <li className="mb-4">
            <strong>Service Availability:</strong> While we strive to maintain continuous service, we do not guarantee uninterrupted access to Star Code Editor. Service availability may be affected by:
            <ul className="list-disc pl-6 mt-2">
              <li>Planned maintenance or unexpected technical issues.</li>
              <li>Changes or updates to features or services.</li>
              <li>Force majeure events beyond our control.</li>
            </ul>
            <div className="text-blue-500/90">
              We are not liable for any loss of data, downtime, or service interruptions due to technical issues or unforeseen errors.
            </div>
          </li>

          <li className="mb-4">
            <strong>Limitation of Liability:</strong> To the fullest extent permitted by law:
            <ul className="list-disc pl-6 mt-2">
              <li>Star Code Editor is provided as is, without warranties of any kind, either express or implied.</li>
              <li>We are not liable for any damages, including loss of code, data, or business opportunities, resulting from your use of the platform.</li>
            </ul>
            <div className="text-blue-500/90">
              By using the Service, you agree to assume full responsibility for any risks associated with your use of Star Code Editor.
            </div>
          </li>

          <li className="mb-4">
            <strong>Termination of Service:</strong> We reserve the right to suspend or terminate your access to Star Code Editor if you violate any of these Terms and Conditions. Additionally, we may modify or discontinue any part of the Service at our sole discretion, with or without notice.
          </li>

          <li className="mb-4">
            <strong>Updates to Terms:</strong> These Terms and Conditions may be updated periodically to reflect changes in our platform or legal requirements. Your continued use of Star Code Editor after such updates indicates your acceptance of the updated Terms.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TermsPage;
