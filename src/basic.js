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

  const allMenubtn = this.document.querySelector("#hd_allmenu_bby");

  allMenubtn.addEventListener('click', function(){
    document.body.classList.toggle('menuOpen');
  })

  //navi
  for( x in mynavi ){
    this.document.querySelectorAll("#navi > ul > li > a")[x].innerHTML = mynavi[x].title;
    }
  }
  

});