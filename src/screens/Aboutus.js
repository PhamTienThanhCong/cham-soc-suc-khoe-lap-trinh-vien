import Nav from "../components/core/Nav";
import Sidebar from "../components/core/Sidebar";
import "../css/style.css";
import AboutText from "../constants/about.constant";

function AboutUs() {
  return (
    <>
      <Nav></Nav>
      <div className="main-wrapper">
        <Sidebar></Sidebar>
        <div className="main-graph-wrapper">
          <main className="main">
            <h1 clasName="mb-xxl">Chúng tôi</h1>
            <div className="line-graph">
              <p>
                {AboutText.PageHeadingText}
              </p>

              <h2 className="mt-xl mb-md">Sức khỏe của lưng</h2>
              <p style={{ maxWidth: "80ch", lineHeight: "2" }}>
                 {AboutText.BackHealthText}
              </p>

              <h2 className="mt-xl mb-md">Sức khỏe của mắt</h2>
              <p style={{ maxWidth: "80ch", lineHeight: "2" }}>
                 {AboutText.EyeHealthText}
              </p>

              <h2 className="mt-xl mb-md">Sức khỏe của tai</h2>
              <p style={{ maxWidth: "80ch", lineHeight: "2" }}>
                 {AboutText.EarHealthText}
              </p>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
