import React from "react";
import "./info.css";

const Info = () => {
  return (
    <section className="section-three">
      <div className="section-div-one">
        <img
          src="https://cdn.devdojo.com/images/december2020/productivity.png"
          alt="myhero"
          style={{ maxWidth: "280px", width: "100%" }}
        />
        <div className="myhero-desc">
          <h4 style={{fontSize:"2rem",fontWeight:"normal",letterSpacing:"2px",paddingBottom:"1rem"}}>Boost Productivity</h4>
          <h5 style={{fontSize:"1rem",letterSpacing:"1.5px",color:"grey",fontWeight:"300",paddingBottom:"1rem"}}>
            Build an atmosphere that creates productivity in organization and
            your company culture.
          </h5>
          <ul>
            <li>
              <span>
                <i class="fas fa-circle "></i>
              </span>
              Maximaize productivity and growth
            </li>

            <li>
              {" "}
              <span>
                <i class="fas fa-circle "></i>
              </span>
              Speed past your competition
            </li>

            <li>
              {" "}
              <span>
                <i class="fas fa-circle "></i>
              </span>
              Learn the top techniques
            </li>
          </ul>
        </div>
      </div>
      <div className="section-div-one">
        <div className="myhero-desc">
          <h4 style={{fontSize:"2rem",fontWeight:"normal",letterSpacing:"2px",paddingBottom:"1rem"}}>Automated Tasks</h4>
          <h5 style={{fontSize:"1rem",letterSpacing:"1.5px",color:"grey",fontWeight:"300",paddingBottom:"1rem"}}>
            save time and money with our revolutionary services. we are the
            leaders in the industry.{" "}
          </h5>
          <ul>
            <li>
              {" "}
              <span>
                <i class="fas fa-circle "></i>
              </span>
              Maximaize productivity and growth
            </li>

            <li>
              {" "}
              <span>
                <i class="fas fa-circle "></i>
              </span>
              Speed past your competition
            </li>

            <li>
              {" "}
              <span>
                <i class="fas fa-circle "></i>
              </span>
              Learn the top techniques
            </li>
          </ul>
        </div>

        <img
          src="https://cdn.devdojo.com/images/december2020/settings.png"
          alt=""
          style={{ maxWidth: "280px", width: "100%" }}
        />
      </div>
    </section>
  );
};

export default Info;
