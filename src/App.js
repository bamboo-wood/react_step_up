import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";

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
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
