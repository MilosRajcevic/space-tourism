window.addEventListener("load", () => {
  const techHeader = document.querySelector(".techn__header");
  const techText = document.querySelector(".techn__text");
  const techImg = document.querySelector(".techn__img-box");
  const techSrc = document.querySelector(".techn__img-box");
  const menu = document.querySelectorAll(".num__btn");

  menu.forEach((t, index) => {
    t.addEventListener("click", () => {
      fetchData(index);
      for (let i = 0; i < menu.length; i++) {
        menu[i].classList.remove("num__btn--active");
        console.log("i");
      }
      t.classList.add("num__btn--active");
    });
  });

  async function fetchData(i) {
    await fetch("data.json")
      .then((response) => response.json())
      .then((data) => getData(data.technology[i]));
  }

  function getData(data) {
    techHeader.innerText = data.name; // replace actual text with new text from data.json file
    techText.innerText = data.description;
    techImg.children[0].remove(); // removing actual elemnt
    // console.log(desImage.children[0]);
    techSrc.children[0].remove(); // removing actual elemnt

    //create new source element
    let newSrc = document.createElement("source");
    newSrc.setAttribute("media", "(max-width:68.75em)");
    newSrc.setAttribute("srcset", data.images.landscape);
    newSrc.setAttribute("class", "techn__img");
    techSrc.appendChild(newSrc);

    //create new image element
    let newImg = document.createElement("img");
    newImg.setAttribute("src", data.images.portrait);
    newImg.setAttribute("alt", data.name, "picture");
    newImg.setAttribute("class", "techn__img");

    techImg.appendChild(newImg); //appenChild znaci da dodaje cvor na kraju liste children elemenata u parent elemntu. Ako je child element referenca na postojeci cvor u dokumentu onda se premesta sa njegove trenutne pozicije na novu poziciju!
    // console.log(desImage.appendChild(newImg));
  }
});
