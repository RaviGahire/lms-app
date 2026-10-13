import { ContactDeskCard } from './components/ContactDeskCard';
import { ContactHero } from './components/ContactHero';
import { InquiryForm } from './components/InquiryForm';

export const ContactPage = () => {
  return (
    <section aria-label="contact-page">
      {/* Hero */}
      <ContactHero />
      {/* DeskCards */}
      <ContactDeskCard />
      {/* Inquiey form */}
      <InquiryForm />
    </section>
  );
};
