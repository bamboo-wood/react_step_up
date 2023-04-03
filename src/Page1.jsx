import { Link, Outlet } from "react-router-dom";

export const Page1 = () => {
  console.log("Page1");
  return (
    <div>
      <h1>Page1</h1>
      <Link to="detailA">DetailA</Link>
      <Link to="detailB">DetailB</Link>
      <Outlet />
    </div>
  );
};
