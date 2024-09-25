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

let familytag = '';

for ( x of family.familysite ){
  familytag += `<li>${x.atext}</li>`
}

window.addEventListener('load', function(){
  this.document.querySelector("#family h2").innerHTML += family.d1text;
  // 특정 태그 안에 태그를 삽입하기
  this.document.querySelector("#family ul").innerHTML = familytag;
})