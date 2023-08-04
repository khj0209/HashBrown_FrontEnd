// 첫 번째 페이지 컴포넌트
import react from react;

const FirstPage = () => {
    return (
      <div className="container" style={{backgroundImage: "url(https://www.hana.hs.kr/assets/images/intro/school_11.jpg)"}}>
        <div className="buttons">
          <Link to="/register" className="button">
            등록
          </Link>
          <Link to="/receive" className="button">
            수령
          </Link>
        </div>
      </div>
    );
  };
  
  export default FirstPage;