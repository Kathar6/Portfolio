// Components
import PageContainer from "@components/page-container";
import Footer from "@components/footer";

// Styles
import "@styles/home-page.css";

export default function HomePage() {
  return (
    <PageContainer id="home" className="home-page relative">
      <div className="p-0 pt-36 sm:p-16 lg:p-28 pt-40 font-lighter">
        <div className="title text-primary-500 text-6xl sm:text-8xl lg:text-9xl max-w-3xl text-wrap mb-4">
          Frontend Developer
        </div>
        <span className="text-neutral-50 text-2xl md:text-4xl">
          Mateo Alonso Pabón García
        </span>
      </div>
      <Footer />
    </PageContainer>
  );
}
