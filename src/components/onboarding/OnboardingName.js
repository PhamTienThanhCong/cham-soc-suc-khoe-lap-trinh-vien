import { useState } from "react";

const OnboardingName = ({ setCard }) => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  const inputHandler = (e) => {
    localStorage.setItem("name", e.target.value);
    setName(e.target.value);
    setError(false);
  };

  const clickHandler = (e) => {
    e.preventDefault();
    if (name.length > 1) {
      setCard("features");
    } else {
      setError(true);
    }
  };

  return (
    <div className="onboarding-name">
      <div className="flex flex-justify-between flex-items-center">
        <h2 className="fs-xl" style={{ flexGrow: "1" }}>
          Xin chào!
        </h2>
        <img
        alt=""
          src="./assets/cartoon/smileydev.svg"
          style={{ width: "50%" }}
        ></img>
      </div>
      <form name="name" data-netlify="true">
      <div>
        <p className="mt-sm">Tôi có thể gọi bạn là gì nhỉ?</p>
        
        <input
          className="mt-md mb-md"
          type="text"
          placeholder="your name"
          onChange={inputHandler}
          value={name}
        ></input>
        {error && <p className="txt-red">Xin hãy nhập tên của bạn</p>}
      </div>

      <div className="flex flex-col flex-items-end">
        <button
          type="submit"
          style={{ background: "var(--clr-primary-500) " }}
          onClick={clickHandler}
        >
          Tiếp
        </button>
      </div>
      </form>
    </div>
  );
};

export default OnboardingName;
