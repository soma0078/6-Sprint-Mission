import logo from '../../assets/images/logo/logo.svg';
import googleIcon from '../../assets/images/icons/icon_google.svg';
import kakaoIcon from '../../assets/images/icons/icon_kakao.svg';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className="max-w-[640px] m-auto md:px-14 px-4">
      <img src={logo} alt="로고" className="md:w-96 w-48 m-auto mb-14" />
      <form className="flex flex-col gap-y-6">
        <label className="font-bold">
          이메일
          <input type="email" className="input" />
        </label>
        <label className="font-bold">
          비밀번호
          <input type="password" className="input" />
        </label>
        <input type="submit" value="로그인" className="btn" />
      </form>
      <div className="flex justify-between items-center bg-[#E6F2FF] inner-p my-6 rounded">
        <p className="font-medium">간편 로그인하기</p>
        <div className="flex gap-2.5">
          <Link to="/" aria-label="구글로 간편 로그인하기">
            <img src={googleIcon} alt="구글 아이콘" />
          </Link>
          <Link to="/" aria-label="카카오톡으로 간편 로그인하기">
            <img src={kakaoIcon} alt="카카오 아이콘" />
          </Link>
        </div>
      </div>
      <p className="text-center">
        판다마켓이 처음이신가요?
        <Link to="/signup" className="text-primary-100 border-b">
          회원가입
        </Link>
      </p>
    </div>
  );
}

export default LoginPage;
