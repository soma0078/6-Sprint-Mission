import { loginBtnClickEvent, visibleIconClickEvent } from './loginSignupButtons.js';

const form = document.querySelector('.login-form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const loginBtn = document.querySelector('#login-btn');
const visibleIcon = document.querySelector('.visible-icon');

// 에러 메세지 생성 및 추가
const emailErrMsg = document.createElement('p');
emailErrMsg.classList.add('error-msg');
const passwordErrMsg = document.createElement('p');
passwordErrMsg.classList.add('error-msg');

// 로그인 버튼 초기화
loginBtn.setAttribute('disabled', true);

// 로그인 에러 이벤트 핸들러
function loginErrorEvent() {
  // 이메일 에러 조건
  if (email.value === '') {
    // 이메일 빈 문자열인 경우
    email.classList.add('error');
    emailErrMsg.textContent = '이메일을 입력해주세요.';
    email.after(emailErrMsg);
  } else if (!email.checkValidity()) {
    // 이메일 형식 유효하지 않은 경우
    email.classList.add('error');
    emailErrMsg.textContent = '잘못된 이메일 형식입니다.';
    email.after(emailErrMsg);
  } else {
    email.classList.remove('error');
    emailErrMsg.textContent = '';
  }

  // 비밀번호 에러 조건
  if (password.value === '') {
    // 비밀번호 빈 문자열인 경우
    password.classList.add('error');
    passwordErrMsg.textContent = '비밀번호를 입력해주세요.';
    password.after(passwordErrMsg);
  } else if (password.value.length < 8) {
    // 비밀번호 8자 이하인 경우
    password.classList.add('error');
    passwordErrMsg.textContent = '비밀번호를 8자 이상 입력 해주세요.';
    password.after(passwordErrMsg);
  } else {
    password.classList.remove('error');
    passwordErrMsg.textContent = '';
  }

  // 로그인 버튼 활성화 여부
  if (email.value === '' || !email.checkValidity() || password.value === '' || password.value.length < 8) {
    loginBtn.setAttribute('disabled', true);
  } else {
    loginBtn.removeAttribute('disabled');
    loginBtn.style.backgroundColor = '#3692ff';
  }
}
form.addEventListener('focusout', loginErrorEvent);

// 로그인 버튼 클릭시 items 페이지로 이동
loginBtn.addEventListener('click', loginBtnClickEvent);

// 비밀번호 표시 여부
visibleIcon.addEventListener('click', visibleIconClickEvent);
