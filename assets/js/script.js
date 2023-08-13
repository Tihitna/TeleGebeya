window .onload = () => {
    let offcanvasbody = document.getElementById("offcanvasbody");
    let offsidebar = document.getElementById("offsidebar");
    let brand = document.getElementById("brand");
    let hide = document.getElementById("hide");
    let color = document.getElementById("color");
    let hidecolor = document.getElementById("hidecolor");
    let plus = document.getElementById("plus");
    let minus = document.getElementById("minus");
    let filter = document.getElementById("filter");

    brand.addEventListener("click", show);
    color.addEventListener("click", showcolor);
    filter.addEventListener("click", showResponsiveSidebar);
  }

  function showResponsiveSidebar(){
    offcanvasbody.innerHTML = offsidebar.textContent;
  }
  function show(){
    if(plus.classList == "fa-solid fa-plus")
      plus.className = "fa-solid fa-minus";
    else
      plus.className ="fa-solid fa-plus";
    if(hide.classList == "hide")
      hide.classList.remove("hide");
    else
      hide.classList.add("hide");
  }
  function showcolor(){
    if(hidecolor.classList == "hidecolor")
      hidecolor.classList.remove("hidecolor");
    else
      hidecolor.classList.add("hidecolor");
    if(minus.classList == "fa-solid fa-plus")
      minus.className = "fa-solid fa-minus";
    else
      minus.className ="fa-solid fa-plus";
  }