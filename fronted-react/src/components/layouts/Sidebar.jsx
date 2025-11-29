import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      className="bg-secondary border-end text-white"
      style={{
        width: "220px",
        height: "100vh",
        position: "fixed",
        top: "56px",
        left: 0,
        paddingTop: "20px",
      }}
    >
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link text-white" to="/">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/blogs">
            Blogs
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
