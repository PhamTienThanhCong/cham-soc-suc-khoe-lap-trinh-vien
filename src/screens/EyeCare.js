import Nav from "../components/core/Nav";
import Sidebar from "../components/core/Sidebar";
import "../css/style.css";
import { LineChart } from "../components/charts/LineChart";
import { useState } from "react";
import Modal from "../components/core/Modal";

function EyeCare() {
  const [showHowModal, setshowHowModal] = useState(false);
  const [showexerciseModal, setExerciseModal] = useState(false);

  return (
    <>
      <Nav></Nav>
      <div className="main-wrapper">
        <Sidebar></Sidebar>
        <div className="main-graph-wrapper">
          <main className="main">
            <h1 className="mb-xxl">Chăm sóc mắt</h1>
            <div className="line-graph">
              <LineChart> </LineChart>
            </div>
          </main>
          <div className="cards-container">
            <div className="card">
              <p className="fw-bold fs-lg">Làm thế nào nó hoạt động?</p>
              <p className="fs-sm mb-md">Tìm hiểu cách hoạt động của tính năng này</p>
              <button
                className="btn btn-primary"
                onClick={() => setshowHowModal(true)}
              >
              Tìm ra
              </button>
            </div>
            <div className="card">
              <p className="fw-bold fs-lg">bài tập mắt</p>
              <p className="fs-sm mb-md">
              Tìm hiểu một số bài tập mắt để thư giãn mắt.
              </p>
              <button
                className="btn btn-primary"
                onClick={() => setExerciseModal(true)}
              >
              Tìm ra
              </button>
            </div>
          </div>
        </div>
      </div>

      {showHowModal && (
        <Modal>
          <div className="onboarding-name">
            <div
              className="flex flex-justify-between flex-items-center"
              style={{ position: "relative" }}
            >
              <i
                class="fa-solid fa-xmark"
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  fontSize: "1.25rem",
                  cursor: "pointer",
                }}
                onClick={() => setshowHowModal(false)}
              ></i>
              <h2 className="fs-xl" style={{ flexGrow: "1" }}>
                Eye Care
              </h2>
              <img
                src="./assets/cartoon/smileydev.svg"
                style={{ width: "50%" }}
                alt="cartoon character"
              ></img>
            </div>

            <div>
              <div className="flex flex-col flex-wrap fs-sm steps">
                <p className="mb-sm">
                  {" "}
                  <i class="fa-solid fa-eye"></i>Chúng tôi sẽ giúp bạn thư giãn
                  nhìn.{" "}
                </p>
                <p className="mb-sm">
                  <i class="fa-regular fa-clock"></i>Chúng tôi sẽ nhắc nhở bạn cứ sau 20
                  phút
                </p>
                <p className="mb-sm">
                  <i class="fa-solid fa-bell"></i>Bấm vào thông báo và
                  làm bài tập đã cho
                </p>
              </div>
            </div>
            <div className="flex flex-col flex-items-end">
              <button
                style={{ background: "var(--clr-primary-500) " }}
                onClick={() => setshowHowModal(false)}
              >
                Xong
              </button>
            </div>
          </div>
        </Modal>
      )}

      {showexerciseModal && (
        <Modal>
          <div className="onboarding-name">
            <div
              className="flex flex-justify-between flex-items-center"
              style={{ position: "relative" }}
            >
              <i
                class="fa-solid fa-xmark"
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  fontSize: "1.25rem",
                  cursor: "pointer",
                }}
                onClick={() => setExerciseModal(false)}
              ></i>
              <h2 className="fs-xl" style={{ flexGrow: "1" }}>
              Chăm sóc mắt
              </h2>
            </div>
            <img
              src="./assets/exercise.png"
              alt="eye exercise"
              style={{ width: "80%", display: "block", margin: "2rem auto" }}
            ></img>
            <div>
              <div className="flex flex-col flex-wrap fs-sm steps">
                <p className="mb-sm">
                  {" "}
                  Cứ sau 20 phút bạn nhìn vào màn hình, hãy nhìn 20 feet
                   đi trong 20 giây.
                </p>
              </div>
            </div>
            <div className="flex flex-col flex-items-end">
              <button
                style={{ background: "var(--clr-primary-500) " }}
                onClick={() => setExerciseModal(false)}
              >
                Xong
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

export default EyeCare;
