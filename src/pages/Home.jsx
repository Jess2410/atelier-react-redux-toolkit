import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";

const Home = () => {
  const users = useSelector((state) => state.user);
  console.log("🚀 ~ file: Home.jsx:6 ~ Home ~ users:", users);
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Navbar />
      <div className="welcome-container">
        <h1>Welcome ! </h1>
        <p>The best bank !</p>
      </div>
    </div>
  );
};

export default Home;
