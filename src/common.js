window.addEventListener('load', function(){
  //햄버거버튼
  const allMenubtn = this.document.querySelector("#hd_allmenu_bby");

  allMenubtn.addEventListener('click', function(){
    document.body.classList.toggle('menuOpen');
  })

});