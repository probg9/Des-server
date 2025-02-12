import { NavLink } from "react-router-dom";

export const Gohome = () => {
  return (
    <>
      <section id="error-page">
        <div style={{ position: "relative", top: "15em" }}>
          <div className=" content" style={{ color: "black" }}>
            <h1>Welcome to PhysioCare</h1>
            <br />
            <br />

            <div className="btns">
              <NavLink to="/">Go to Home</NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
