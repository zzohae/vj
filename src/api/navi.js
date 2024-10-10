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


   //faq
  let faqtag = "";
  const faqtarget = this.document.querySelector("#faqcontent .content");

  faqtag += `<dl class="container py-5">`;
  for( x of faqcontent ){
    faqtag += `<dt class=" py-4 border-bottom user-select-none">${x.faqQ}</dt>
                  <dd class="py-4 d-none user-select-none">`;
                  const faqcontentArr = x.faqA.split("|");
                  for ( j of faqcontentArr ){
                    faqtag += `<span class="d-block">${j}</span>`;
                  }
    faqtag += `</dd>`;
  }
  faqtag += `</dl>`;
  
  faqtarget.innerHTML = faqtag;

  // 동적객체 = 이벤트에 저장하는 식 불가
  const faqdts = document.querySelectorAll("#faqcontent .content dl dt");

    faqdts.forEach(function(el) {
        el.addEventListener('click', function() {
            if (this.classList.contains('expand')) {
                this.classList.remove('expand');
            } else {
                faqdts.forEach(item => item.classList.remove('expand'));
                this.classList.add('expand');
            }
        });
    });
});