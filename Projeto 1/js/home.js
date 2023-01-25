window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var elements = document.getElementsByClassName("dropbtn");

  for (var i = 0; i < elements.length; i++) {
    if (
      document.getElementsByTagName("body").scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      document.getElementsByClassName("dropbtn")[i].style.color = "black";
      document.getElementById("nav").style.backgroundColor = "white";
      document.getElementById("entericon").style.color = "black";
      document.getElementById("arrow1").style.borderColor = "black";
      document.getElementById("arrow2").style.borderColor = "black";
      document.getElementById("arrow3").style.borderColor = "black";
    } else {
      document.getElementById("nav").style.backgroundColor = "transparent";
      document.getElementsByClassName("dropbtn")[i].style.color = "white";
      document.getElementById("nav").classList.add("extra");
      document.getElementById("arrow1").style.borderColor = "white";
      document.getElementById("arrow2").style.borderColor = "white";
      document.getElementById("arrow3").style.borderColor = "white";
      document.getElementById("entericon").style.color = "white";
    }
  }
}

document.getElementById("card0").addEventListener("mouseover", hover0);
document.getElementById("card0").addEventListener("mouseout", hoverout0);

function hover0() {
  document.getElementById("icon0").style.color = "white";
}
function hoverout0() {
  document.getElementById("icon0").style.color = "#22b386";
}

document.getElementById("card1").addEventListener("mouseover", hover1);
document.getElementById("card1").addEventListener("mouseout", hoverout1);

function hover1() {
  document.getElementById("icon1").style.color = "white";
}
function hoverout1() {
  document.getElementById("icon1").style.color = "#22b386";
}

document.getElementById("card2").addEventListener("mouseover", hover2);
document.getElementById("card2").addEventListener("mouseout", hoverout2);

function hover2() {
  document.getElementById("icon2").style.color = "white";
}
function hoverout2() {
  document.getElementById("icon2").style.color = "#22b386";
}

document.getElementById("card3").addEventListener("mouseover", hover3);
document.getElementById("card3").addEventListener("mouseout", hoverout3);

function hover3() {
  document.getElementById("icon3").style.color = "white";
}
function hoverout3() {
  document.getElementById("icon3").style.color = "#22b386";
}

document.getElementById("card4").addEventListener("mouseover", hover4);
document.getElementById("card4").addEventListener("mouseout", hoverout4);

function hover4() {
  document.getElementById("icon4").style.color = "white";
}
function hoverout4() {
  document.getElementById("icon4").style.color = "#22b386";
}

document.getElementById("card5").addEventListener("mouseover", hover5);
document.getElementById("card5").addEventListener("mouseout", hoverout5);

function hover5() {
  document.getElementById("icon5").style.color = "white";
}
function hoverout5() {
  document.getElementById("icon5").style.color = "#22b386";
}

document.getElementById("card6").addEventListener("mouseover", hover6);
document.getElementById("card6").addEventListener("mouseout", hoverout6);

function hover6() {
  document.getElementById("icon6").style.color = "white";
}
function hoverout6() {
  document.getElementById("icon6").style.color = "#22b386";
}

document.getElementById("card7").addEventListener("mouseover", hover7);
document.getElementById("card7").addEventListener("mouseout", hoverout7);

function hover7() {
  document.getElementById("icon7").style.color = "white";
}
function hoverout7() {
  document.getElementById("icon7").style.color = "#22b386";
}

