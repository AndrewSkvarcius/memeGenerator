let img = document.getElementsByTagName("img");
let form = document.querySelector("form");
const button = document.querySelector("button");
let memeLocation = document.querySelector('#location');
let createBtn = document.querySelector('#create_Btn');

//const saveMeme = JSON.parse(localStorage.getItem("memes")) || [];
//for  (let i = 0; i < saveMeme.length; i++)  {
  //let meme = document.createElement('div');
  //meme.innerText = saveMeme[i].funny;
  //memeLocation.appendChild(meme);
//}

form.addEventListener("submit", function(e){
    e.preventDefault();
    const meme = document.createElement("div");
    const textTop= document.createElement("div");
    const textBottom = document.createElement("div");
    const img = document.createElement("img");

    img.src = document.getElementById("imageUrl").value;
    textTop.classList.add("textTop");
    textTop.innerHTML = document.getElementById("topText").value;

    textBottom.classList.add("textBottom");
      textBottom.innerHTML = document.getElementById("bottomText").value;
      

    meme.classList.add("meme");
    meme.append(textTop);
    meme.append(textBottom);
    meme.append(img);
    memeLocation.append(meme);

form.reset()

//saveMeme.push({funny: meme.innerHTML});
//localStorage.setItem("memes", JSON.stringify(saveMeme));
   
    });
    memeLocation.addEventListener("click", function(event) {
       event.target.parentNode.remove();
      
    });
  