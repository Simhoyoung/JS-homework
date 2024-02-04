const user = {
  id: "abc12@naver.com",
  pw: "asdasd1234@!",
};

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

/* ------------------------------ querySelector ----------------------------- */

const emailField = document.querySelector("#userEmail");
const pwField = document.querySelector("#userPassword");
const submit = document.querySelector(".btn-login");


/* ---------------------------------이메일 정규식--------------------------------- */

function checkUserId() {

  if (emailReg(this.value)) {

    emailField.classList.remove("is--invalid");

  } else {

    emailField.classList.add("is--invalid");
  }
}


/* ----------------------------------비밀번호 정규식 --------------------------------- */

function checkUserPw() {

  if (pwReg(this.value)) {

    pwField.classList.remove("is--invalid");

  } else {

    pwField.classList.add("is--invalid");
  }

}


/* --------------------------------- 페이지 이동 --------------------------------- */

function handleSubmit(){

  if (emailReg(this.value) && pwReg(this.value)){

    window.location.href = "welcome.html"

  }else{

    window

  }

}


/* ------------------------------ eventListener ----------------------------- */

emailField.addEventListener('input' ,checkUserId)

pwField.addEventListener('input' ,checkUserPw)

submit.addEventListener('click' ,handleSubmit)
