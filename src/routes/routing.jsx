import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import { Home } from "../components/Home/Home";
import { About } from "../components/About/About";
import { Skills } from "../components/Skills/Skills"
import { Experience } from "../components/Experience/Experience"
import {Contact} from "../components/Contact/Contact"

import GlobalStateContext from "../context/GlobalStateContext";

const Routing = () => {
  return (
    <GlobalStateContext>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route index element={<Home />} />
            <Route path="/about/" element={<About/>} />
            <Route path="/skills/" element={<Skills />} />
            {/* <Route path="/experience/" element={<Experience />} /> */}
            <Route path="/contact/" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalStateContext>
  );
};

export default Routing;
