import Nav from "../components/core/Nav";
import Sidebar from "../components/core/Sidebar";
import "../css/style.css";
import { BarChart } from "../components/charts/BarChart";
import { useState } from "react";
import Modal from "../components/core/Modal";

function EarCare() {
  const [showHowModal, setshowHowModal] = useState(false);
  const [showexerciseModal, setExerciseModal] = useState(false);

  return (
    <>
      <Nav></Nav>
      <div className="main-wrapper">
        <Sidebar></Sidebar>
        <div className="main-graph-wrapper">
          <main className="main">
            <h1 className="mb-xxl">chăm sóc tai</h1>
            <div className="line-graph">
              <BarChart />
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
              <p className="fw-bold fs-lg">bài tập tai</p>
              <p className="fs-sm mb-md">
              Biết cách chăm sóc đôi tai của bạn.
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
              chăm sóc tai
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
                  <i class="fa-solid fa-ear-listen"></i>Nên sử dụng
                  tai nghe tối đa 60 phút mỗi ngày.{" "}
                </p>
                <p className="mb-sm">
                  <i class="fa-solid fa-bell"></i>Chúng tôi sẽ nhắc bạn khi bạn
                  đạt đến giới hạn thời gian.
                </p>
                <p className="mb-sm">
                  <i class="fa-solid fa-chart-line"></i>Chúng tôi sẽ hình dung của bạn
                  thời gian sử dụng tai nghe qua biểu đồ
                </p>
                {/* <p className='mb-sm'>This will help your eyes to relax.</p> */}
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
                Chăm sóc tai
              </h2>
              <img
                src="./assets/cartoon/smileydev.svg"
                style={{ width: "50%" }}
                alt="cartoon character"
              ></img>
            </div>

            <div>
              <div className="flex flex-col flex-wrap fs-sm steps">
                <p className="mb-sm"> Thực hiện theo quy tắc 60-60. </p>
                <p className="mb-sm">
                  <i class="fa-solid fa-clock"></i>Sử dụng tai nghe tối đa trong 60
                  phút mỗi ngày.
                </p>
                <p className="mb-sm">
                  <i class="fa-solid fa-volume-high"></i>Giữ âm lượng 60%
                  tối đa.
                </p>
                {/* <p className='mb-sm'>This will help your eyes to relax.</p> */}
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

export default EarCare;
