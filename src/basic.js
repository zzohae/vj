window.addEventListener('load', function(){
  this.document.querySelector("#family h2").
  innerHTML = family.d1text;

  const mylist = this.document.querySelectorAll("#family li");
  
  console.log(mylist, typeof mylist, Array.isArray(mylist) );

  for ( x in family.familysite ){
    mylist[x].innerHTML = family.familysite[x].atext;
  }
})