window.addEventListener("load", () => {
  const desName = document.querySelector("#name");
  const desImage = document.querySelector("#image");
  const desSrc = document.querySelector("#image");
  const desDescriptions = document.querySelector("#description");
  const desDistance = document.querySelector("#distance");
  const desTravel = document.querySelector("#travel");
  const menu = document.querySelectorAll(".destination__link");

  menu.forEach((e, index) => {
    e.addEventListener("click", () => {
      fetchData(index);
      for (let i = 0; i < menu.length; i++) {
        menu[i].classList.remove("destination__active");
      }
      e.classList.add("destination__active");
    });
  });

  async function fetchData(i) {
    await fetch("data.json")
      .then((response) => response.json())
      .then((data) => getData(data.destinations[i]));
  }

  function getData(data) {
    desName.innerText = data.name; // replace actual text with new text from data.json file
    desDescriptions.innerText = data.description;
    desDistance.innerText = data.distance;
    desTravel.innerText = data.travel;
    desImage.children[0].remove(); // removing actual elemnt
    // console.log(desImage.children[0]);
    desSrc.children[0].remove(); // removing actual elemnt

    //create new image element
    let newImg = document.createElement("img");
    newImg.setAttribute("src", data.images.png);
    newImg.setAttribute("alt", data.name, "picture");
    newImg.setAttribute("class", "destination__img");
    desImage.appendChild(newImg); //appenChild znaci da dodaje cvor na kraju liste children elemenata u parent elemntu. Ako je child element referenca na postojeci cvor u dokumentu onda se premesta sa njegove trenutne pozicije na novu poziciju!
    // console.log(desImage.appendChild(newImg));

    //create new source element
    let newSrc = document.createElement("source");
    newSrc.setAttribute("srcset", data.images.webp);
    newSrc.setAttribute("type", "image/webp");
    newSrc.setAttribute("class", "destination__img");

    desSrc.appendChild(newSrc);
  }
});
