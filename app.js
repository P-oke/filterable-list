var filterinput = document.getElementById("filteredinput");
//add event listener
filterinput.addEventListener("keypress", (val) => {
  if (val.keyCode === 13) {
    filternames(filterinput.value);
  }
});
function filternames(res) {
  // get value of input
  let filteredvalue = res.toUpperCase();

  // get our names
  let ul = document.getElementById("names");
  let li = ul.querySelectorAll(".collection-content");

  //loop through collections content

  for (let i = 0; i < li.length; i++) {
    let p = li[i].getElementsByTagName("p")[0];
    // if matches values
    if (p.innerHTML.toUpperCase().indexOf(filteredvalue) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
