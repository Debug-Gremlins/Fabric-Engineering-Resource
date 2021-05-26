import React from "react";
import CustomCount from "../customs/CouterComp";
import { BiShieldAlt } from "react-icons/bi";
import { FiSlack } from "react-icons/fi";
import { ImBook } from "react-icons/im";
function CounterUp() {
  return (
    <div>
      <section className="counter-area">
        <div className="container">
          <div className="row justify-content-center text-center align-items-center">
            <div className="col-lg-3 col-md-4 col-sm-8 single-class">
              <CustomCount
                icons={<BiShieldAlt />}
                title="Secured Development"
                paragraph="Developed by JavaScript framework ReactJS."
              />
            </div>

            <div className="col-lg-3 col-md-4 col-sm-8 single-class">
              <CustomCount
                icons={<ImBook />}
                title="Coursewise Resources"
                paragraph="Online class lectures provided by coursewise segments!"
              />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-8 single-class">
              <CustomCount
                icons={<FiSlack />}
                title="Regular Monitorization"
                paragraph="Keeping resources and pdf stuffs update weekly."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CounterUp;
