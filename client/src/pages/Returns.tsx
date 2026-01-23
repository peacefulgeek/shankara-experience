import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Returns() {
  return (
    <div className="min-h-screen bg-[#1a0b2e] text-white selection:bg-accent selection:text-black">
      <Navigation />
      <section className="pt-32 pb-24 container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-display font-bold mb-12">Return Policy</h1>
        <div className="prose prose-invert prose-lg max-w-none">
          <h3>Physical Products</h3>
          <p>We want you to be absolutely delighted with your Shankara Oracle. If you receive a damaged or defective product, please contact us within 7 days of delivery for a replacement.</p>
          <p>Unopened physical products may be returned within 14 days of delivery for a refund, minus shipping costs. The item must be in its original, shrink-wrapped condition.</p>
          
          <h3>Digital Courses</h3>
          <p>Due to the immediate access nature of our digital courses (The Master Course), we generally do not offer refunds once the content has been accessed. However, we are committed to your satisfaction. If you encounter technical issues or believe the course was misrepresented, please contact our support team.</p>
          
          <h3>Certification Program</h3>
          <p>Enrollment in the Certification Program involves a commitment to the cohort. Refunds are available up to 14 days before the start of the live sessions, minus a non-refundable administrative fee.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
