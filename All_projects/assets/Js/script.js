let projects = [
  {
    ProName: "Calculator",
    img: "assets/images/calc.png",
    descryption: `
        This project aims to create a simple calculator application using JavaScript, HTML, and
        CSS. The calculator will allow users to perform basic arithmetic operations such as
        addition, subtraction, multiplication, and division.
    `,
    className: "calculator",
    link: "./Calculator/index.html",
  },
  {
    ProName: "Speedometer",
    img: "assets/images/speedo2.png",
    descryption: `
        A speedometer is a graphical representation of speed, typically used
        in vehicles to display the current speed. Our speedometer is built using JavaScript,
         HTML, and CSS, providing a dynamic and interactive way to visualize speed.
    `,
    className: "speedometer",
    link: "./Speedometer/index.html",
  },
  {
    ProName: "Dynamic Structure",
    img: "assets/images/Structure.png",
    descryption: `
       A dynamic structure built using JavaScript, HTML, and CSS, allowing for real-time modifications and updates. This flexible framework enables the creation of interactive and adaptive layouts, perfect for various applications.
    `,
    className: "structure",
    link: "./Structure/index.html",
  },
  {
    ProName: "Slider",
    img: "assets/images/slider.png",
    descryption: `A responsive and interactive slider built using
    JavaScript, HTML, and CSS, perfect for showcasing images, content, or products in a visually appealing way.`,
    className: "slider",
    link: "./slider/index.html",
  },
  {
    ProName: "ATM",
    img: "assets/images/atm.png",
    descryption: `A interactive ATM simulator built using JavaScript, HTML, and CSS, mimicking the experience of using a real ATM. Perfect for demonstrating online banking concepts, testing user interfaces, or creating interactive tutorials.`,
    className: "atm",
    link: "./atm-4/index.html",
  },
  {
    ProName: "CRUD Records",
    img: "assets/images/crudRecords.png",
    descryption: `A simple and intuitive CRUD (Create, Read, Update, Delete) records manager built using JavaScript, HTML, and CSS, perfect for managing small to medium-sized datasets. Ideal for prototyping, testing, or building MVP.`,
    className: "crud",
    link: "./CreateandUpdateRecords/index.html",
  },
  {
    ProName: "STP Game",
    img: "assets/images/STPgame.png",
    descryption: `A classic game of chance and strategy, built using JavaScript, HTML, and CSS. Play against the computer and increase your score.`,
    className: "stp",
    link: "./STP game/index.html",
  },
  {
    ProName: "Tic Tac Toe Game",
    img: "assets/images/TicTaeGame.png",
    descryption: `A classic game of strategy and skill, built using JavaScript, HTML, and CSS. Play as X or O against the friend, and try to get three in a row to win.`,
    className: "ttt",
    link: "./ticTacToe/index.html",
  },
  {
    ProName: "Weather APi",
    img: "assets/images/weather.png",
    descryption: `A dynamic weather application that fetches real-time data from a weather API, built using JavaScript, HTML, and CSS. Get current weather conditions, forecasts, and more for any location within INDIA.`,
    className: "weather",
    link: "./wetherProject/index.html",
  },
  {
    ProName: "Corona APi",
    img: "assets/images/corona.png",
    descryption: `A dynamic web application that fetches real-time COVID-19 data from a reliable API, built using JavaScript, HTML, and CSS. Get the latest statistics on cases, deaths, and recoveries worldwide.`,
    className: "corona",
    link: "./CoronaProject/index.html",
  },
  {
    ProName: "Add to Cart",
    img: "assets/images/addToCart.png",
    descryption: `A dynamic e-commerce feature that allows users to add products to their cart, built using JavaScript, HTML, and CSS. This project simulates a real-world shopping experience, with a responsive design and interactive functionality.`,
    className: "cart",
    link: "./addToCart/index.html",
  },
];

function printData() {
  let printInfo = "";
  projects.forEach((val) => {
    printInfo += `<div class="col-md-6 col-xl-4">
                    <div class="card project-content ">
                        <div class="project-img ${val.className}">
                            <img src="${val.img}" class="img rounded-top-4" alt="" width="100%" height="100%">
                            <div class="info">
                                <p>
                                    ${val.descryption}
                                </p>
                            </div>
                        </div>
                        <div class="project-head d-flex justify-content-between align-items-baseline p-2">
                            <h3 class="text-white">${val.ProName}</h3>
                            <div class="icons text-white">
                                <a href="${val.link}"><i class="fa-solid fa-eye me-2"></i></a>
                                <i class="fa-solid fa-info" onclick="infoBtn('${val.className}')"></i>
                            </div>
                        </div>
                    </div>
                </div>`;
  });
  document.getElementById("row").innerHTML = printInfo;
}
printData();

function infoBtn(className) {
  $(`.${className} .info`).toggle(500);
  if ($(`.${className} .img`).hasClass("blur-class")) {
    $(`.${className} .img`).removeClass("blur-class");
  } else {
    $(`.${className} .img`).addClass("blur-class");
  }
}
