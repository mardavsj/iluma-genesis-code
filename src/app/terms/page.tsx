import NavigationHeader from "@/components/NavigationHeader";

const TermsPage = () => {
  return (
    <div>
    <NavigationHeader/>
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Terms and Conditions</h1>
      <ul className="list-disc pl-6 text-gray-400">
        <li className="mb-4">
          <strong className="text-gray-300/90">Acceptance of Terms:</strong> Welcome to Genesis Code. By accessing or using our platform, you agree to abide by these Terms and Conditions. If you do not agree to any part of these terms, you may not use the Service.
        </li>
        <li className="mb-4">
                      <strong className="text-gray-300/90">License to Use:</strong> We grant you a non-exclusive, non-transferable, limited license to access and use Genesis Code Editor for personal or commercial coding purposes.
          <ul className="list-disc pl-6 mt-2">
            <li>You may not sell, sublicense, or distribute the Service.</li>
            <li>You agree not to modify, reverse engineer, or disrupt the platform.</li>
          </ul>
        </li>
        <li className="mb-4">
          <strong>User Responsibilities:</strong> When using Genesis Code Editor, you agree to:
          <ul className="list-disc pl-6 mt-2">
            <li>Use the editor lawfully and responsibly.</li>
            <li>Avoid creating or sharing harmful, malicious, or illegal content.</li>
            <li>Prevent unauthorized access to your account or local workspace.</li>
          </ul>
          <div className="text-blue-500/90">
          Genesis Code Editor is not responsible for the content you create, share, or execute. Users retain responsibility for ensuring compliance with applicable laws.
          </div>
        </li>
        <li className="mb-4">
          <strong>Code Snippets and Sharing:</strong>
          <ul className="list-disc pl-6 mt-2">
            <li>You own the code you write.</li>
            <li>If you use the snippet-sharing feature, you confirm that the content does not:
              <ul className="list-disc pl-6 mt-2">
                <li>Violate intellectual property rights.</li>
                <li>Contain viruses, malicious code, or harmful scripts.</li>
              </ul>
            </li>
            <div className="text-blue-500/90">Genesis Code Editor reserves the right to remove or disable shared content if it violates these terms.</div>
          </ul>
        </li>
        <li className="mb-4">
          <strong>Service Availability:</strong> We strive to maintain uninterrupted service but do not guarantee 100% uptime.
          <ul className="list-disc pl-6 mt-2">
            <li>Features may be updated, changed, or removed at any time.</li>
            <li>We are not liable for data loss due to interruptions, bugs, or unforeseen errors.</li>
          </ul>
        </li>
        <li className="mb-4">
          <strong>Limitation of Liability:</strong> To the extent permitted by law:
          <ul className="list-disc pl-6 mt-2">
            <li>Genesis Code Editor is provided as is without warranties of any kind.</li>
            <li>We are not liable for any loss of code, data, or damages resulting from your use of the platform.</li>
          </ul>
        </li>
        <li className="mb-4">
          <strong>Termination of Service:</strong> We reserve the right to:
          <ul className="list-disc pl-6 mt-2">
            <li>Suspend or terminate access if you violate these Terms.</li>
            <li>Modify or discontinue any part of the Service without prior notice.</li>
          </ul>
        </li>
        <li className="mb-4">
          <strong>Updates to Terms:</strong> These Terms may be updated periodically. Continued use of the Service after changes indicates your acceptance of the updated Terms.
        </li>
      </ul>
    </div>
    </div>
  );
};

export default TermsPage;
