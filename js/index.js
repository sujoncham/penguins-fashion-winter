
const pandaHeading = document.querySelector('.panda');
pandaHeading.innerHTML = "Be the panda perguins";


const btnId = document.getElementById('btn-id').addEventListener('click', function(){
    const imgChange = document.getElementById('img-change');
    if(imgChange == true){
        imgChange.src = "images/images/model.png";
    } else {
       
        imgChange.src = "images/images/shopping.png";
        imgChange.style.width = '350';
    }
})

const imageShow = document.getElementById('image-show');
imageShow.style.cursor = "pointer";

imageShow.addEventListener('click', function(){
    const image1 = document.getElementById('image1');
    if(image1 == true){
        image1.src = "images/images/shopping.png";
    } else{
        image1.src = "images/slider/slide1.png";
    }
})


const imageShow1 = document.getElementById('image-show1');
imageShow1.style.cursor = "pointer";

imageShow1.addEventListener('click', function(){
    const image1 = document.getElementById('image1');
    if(image1 == true){
        image1.src = "images/images/shopping.png";
    } else{
        image1.src = "images/slider/slide2.png";
    }
})

const imageShow2 = document.getElementById('image-show2');
imageShow2.style.cursor = "pointer";

imageShow2.addEventListener('click', function(){
    const image1 = document.getElementById('image1');
    if(image1 == true){
        image1.src = "images/images/shopping.png";
    } else{
        image1.src = "images/slider/slide3.png";
    }
})


