window.addEventListener('load', function(){
  this.document.querySelector("#family h2").
  innerHTML = family.d1text;

  let familylist = '';

  for ( x of family.familysite){
    familylist += `<li><a href="${x.href}" target="_blank">${x.atext}</a></li>`
  }

  this.document.querySelector("#family ul").innerHTML = familylist;

  // family 노출
  this.document.querySelector("#family h2").
  addEventListener('click', function(){
    this.parentNode.classList.toggle('open')
  });

  //navi
  let navitag = ""; //값변경 가능한 변수를 선언
  const navitarget = this.document.querySelector("#navi > ul");

  for( x of mynavi ){
    navitag += `<li class="position-relative">
                <a href="${x.link}" class="d-block px-lg-5">${x.title}</a>
                <div class="position-absolute">
                  <ul>`;
                    for ( i of x.submenus ){
                      navitag += `<li><a href="${i.link}">${i.title}</a></li>`
                    }
    navitag += `</ul>
                </div>
              </li>`
  }
  navitarget.innerHTML = navitag;

});