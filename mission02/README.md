# 포스터 이미지 변경


### main.js 코드

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



### 코드 설명 및 코멘트

지난 주 수업내용 회고조원 분들이 정리해놓은 내용 보면서 
작성해 보았지만 동작이 어떻게 이루어지는지 정확히 이해가 안되는 상태입니다! 
(물론 동작도 안됩니다😭)

남은 연휴 기간에도 공부하면서 조금씩 추가해서 완성까지 할 수 있도록 하겠습니다~

즐건 연휴 마무리되십쇼 !