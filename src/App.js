import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { Page1DetailA } from "./Page1DetailA";
import { Page1DetailB } from "./Page1DetailB";

export default function App() {
  console.log("App");
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Link to="/">home</Link>
          <Link to="/page1">page1</Link>
          <Link to="/page2">page2</Link>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Page1 />}>
            <Route path="detailA" element={<Page1DetailA />} />
            <Route path="detailB" element={<Page1DetailB />} />
          </Route>
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
