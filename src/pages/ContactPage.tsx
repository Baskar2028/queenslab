import Contact from "@/components/Contact";
import PageMeta from "@/components/PageMeta";

const ContactPage = () => (
  <>
    <PageMeta
      page="contact"
    />
    <main className="page-shell">
      <Contact standalone />
    </main>
  </>
);

export default ContactPage;
