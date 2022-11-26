import React from "react";
import { Link } from "react-router-dom";

const OnboardingBackTrain = () => {
  return (
    <div className="onboarding-name">
      <div className="flex flex-justify-between flex-items-center">
        <h2 className="fs-xl" style={{ flexGrow: "1" }}>
          Chăm sóc lưng
        </h2>
        <img
          src="./assets/cartoon/smileydev.svg"
          style={{ width: "50%" }}
        ></img>
      </div>

      <div>
        <div className="flex flex-col flex-wrap fs-md steps">
          <p className="mb-sm">
            <i class="fa-solid fa-chalkboard-user"></i>Hãy dạy ứng dụng của chúng tôi những gì một
            tư thế tốt và tư thế xấu là{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-col flex-items-end">
        <Link to="/teachbackcare">
          <button style={{ background: "var(--clr-primary-500) " }}>
            Tiếp
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OnboardingBackTrain;
