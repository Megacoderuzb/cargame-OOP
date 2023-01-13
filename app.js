let way = document.querySelector(".way");
let car = document.querySelector(".car");
let gas = document.querySelector(".gas");
let tormz = document.querySelector(".tormz");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let formBtn = document.querySelector(".form-btn");
let modeli = document.querySelector(".model");
let rang = document.querySelector(".color");
let brand = document.querySelector(".brand");
let zavad = document.querySelector(".zavad");
let off = document.querySelector(".off");
let xabar = document.querySelector(".txt");
let binzin = document.querySelector(".petrol");
// let yoqilgi = 30;
let zapravka = document.querySelector(".zapravka");
// xabar.textContent = "";
// let test = modeli.value;
// xabar.textContent =(test);
class Car {
  constructor(model, color, company) {
    this.model = model;
    this.color = color;
    this.company = company;
    this.petrol = 30;
    this.isStarted = false;
    this.isMoving = false;
  }

  move() {
    if (!this.isStarted) {
      return "Oldin Zavat qilish kere";
    }

    this.isMoving = true;
    return `${this.model} is moving`;
  }

  start() {
    if (this.isStarted) {
      return console.log("O'zi Zavat bopturibti.");
    }
    this.isStarted = true;
    return console.log(`${this.model} is ready to drive`);
  }

  stopMoving() {
    if (!this.isMoving) {
      return "O'zi toxtaganku";
    }

    this.isMoving = false;
    return `${this.model} yurishdan toxtadi`;
  }

  stopEngine() {
    if (!this.isStarted) return "Ozi zavat qilinmagan";

    this.isStarted = false;
    return `${this.model} zavat toxtadi`;
  }
}
//main
formBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let moshina = new Car(modeli.value, rang.value, brand.value);
  console.log(moshina);
  document.querySelector(".form").classList.add(".d-none");
  document.querySelector("img").style.backgroundColor = rang.value;
  binzin.textContent = `Yoqilg'i ${yoqilgi}`;
  // console.log(yoqilgi);
});

//main
zavad.addEventListener("click", (e) => {
  e.preventDefault();
  if (Car.isStarted) {
    if (Car.isMoving) {
      xabar.textContent = `${modeli.value} yuryaptiyu`;
    } else {
      xabar.textContent = `${modeli.value} zavad bolgan`;
    }
  } else if (!Car.isStarted && !Car.isMoving) {
    Car.isStarted = true;
    xabar.textContent = `${modeli.value} zavad bo'ldi`;
  } else {
    // xabar.textContent =(err);
    console.log(111);
  }
});
gas.addEventListener("click", (e) => {
  e.preventDefault();
  if (Car.isStarted && !Car.isMoving) {
    Car.isMoving = true;
    if (Car.isMoving) {
      way.classList.add("animation");
      xabar.textContent = `${modeli.value} Yurdi`;
    }
    //else {
    //   xabar.textContent = `${modeli.value}ni zapravkasi tugagan zapravka qiling`;
    // }
  } else if (Car.isMoving) {
    xabar.textContent = `${modeli.value} Yureptiyu`;
  } else if (!Car.isStarted) {
    xabar.textContent = `${modeli.value}ni oldin zavad qiling`;
  }
  // if (yoqilgi < 0) {
  //   Car.isMoving = false;
  //   way.classList.remove("animation");
  //   xabar.textContent = `${modeli.value}ni zapravkasi tugagan zapravka qiling`;
  //   // xabar.textContent = `${modeli.value} toxtadi`;
  // }
});

tormz.addEventListener("click", (e) => {
  e.preventDefault();
  if (!Car.isMoving) {
    xabar.textContent = `${modeli.value} toxtab turiptiyu`;
  } else {
    Car.isMoving = false;
    way.classList.remove("animation");
    xabar.textContent = `${modeli.value} toxtadi`;
    // setInterval(e, 100);
  }
});
off.addEventListener("click", (e) => {
  e.preventDefault();
  if (Car.isMoving) {
    xabar.textContent = "oldin toxtat";
  } else {
    Car.isStarted = false;
    xabar.textContent = `${modeli.value} o'chdi`;
  }
});
// zapravka.addEventListener((e) => {
//   e.preventDefault();

//   Car.isMoving = false;
//   way.classList.remove("animation");
//   if (yoqilgi == 30) {
//     xabar.textContent = `bak tola bosayvering`;
//   }
// });

left.addEventListener("click", (e) => {
  e.preventDefault();
  car.classList.add("turnleft");
});
right.addEventListener("click", (e) => {
  e.preventDefault();
  car.classList.remove("turnleft");
});

// let tesla = new Car("Model S", "Black", "Tesla");
// let BMW = new Car("BMW X7", "White", "BMW");
