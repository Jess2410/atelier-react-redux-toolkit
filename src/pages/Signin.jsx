import Navbar from "../components/Navbar";
import FormSignIn from "../components/FormSignIn";

const Signin = () => {
  return (
    <>
      <div style={{ height: "100vh", width: "100vw" }}>
        <Navbar />
        <FormSignIn />
      </div>
    </>
  );
};

export default Signin;
