window.addEventListener("load", () => {
  const crwRole = document.querySelector(".crew__function");
  const crwName = document.querySelector("#name");
  const crwBio = document.querySelector(".crew__text");
  const crwImage = document.querySelector("#image");
  const crwSrc = document.querySelector("#image");
  const menu = document.querySelectorAll(".dots__btn"); //BITNO JE DA SELEKTUJEMO SVE!!! querySelectorAll

  menu.forEach((b, index) => {
    b.addEventListener("click", () => {
      fetchData(index);
      for (let i = 0; i < menu.length; i++) {
        menu[i].classList.remove("dots__active");
      }
      b.classList.add("dots__active");
    });
  });

  async function fetchData(i) {
    await fetch("data.json")
      .then((response) => response.json())
      .then((data) => getData(data.crew[i]));
  }

  function getData(data) {
    crwRole.innerText = data.role;
    crwName.innerText = data.name;
    crwBio.innerText = data.bio;
    crwImage.children[0].remove(); // removing actual elemnt
    // console.log(crwImage.children[0]);
    crwSrc.children[0].remove(); // removing actual elemnt

    //create new image element
    let newImg = document.createElement("img");
    newImg.setAttribute("src", data.images.png);
    newImg.setAttribute("alt", data.name, "picture");
    newImg.setAttribute("class", "crew__img");
    crwImage.appendChild(newImg); //appenChild znaci da dodaje cvor na kraju liste children elemenata u parent elemntu. Ako je child element referenca na postojeci cvor u dokumentu onda se premesta sa njegove trenutne pozicije na novu poziciju!
    // console.log(crwImage.appendChild(newImg));

    //create new source element
    let newSrc = document.createElement("source");
    newSrc.setAttribute("srcset", data.images.webp);
    newSrc.setAttribute("type", "image/webp");
    newSrc.setAttribute("class", "crew__img");
    crwSrc.appendChild(newSrc);
  }
});
