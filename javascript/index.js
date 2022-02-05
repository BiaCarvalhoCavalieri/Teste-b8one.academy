
// SLICK - CAROUSEL
$('.others-products-list').slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 6,
  infinite: true,
});

$('.others-departments').slick({
infinite: true,
speed: 300,
slidesToShow: 1,
adaptiveHeight: true
});

// CARD ITEMS
(() => {
  const removeButton = document.querySelector(".remove-item-card");
  const addButton = document.querySelector(".add-item-card");
  const counterValueInput = document.querySelector(".counter-card-items");
  let counterCurrentValue = counterValueInput.innerHTML

  function removeButtonHandler(){
    Number(counterCurrentValue)
    counterCurrentValue--
    if(counterCurrentValue >=0){
      counterValueInput.innerHTML = counterCurrentValue
    } else {
      alert('Quantidade do item não pode ser menor que 1')
    }
  }function addButtonHandler(){
    counterCurrentValue = +counterValueInput.innerHTML
    counterCurrentValue++
    counterValueInput.innerHTML = counterCurrentValue
  }
  
  removeButton.addEventListener("click", removeButtonHandler)
  addButton.addEventListener("click", addButtonHandler)
}) ()

// CHANGE - IMG-main-product
const listBtnColors = document.querySelectorAll('.list-colors button')
const imgProduct = document.getElementById('change-img-by-color')
const colorName = document.querySelector('.color-name')
listBtnColors.forEach(function (btnColor) {
  btnColor.addEventListener('click', function () {
    selectingImg(btnColor)
  })
})

function selectingImg(btnColor) {
  const imgName = `notebook-ref-000000-${btnColor.id.toLowerCase()}.jpg`
  imgProduct.src = `./assets/images/${imgName}`
  changeColorSelected(btnColor)
  colorName.textContent = btnColor.id.toUpperCase()
  
  
}

//SELECTING BUTTONS - Color and size of product

function changeColorSelected(color) {
  const buttonsColors = document.querySelectorAll('.list-colors button')
  buttonsColors.forEach(function (btnColor) {
    if (btnColor.classList.contains('selected')) {
      btnColor.classList.remove('selected')
    }
  })

   color.classList.add('selected')
   //ZOOM
   $('#product-img-container').zoom();
}

function changeSizeSelectedColorByClick(size) {
  const buttonsSizes = document.querySelectorAll('.product-sizes button')
  buttonsSizes.forEach(function (btnSize) {
    if (btnSize.classList.contains('selectButton')) {
      btnSize.classList.remove('selectButton')
    }
  })

  size.classList.add('selectButton')
}


//ZOOM
$(document).ready(function(){
  $('#product-img-container').zoom();
});
