import Nav from "../components/core/Nav";
import Sidebar from "../components/core/Sidebar";
import { Link } from "react-router-dom";
import "../css/style.css";

function HowtoUse() {
  return (
    <>
      <Nav></Nav>
      <div className="main-wrapper">
        <Sidebar></Sidebar>
        <div className="main-graph-wrapper">
          <main className="main">
            <h1 clasName="mb-xxl">How to use?</h1>
            <div className="line-graph">
              <p>
              Dev care sẽ giúp bạn chăm sóc sức khỏe của mình như
              nhà phát triển.
              </p>

              <h2 className="mt-xl mb-md">Back care</h2>
              <div style={{ maxWidth: "80ch", lineHeight: "2" }}>
                <ol>
                  <li>
                  Dạy cho ứng dụng thế nào là một tư thế tốt và xấu{" "}
                    <Link
                      to="/teachbackcare"
                      style={{
                        color: "var(--clr-primary-400)",
                        fontSize: "1.1rem",
                        borderBottom: "1px solid var(--clr-primary-400)",
                        marginLeft: "0.25rem",
                      }}
                    >
                      Đây
                    </Link>
                  </li>
                  <li>Bấm vào ít nhất 5 bức ảnh ở tư thế tốt và xấu là</li>
                  <li>
                  Kiểm tra khả năng phát hiện tư thế, nhấp vào nhiều ảnh hơn để biết thêm
                  kết quả chính xác
                  </li>
                  <li>Trở về nhà và bắt đầu hẹn giờ</li>
                  <li>
                  Cứ sau 20 phút, ứng dụng sẽ kiểm tra tư thế của bạn và sẽ
                  nhắc nhở bạn nếu nó không chính xác
                  </li>
                </ol>
              </div>

              <h2 className="mt-xl mb-md">Eye care</h2>
              <p style={{ maxWidth: "80ch", lineHeight: "2" }}>
                <ol>
                  <li>Bắt đầu hẹn giờ</li>
                  <li>
                  Cứ sau 20 phút, ứng dụng sẽ nhắc bạn thực hiện một bài tập
                  </li>
                  <li>Bấm vào thông báo</li>
                  <li>
                  Ứng dụng sẽ điều hướng bạn đến một trang bài tập. Nhấp vào Xong khi bạn hoàn thành bài tập
                  </li>
                  <li>
                  Bài tập là nhìn xa 20 feet trong 20 giây cứ sau 20
                  phút để thư giãn đôi mắt của chúng tôi.
                  </li>
                </ol>
              </p>

              <h2 className="mt-xl mb-md">Ear care</h2>
              <p style={{ maxWidth: "80ch", lineHeight: "2", marginBottom: "5rem" }}>
                <ol>
                  <li>Nhấp vào nút chuyển đổi Chăm sóc tai trên bảng điều khiển</li>
                  <li>Cho phép tai nghe</li>
                  <li>
                  Bây giờ sau 40 phút, ứng dụng sẽ nhắc bạn rằng bạn đang
                  đạt đến giới hạn thời gian sử dụng tai nghe hàng ngày
                  </li>
                  <li>
                  Nên sử dụng tai nghe tối đa 60 phút một lần
                  ngày ở mức tối đa 60% âm lượng
                  </li>
                </ol>
              </p>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default HowtoUse;
