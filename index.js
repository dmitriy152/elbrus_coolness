if (document.querySelector(".slider_block")){
  let sliderBlock = document.querySelector(".slider_block")
  let swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides:false,
    loop: false,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      stopOnLastSlide: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
      snapOnRelease: true,
      dragSize: 'auto',
  },
    keyboard: {
      enabled: true,
    }, 
  });
  setInterval(() => {
    swiper.slideNext();
  }, 6000);
}
if (document.querySelector(".gamburger_block")){
  let gamburgerBlock = document.querySelector(".gamburger_block")
  let buttonPopup = document.querySelector(".button_popup")
  let lineConteiner = document.querySelector(".line_conteiner")
  let crossConteiner = document.querySelector(".cross_conteiner")
  buttonPopup.addEventListener("click", function(){
    gamburgerBlock.classList.toggle("display_flex")
    lineConteiner.classList.toggle("display_none")
    crossConteiner.classList.toggle("display_flex")
  })
  let buttonCallMe = document.querySelector(".call_me")
  let callMeForm = document.querySelector(".form_call_me")
  buttonCallMe.addEventListener("click", function(){
    callMeForm.classList.toggle("display_flex")
    crossConteiner.classList.toggle("display_none")
  })
  buttonCrossForm = document.querySelector(".cross_form")
  buttonCrossForm.addEventListener("click", function(event){
    event.preventDefault();
    callMeForm.classList.toggle("display_flex")
    crossConteiner.classList.toggle("display_none")
  })
}
if (document.querySelector(".carousel")){
  const quoteCarousel = new Carousel(document.querySelector("#quoteCarousel"), {
    infinite: false,
    Dots: false,
    friction: 0.88,
    slidesPerPage: 1,
  });
}
if(document.querySelector(".carousel")){
  const rage = document.querySelector(".rage")
  const sliderCounter =document.querySelector(".counter_slider")
  const prevButton = document.querySelector(".is-prev")
  const nextButton = document.querySelector(".is-next")
  const slideConteiner = document.querySelectorAll(".carousel__slide")
  for (let i = 0; i< slideConteiner.length; i++){
    nextButton.addEventListener("click", function(){
      if(slideConteiner[i].classList.contains("is-selected")){
        let resultCounter = slideConteiner[i].dataset.index
        sliderCounter.innerHTML = Number(resultCounter) + 2
        rage.style.width = (Number(sliderCounter.textContent)*25) + "%"
      }
    })
    prevButton.addEventListener("click", function(){
      if(slideConteiner[i].classList.contains("is-selected")){
        let resultCounter = slideConteiner[i].dataset.index
        sliderCounter.innerHTML = Number(resultCounter) 
        rage.style.width = (Number(sliderCounter.textContent)*25) + "%"
      }
    })
  }
}

  