window.addEventListener('load', function(){
  this.document.querySelector("#family h2").
  innerHTML = family.d1text;

  let familylist = '';

  for ( x of family.familysite){
    familylist += `<li>${x.atext}</li>`
  }
  
  this.document.querySelector("#family ul").innerHTML = familylist;
})