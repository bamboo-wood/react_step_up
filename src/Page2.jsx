import { Link, Outlet } from "react-router-dom";

export const Page2 = () => {
  console.log("Page2");
  return (
    <div>
      <h1>Page1</h1>
      <Link to="bamboo_wood">URL Parameter</Link>
      <br />
      <Link to="bamboo_wood?name=hogehoge">Query Parameter</Link>
      <Outlet />
    </div>
  );
};
