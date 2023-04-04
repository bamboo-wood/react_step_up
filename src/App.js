import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./router/Router";

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

        <Router />
      </BrowserRouter>
    </>
  );
}
