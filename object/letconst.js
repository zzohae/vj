const family = {
  d1text: "FAMILY SITE",
  familysite: [
    "네이버", "구글", "다음", "유튜브"
  ]
}

for(let x in family.familysite){
  // index
  console.log(x)
  // console.log(family.familysite[x])
}

for(let x of family.familysite){
  // value
  console.log( x )
}