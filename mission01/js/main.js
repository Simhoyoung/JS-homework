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
const errMessage = document.querySelector("#userEmailError");




/* ---------------------------------이메일 정규식--------------------------------- */

function checkUserEmail(value){
  return emailReg.test(value);
}


// function checkUserId() {

//   if (emailField === user.id) {

//     idField.classList.aad("is--invalid");

//   } else if (emailField === null || emailField === '') {

//     idField.classList.remove("is--invalid");
//   }
// }


/* ----------------------------------비밀번호 정규식 --------------------------------- */

function checkUserPw(){
  return pwReg.test(value);
}


// function checkUserPw() {

//   if (pwField === user.pw) {

//     pwField.classList.aad("is--invalid");

//   } else if (pwField === null || pwField === ''){

//     pwField.classList.remove("is--invalid");
//   }
// }


/* --------------------------------- 페이지 이동 --------------------------------- */

function welcome() {

  if (emailField === user.id && pwField === user.pw){
    window.location.href = 'welcome.html'
  }
  else{

  } 

}


function handleSubmit(){

  
}


/* ------------------------------ eventListener ----------------------------- */

emailField.addEventListener('input' ,checkUserId())

pwField.addEventListener('input' ,checkUserPw())

submit.addEventListener('click' ,)
