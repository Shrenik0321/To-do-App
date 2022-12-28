import { useState, useEffect } from "react";
import run from "../images/athletics (2).png";
import ScaleLoader from "react-spinners/ScaleLoader";

const Loader = () => {
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      window.location.replace("/login");
    }, 3000);
  }, []);

  return (
    <div className="loader">
      <div className="hand-loader animate__animated animate__fadeInUp">
        <img src={run} alt="" />
      </div>
      <h1 className="animate__animated animate__fadeInUp font-bold text-5xl">
        Power Hour
      </h1>
      <div className="load-logo">
        <ScaleLoader
          color={"white"}
          loading={loading}
          height={100}
          width={13}
        />
      </div>
    </div>
  );
};

export default Loader;
