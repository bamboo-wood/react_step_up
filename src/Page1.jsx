import { Link, Outlet, useNavigate } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("detailA", { state: arr });
  };

  return (
    <div>
      <h1>Page1</h1>
      <button onClick={handleClick}>DetailA</button>
      <br />
      <Link to="detailB">DetailB</Link>
      <br />
      <Outlet />
    </div>
  );
};
