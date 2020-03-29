const MENU = document.querySelectorAll(".nav__link");
const SLIDER = document.querySelector(".slider");
const TABE = document.querySelectorAll(".btn");


// active nav link
MENU.forEach(e => {
  e.addEventListener("click", () => {
    MENU.forEach(el => {
      el.classList.remove("nav__link-active");
      document.getElementById('sidebar').classList.toggle('active');
      document.getElementById('header__logo').classList.toggle('active');
      burger.classList.toggle('active');
    });
    e.classList.add("nav__link-active");
  });
});

for (let anchor of MENU) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}

// ----------------scroll

document.addEventListener('scroll' , onscroll);

  function onscroll1(event) {
    const curPos = window.scrollY;
    const divs = document.querySelectorAll('#body>div');
    const links1 =  document.querySelectorAll('#nav1 a');

    divs.forEach((el) => {
      if (el.offsetTop <= curPos && (el.offsetTop + el.offsetHeight) > curPos) {
        links1.forEach((a) => {
          a.classList.remove('active');
          if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
            a.classList.add('active');
          }
        })
      }
    });
  }

// -------------fixed header
window.onscroll = function showHeader() {
  var header = document.querySelector(".header");

  if (window.pageYOffset > 300) {
    header.classList.add("header-fixed");
  } else {
    header.classList.remove("header-fixed");
  }
};
// phone black
let verticalPhone = document.querySelector(".iphone_vert > img");
let verticalVision = true;

verticalPhone.addEventListener("click", function() {
  if (verticalVision) {
    verticalPhone.src = "assets/phone-vertical-black.png";
    verticalVision = false;
  } else {
    verticalPhone.src = "assets/iphone_vertical.png";
    verticalVision = true;
  }
});

let horizontalPhone = document.querySelector(".iphone_goriz > img");
let horizontalVision = true;

horizontalPhone.addEventListener("click", function() {
  if (horizontalVision) {
    horizontalPhone.src = "assets/phone-horizontal-black.png";
    horizontalVision = false;
  } else {
    horizontalPhone.src = "assets/iPhone_Horizontal.png";
    horizontalVision = true;
  }
});



// active portfolio

TABE.forEach(e => {
  e.addEventListener("click", () => {
    TABE.forEach(el => {
      el.classList.remove("btn-active");
    });
    e.classList.add("btn-active");
  });
});

// active picture

let arr = document.querySelectorAll(".portfolio__picture__item");

arr.forEach(el => {
  el.addEventListener("click", function() {
    arr.forEach(el => {
      el.classList.remove("portfolio__picture__item-active");
    });
    el.classList.add("portfolio__picture__item-active");
  });
});

// not active

document.body.addEventListener("click", function(event) {
  let target = event.target;
  if (!target.classList.contains("img11")) {
    arr.forEach(el => {
      el.classList.remove("portfolio__picture__item-active");
    });
  }
});

// slider

let slideIndex = 1,
  slides = document.querySelectorAll(".slider__item"),
  prev = document.querySelector(".arrow__prev"),
  next = document.querySelector(".arrow__next");

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  slides.forEach(item => {
    item.style.display = "none";
  });

  slides[slideIndex - 1].style.display = "flex";
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}

prev.addEventListener("click", function() {
  plusSlides(-1);
  SLIDER.classList.toggle("slider-blue");
});

next.addEventListener("click", function() {
  plusSlides(1);
  SLIDER.classList.toggle("slider-blue");
});

showSlides(slideIndex);

// --------------------------------------- TAB

let info = document.querySelector(".portfolio__list"),
  tabContent = document.querySelectorAll(".portfolio__picture"),
  portfolioMenu = document.querySelectorAll(".btn");

function hideTabContent(a) {
  for (let i = a; i < tabContent.length; i++) {
    tabContent[i].classList.remove("show");
    tabContent[i].classList.add("hide");
  }
}

hideTabContent(1);

function showTabContent(b) {
  if (tabContent[b].classList.contains("hide")) {
    tabContent[b].classList.remove("hide");
    tabContent[b].classList.add("show");
  }
}

info.addEventListener("click", function(event) {
  event.preventDefault();
  let target = event.target;

  if (target && target.classList.contains("btn")) {
    for (let i = 0; i < portfolioMenu.length; i++) {
      if (target == portfolioMenu[i]) {
        hideTabContent(0);
        showTabContent(i);
      }
    }
  }
});

// --------------------Modal

// const BUTTON = document.getElementById('btn2');
// const CLOSE_BUTTON = document.getElementById ('close-btn');


// BUTTON.addEventListener('click', () => {
//   const subject = document.getElementById('subject').value.toString();
//   document.getElementById('result1').innerText = subject;
//   document.getElementById('message-block').classList.remove('hidden');
// });

// CLOSE_BUTTON.addEventListener('click', () => {
//   document.getElementById('result1').innerText = ''; Добавление
//   document.getElementById('message-block').classList.add('hidden');
// });





// let more = document.querySelector('.input__btn'),
//     overlay = document.querySelector('.overlay'),
//     close = document.querySelector('.close_btn');

//     more.addEventListener('click', function() {
//       overlay.style.display = 'block';
//     });

//     close.addEventListener('click', function() {
//       overlay.style.display = 'none';
//       more.classList.remove()


 // more.addEventListener('click', () => {
    //     const subject = document.getElementById('subject').value.toString();
    //     document.getElementById('result1').innerText = subject;
    //     document.getElementById('message-block').classList.remove('hidden');
    //   });



let overlay = document.querySelector('.overlay'),
    more = document.getElementById('btn2'),
    close = document.getElementById('close_btn'),
    name = document.getElementById('name'),
    email = document.getElementById('email'),
    subject = document.getElementById('subject'),
    blog = document.getElementById('textarea'),
    theme = document.getElementById('theme'),
    descr = document.getElementById('description');
    
  
       

    more.addEventListener('click', e => {
      e.preventDefault();
      if (name.value !== '' && email.value !== ''){
          if (subject.value !== '') {
              theme.textContent = 'Тема: ' + subject.value;
          }
          if (blog.value !== '') {
            description.textContent = 'Описание: ' + blog.value;
          }
          overlay.style.display = 'flex';
          document.body.style.overflow = 'hidden';
      }
  });


  close.onclick = function () {
    overlay.style.display = 'none';
    theme.textContent = '';
    description.textContent = '';
    subject.value ='';
    blog.value ='';
    name.value = '';
    email.value = '';
    document.body.style.overflow = '';
  };

    overlay.addEventListener('click', e => {
      let target = e.target;
      if (target.classList.contains('overlay')) {
          overlay.style.display = 'none';
          document.body.style.overflow = '';
          subject.value = '';
          textarea.value = '';
          name.value = '';
          email.value = '';
          theme.textContent = 'Без темы';
          description.textContent = 'Без описания';
      }
  });

    // -------------------burger
   
    const burger = document.querySelector('.burger');
    
    burger.addEventListener('click', openMenu);
     function openMenu() {
      document.getElementById('sidebar').classList.toggle('active');
      document.getElementById('header__logo').classList.toggle('active');
      burger.classList.toggle('active');
    }