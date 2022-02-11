
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

