import Contact from "@/components/Contact";
import PageMeta from "@/components/PageMeta";

const ContactPage = () => (
  <>
    <PageMeta
      title="Contact"
      description="Contact ATEXRA to discuss modern website development, AI-integrated digital solutions, and business automation."
    />
    <main className="page-shell">
      <Contact />
    </main>
  </>
);

export default ContactPage;
