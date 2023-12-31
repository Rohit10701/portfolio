import { Footer, Navbar } from "../components";
import {
  About,
  Project,
  Hero,
  Skill,
} from "../sections";

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Project />
    </div>
    <div className="relative">
      <Skill/>
      <div className="gradient-04 z-0" />
    </div>
    <Footer />
  </div>
);

export default Page;
