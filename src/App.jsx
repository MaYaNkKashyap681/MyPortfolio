import "./App.css";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Hero,
  Tech,
  Works,
  StarsCanvas,
  Navbar,
} from "./components/index";
import { linkedin } from "./assets";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* if you want to add image to the background use this way */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <a
          href="https://drive.google.com/file/d/1vLMBWhoKchG5RtHX1sl-DD2sl3d9yuc3/view?usp=sharing"
          target="_blank"
          className="font-bold"
        >
          <div className=" bg-blue-500 mt-2 cursor-pointer hover:bg-blue-400 max-w-[300px] p-4 flex justify-center items-center">
            Get My Resume
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/mayank-kashyap-a8370b1b7/"
          target="_blank"
        >
          <div className=" bg-blue-500 mt-2 cursor-pointer hover:bg-blue-400 max-w-[300px] p-4 flex justify-center items-center">
            My LinkedIn
            <img src={linkedin} className="h-[30px] w-[30px]" />
          </div>
        </a>

        <About />
        {/* <Experience /> */}
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
