import Showcase from "../components/Showcase";
import BigIdea from "../components/BigIdea";
import RulesSection from "../components/RulesSection";
import CriteriaSection from "../components/CriteriaSection";
import FAQs from "../components/FAQs";
import Timeline from "../components/Timeline";
import Privacy from "../components/Privacy";
import Sponsors from "../components/Sponsors";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <body className="mx-auto bg-[#150E28] ">
        <Showcase />
        <BigIdea />
        <RulesSection />
        <CriteriaSection />
        {/* <FAQs />
        <Timeline />
        <Sponsors />
        <Privacy /> */}
      </body>
      {/* <footer>
        <Footer />
      </footer> */}
    </>
  );
}
