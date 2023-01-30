let toptextEl
let bottomtextEl
let imageInput
let createBtn
let deleteBtn
let canvas
let ctx


function initialize () {
    toptextEl = document.getElementById('topText');
    bottomtextEl = document.getElementById('bottomText');
    imageInput = document.getElementById('image_input');
    createBtn = document.getElementById('create_Btn');
    deleteBtn = document.getElementById('delete_btn');
    canvas = document.getElementById('meme_canvas');

    ctx = canvas.getContext('2d');

    canvas.width = canvas.height = 0;

    const saveMeme = JSON.parse(localStorage.getItem("memes")) || [];
  for  (let i = 0; i < saveMeme.length; i++)  {
     newMeme = document.createElement('li');
    newMeme.innerHTML = saveMeme[i].meme_canvas;
    newMeme.isCompleted = saveMeme[i].isCompleted ? true : false;
    if (newMeme.isCompleted) {
    
   container.appendChild(newMeme);
  } };         

    createBtn.addEventListener('click', function (evt){
        evt.preventDefault();
        let reader = new FileReader();
        reader.onload = function () {
            let meme = document.createElement('img');
            meme.src = reader.result;
            createMeme (meme, toptextEl.value, bottomtextEl.value);
        };
 
        reader.readAsDataURL(imageInput.files[0]);
        
    });
    deleteBtn.addEventListener('click', function (){
        toptextEl.value = "";
        bottomtextEl.value = "";
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    },true);

};


function createMeme (image, topText, bottomText) {
    canvas. width = image.width;
    canvas. height = image.height;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 0, 0);

    let fontSize = canvas.width / 5;
    ctx.font = fontSize + 'px Impact';
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = fontSize / 20;
    ctx.textAlign = 'center';
    ctx.lineJoin = 'round';

    ctx.textBaseline = "top";
ctx.fillText(topText, canvas.width / 2, 0, canvas.width);
ctx.strokeText(topText, canvas.width /2, 0, canvas.width);

ctx.textBaseline = "bottom";
ctx.fillText(bottomText, canvas.width / 2, canvas.height, canvas.width);
ctx.strokeText(bottomText, canvas.width /2, canvas.height, canvas.width);

localStorage.setItem(canvas, JSON.stringify(image, topText, bottomText)
};
initialize(); 

