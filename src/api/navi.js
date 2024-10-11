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
    faqtag += `<dt class=" py-4 border-bottom user-select-none d-flex justify-content-between"> <span>${x.faqQ}</span> <i class="bi bi-chevron-down"></i></dt>
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
  //사전인터뷰 dt들 저장
  //다수.forEach(function(element, index){})

    faqdts.forEach((el, idx) => {
      el.addEventListener('click',function(){
        faqdts.forEach(function(sibling){
          if( sibling == el ){
            sibling.classList.toggle('expand');
          }else{
            sibling.classList.remove('expand');
          }
        });
      })
    })
});