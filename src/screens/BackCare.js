import Nav from "../components/core/Nav";
import Sidebar from "../components/core/Sidebar";
import PieChart from "../components/charts/PieChart";
import "../css/style.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Modal from "../components/core/Modal";

function BackCare() {
  const [showModal, setShowModal] = useState();

  return (
    <>
      <Nav></Nav>
      <div className="main-wrapper">
        <Sidebar></Sidebar>
        <div className="main-graph-wrapper">
          <main className="main">
            <h1>Chăm sóc lưng</h1>
            <div className="graph">
              <PieChart></PieChart>
            </div>
          </main>
          <div className="cards-container">
            <div className="card">
              <p className="fw-bold fs-lg">Làm thế nào nó hoạt động?</p>
              <p className="fs-sm mb-md">Tìm hiểu cách hoạt động của tính năng này</p>
              <button
                className="btn btn-primary"
                onClick={() => setShowModal(true)}
              >
                Tìm ra
              </button>
            </div>
            <div className="card">
              <p className="fw-bold fs-lg">Chụp ảnh mới</p>
              <p className="fs-sm mb-md">
              Sẽ giúp ứng dụng xác định xem bạn có đang ngồi trong
              đúng tư thế hay không
              </p>
              <Link to="/teachbackcare">
                <button className="btn btn-primary" style={{ width: "100%" }}>
                Chụp ảnh
                </button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
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
                onClick={() => setShowModal(false)}
              ></i>
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
                  <i class="fa-solid fa-camera"></i>Chụp những bức ảnh đẹp và
                  tư thế xấu{" "}
                </p>
                <p className="mb-sm">
                  <i class="fa-brands fa-leanpub"></i>Ứng dụng sẽ học
                  sự khác biệt giữa chúng
                </p>
                <p className="mb-sm">
                  <i class="fa-solid fa-bell"></i>Thông báo cho bạn nếu bạn đang ở trong tình trạng xấu
                  tư thế
                </p>
              </div>
            </div>
            <div className="flex flex-col flex-items-end">
              <button
                style={{ background: "var(--clr-primary-500) " }}
                onClick={() => setShowModal(false)}
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

export default BackCare;
