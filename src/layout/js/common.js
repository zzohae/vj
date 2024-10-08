window.addEventListener('load', function(){
  //햄버거버튼
  const allMenubtn = this.document.querySelector("#hd_allmenu_bby");

  allMenubtn.addEventListener('click', function(){
    document.body.classList.toggle('menuOpen');
  })

  this.addEventListener('scroll', scrollTpos);
  function scrollTpos(){
    // console.log("scrolltop: ", this.scrollTop || window.scrollY);
    const pagetop = this.scrollTop || window.scrollY; //웹표준
    const targetscroll = window.innerHeight / 3;
    if( pagetop > targetscroll ){
      document.body.classList.add('scrolldown')
    } else {
      document.body.classList.remove('scrolldown')
    }
  }
});