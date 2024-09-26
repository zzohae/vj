window.addEventListener('load', function(){
  this.document.querySelector("#family h2").
  innerHTML = family.d1text;

  let familylist = '';

  for ( x of family.familysite){
    familylist += `<li><a href="${x.href}" target="_blank">${x.atext}</a></li>`
  }

  this.document.querySelector("#family ul").innerHTML = familylist;

  // family 노출
  this.document.querySelector("#family").
  addEventListener('click', function(){
    this.classList.toggle('open')
  });

});