import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { updateViewedPages } from "../features/user/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigateAndCountPages = (newPath) => {
    navigate(newPath);
    dispatch(updateViewedPages());
  };
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link onClick={() => navigateAndCountPages("/")}>Home</Link>
        </li>
        <li>
          <Link onClick={() => navigateAndCountPages("/signin")}>Sign In</Link>
        </li>
        <li>
          <Link onClick={() => navigateAndCountPages("/login")}>Login</Link>
        </li>
        <li>
          <Link onClick={() => navigateAndCountPages("/users")}>Users</Link>
        </li>
        <li>
          <Link onClick={() => navigateAndCountPages("/count")}>Count</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
