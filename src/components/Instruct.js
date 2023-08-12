import React from "react";
import { useNavigate } from "react-router-dom";
import "./Style.css";


const Instruct = () => {
  const navigate = useNavigate();
  const loginUser = async (e) => {
    e.preventDefault();

    {
      navigate("/Login");
    }
  };
  const registerUser = async (e) => {
    e.preventDefault();

    {
      navigate("/");
    }
  };

  return (
    <>
      <div className="container" style={{overflow:"hidden", backgroundRepeat:"no-repeat"}}>
        <div className="design">
          <p data-text="ESTATERY">Estatery</p>
          <div className="heading" style={{ marginTop: "-6%" }}>
            <h2>BUY </h2>
            <p
              style={{
                marginTop: "-3%",
                marginRight: "6%",
                color: "#001440",
                alignItems: "end",
                textAlign: "end",
                fontSize: "5rem",
              }}
            >
              NOW
            </p>
            <h5>1/2/3 BHK</h5>

            <h5>VILLA</h5>
            <h5>BUNGLOW</h5>
          </div>
          <div className="play" style={{ marginTop: "-28%" }}>
            <button
              style={{ fontSize: 28 }}
              type="button"
              class="btn btn-primary"
              onClick={loginUser}
            >
              Login/Register{" "}
            </button>
            
            <button
              style={{ fontSize: 28, marginTop: "9%" }}
              type="button"
              class="btn btn-primary"
              onClick={registerUser}
            >
            
              Job Search{" "}
            </button>
            
          </div>
          
        </div>
        
        
      </div>
    </>
  );
};

export default Instruct;
