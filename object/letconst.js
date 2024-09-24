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

// console.log(family.familysite[0].atext, family.familysite[0].href)

const mytag = `<a href=${family.familysite[1].href}>${family.familysite[1].atext}</a>`;
console.log(mytag);