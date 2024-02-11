
/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const nav = document.querySelector('.nav');


/* --------------------------------- 클릭 이벤트 --------------------------------- */

function handleClick(e){
  let target = e.target;
  let index = target.dataset.index;

  while(!index) {
    target = target.parentNode;
    index = target.dataset.index;
  }

}




nav.addEventListener('click', handleClick);

