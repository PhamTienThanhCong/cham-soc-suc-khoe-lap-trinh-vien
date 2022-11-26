import React from "react";

const OnboardingHow = ({ setCard }) => {
  return (
    <div className="onboarding-name">
      <div className="flex flex-justify-between flex-items-center">
        <h2 className="fs-xl" style={{ flexGrow: "1" }}>
          How?
        </h2>
        <img
          src="./assets/cartoon/smileydev.svg"
          style={{ width: "50%" }}
        ></img>
      </div>

      <div>
        <div className="flex flex-col flex-wrap fs-sm steps">
          <p className="mb-sm">
            <i class="fa-regular fa-circle-check"></i>Phát hiện tư thế của bạn và
            thông báo
          </p>
          <p className="mb-sm">
            <i class="fa-regular fa-clock"></i> Nhắc nhở cho một bài tập
          </p>
          <p className="mb-sm">
            <i class="fa-solid fa-chart-line"></i> Phân tích thói quen của bạn
          </p>
        </div>
      </div>
      <div className="flex flex-col flex-items-end">
        <button
          style={{ background: "var(--clr-primary-500) " }}
          onClick={() => setCard("notifs")}
        >
          Tiếp
        </button>
      </div>
    </div>
  );
};

export default OnboardingHow;
