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
familytag += `<h2>${family.d1text}</h2><ul>`;

for ( x of family.familysite ){
  familytag += `<li>${x.atext}</li>`
}
familytag +='</ul>';

window.addEventListener('load', function(){
  this.document.querySelector("#family").innerHTML = familytag;
})