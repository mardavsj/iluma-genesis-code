import { Metadata } from "next";
import SnippetsPageContent from "./_components/SnippetsPageContent";

export const metadata: Metadata = {
  title: "Online Code Snippets - Star Code"
};

const SnippetsPage = () => {
  return (
    <div className="min-h-screen">
      <SnippetsPageContent />
    </div>
  );
};

export default SnippetsPage;