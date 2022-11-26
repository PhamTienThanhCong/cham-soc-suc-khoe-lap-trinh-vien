import React from "react";

const OnboardingBackCare = ({ setCard }) => {
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
        <div className="flex flex-col flex-wrap fs-sm steps">
          <p className="mb-sm">
            <i class="fa-solid fa-camera"></i>Chụp ảnh tốt và xấu
            tư thế{" "}
          </p>
          <p className="mb-sm">
            <i class="fa-brands fa-leanpub"></i>Ứng dụng sẽ tìm hiểu sự khác biệt
            giữa họ
          </p>
          <p className="mb-sm">
            <i class="fa-solid fa-bell"></i>Thông báo cho bạn nếu bạn đang ở trong tư thế xấu
          </p>
        </div>
      </div>
      <div className="flex flex-col flex-items-end">
        <button
          style={{ background: "var(--clr-primary-500) " }}
          onClick={() => setCard("backtrain")}
        >
          Tiếp
        </button>
      </div>
    </div>
  );
};

export default OnboardingBackCare;