fetch("../data/file.json")
  .then((fileReq) => fileReq.json())
  .then((fileData) => {
    document.getElementById("proj-titulo1").innerHTML = fileData[0].name;
    document.getElementById("proj-titulo2").innerHTML = fileData[1].name;
    document.getElementById("proj-titulo3").innerHTML = fileData[2].name;
    document.getElementsByClassName("preço")[0].innerHTML = fileData[0].preço;
    document.getElementsByClassName("preço")[1].innerHTML = fileData[1].preço;
    document.getElementsByClassName("preço")[2].innerHTML = fileData[2].preço;
    document.getElementsByClassName("urg-btn")[0].innerHTML =
      fileData[0].urgencia[0];
    document.getElementsByClassName("urg-btn")[1].innerHTML =
      fileData[0].urgencia[0];
    document.getElementById("urg-btn").innerHTML = fileData[2].destaque[0];
    document.getElementsByClassName("cat-btn")[0].innerHTML =
      fileData[0].categoria[0];
    document.getElementsByClassName("cat-btn")[1].innerHTML =
      fileData[0].categoria[1];
    document.getElementsByClassName("cat-btn")[2].innerHTML =
      fileData[0].categoria[2];
    document.getElementsByClassName("cat-btn")[3].innerHTML =
      fileData[0].categoria[3];
    document.getElementsByClassName("cat-btn")[4].innerHTML =
      fileData[0].categoria[4];

    document.getElementsByClassName("cat-btn")[5].innerHTML =
      fileData[1].categoria[0];
    document.getElementsByClassName("cat-btn")[6].innerHTML =
      fileData[1].categoria[1];
    document.getElementsByClassName("cat-btn")[7].innerHTML =
      fileData[1].categoria[2];
    document.getElementsByClassName("cat-btn")[8].innerHTML =
      fileData[1].categoria[3];
    document.getElementsByClassName("cat-btn")[9].innerHTML =
      fileData[1].categoria[4];

    document.getElementsByClassName("cat-btn")[10].innerHTML =
      fileData[2].categoria[0];
    document.getElementsByClassName("cat-btn")[11].innerHTML =
      fileData[2].categoria[1];
    document.getElementsByClassName("cat-btn")[12].innerHTML =
      fileData[2].categoria[2];
    document.getElementsByClassName("cat-btn")[13].innerHTML =
      fileData[2].categoria[3];
    document.getElementsByClassName("cat-btn")[14].innerHTML =
      fileData[2].categoria[4];

    document.getElementsByClassName("qntd")[0].innerHTML =
      fileData[0].qntdLance;
    document.getElementsByClassName("qntd")[1].innerHTML =
      fileData[0].mediaLance;
    document.getElementsByClassName("qntd")[2].innerHTML = fileData[0].tempo;

    document.getElementsByClassName("qntd")[3].innerHTML =
      fileData[1].qntdLance;
    document.getElementsByClassName("qntd")[4].innerHTML =
      fileData[1].mediaLance;
    document.getElementsByClassName("qntd")[5].innerHTML = fileData[1].tempo;

    document.getElementsByClassName("qntd")[6].innerHTML =
      fileData[2].qntdLance;
    document.getElementsByClassName("qntd")[7].innerHTML =
      fileData[2].mediaLance;
    document.getElementsByClassName("qntd")[8].innerHTML = fileData[2].tempo;
  });

fetch("../data/file2.json")
  .then((fileReq) => fileReq.json())
  .then((fileData) => {
    document.getElementById("trab-titulo1").innerHTML = fileData[0].name;
    document.getElementById("trab-titulo2").innerHTML = fileData[1].name;
    document.getElementById("trab-titulo3").innerHTML = fileData[2].name;
    document.getElementsByClassName("qntd")[9].innerHTML = fileData[0].outro[0];
    document.getElementsByClassName("qntd")[10].innerHTML =
      fileData[0].outro[1];
    document.getElementsByClassName("qntd")[11].innerHTML =
      fileData[0].outro[2];
    document.getElementsByClassName("qntd")[12].innerHTML =
      fileData[1].outro[0];
    document.getElementsByClassName("qntd")[13].innerHTML =
      fileData[1].outro[1];
    document.getElementsByClassName("qntd")[14].innerHTML =
      fileData[1].outro[2];
    document.getElementsByClassName("qntd")[15].innerHTML =
      fileData[2].outro[0];
    document.getElementsByClassName("qntd")[16].innerHTML =
      fileData[2].outro[1];
    document.getElementsByClassName("qntd")[17].innerHTML =
      fileData[2].outro[2];
  });

console.log(document.getElementById("nav"));

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
