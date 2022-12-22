import Nav from "../components/core/Nav";
import Sidebar from "../components/core/Sidebar";
import "../css/style.css";

function Plantime() {
    
  return (
    <>
      <Nav></Nav>
      <div className="main-wrapper">
        <Sidebar></Sidebar>
        <div className="main-graph-wrapper">
          <main className="main">
            <h1 className="mb-xxl">Kế hoạch cho thời gian code</h1>
            <div className="line-graph">
              <img alt="" src="./plantime.png" />
            </div>
          </main>
          <div className="cards-container">
            <div className="card">
              <p className="fw-bold fs-lg">Lời khuyên của chúng tôi</p>
              <p className="fs-sm mb-md">Hãy thực hiện theo kế hoạch chúng tôi đưa ra để bạn có 1 sức khỏe tốt</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Plantime;
