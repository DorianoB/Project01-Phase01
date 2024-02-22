let elem = document.getElementsByClassName("aboutus");
for (var i = 0; i < elem.length; i++) {
  elem[i].addEventListener(
    "click",
    function () {
      alert("click event added");
    },
    false
  );
}
