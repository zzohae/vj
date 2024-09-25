const family = {
  d1text: "FAMILY SITE",
  familysite: [
    {
      atext: "네이버",
      href: "https://www.naver.com"
    },
    {
      atext: "구글",
      href: "https://www.google.com/"
    },
    {
      atext: "다음",
      href: "https://www.daum.net/"
    },
    {
      atext: "GIT",
      href: "https://github.com/zzohae"
    }
  ]
}

window.onload = function(){
  // 화면 로딩이 끝나면 처리
}

window.addEventListener('load', function(){
  this.document.querySelector("#family h2").innerHTML += family.d1text;
  // 특정 태그 안에 태그를 삽입하기
  this.document.querySelector("#family ul").innerHTML = `<li>${family.familysite[0].atext}</li>`;
  this.document.querySelector("#family ul").innerHTML += `<li>${family.familysite[1].atext}</li>`;
  this.document.querySelector("#family ul").innerHTML += `<li>${family.familysite[2].atext}</li>`;
})