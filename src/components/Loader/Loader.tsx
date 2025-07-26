import { PulseLoader } from "react-spinners";

const Loader = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PulseLoader size={25} />
    </div>
  );
};

export default Loader;
