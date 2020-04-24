// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB-1Bib89nrsh2ny111V3tzF0IMQvQsiKk",
    authDomain: "krkd-vote.firebaseapp.com",
    databaseURL: "https://krkd-vote.firebaseio.com",
    projectId: "krkd-vote",
    storageBucket: "krkd-vote.appspot.com",
    messagingSenderId: "1050144178451",
    appId: "1:1050144178451:web:701ea1958ea52d9e605ae6",
    measurementId: "G-G3SY6XQX0F"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var database = firebase.database();

//get image elements
const wonhy = document.getElementById("wonhy");
let wonhyResult = document.getElementById("wonhy-result");
const joes = document.getElementById("joes");
let joesResult = document.getElementById("joes-result");
const leeh = document.getElementById("leeh");
let leehResult = document.getElementById("leeh-result");
const sonjh = document.getElementById("sonjh");
let sonjhResult = document.getElementById("sonjh-result");
const ahns = document.getElementById("ahns");
let ahnsResult = document.getElementById("ahns-result");


//get text elements
const text1 = document.getElementById("text1");
let text1Result = document.getElementById("text1-result");
const text2 = document.getElementById("text2");
let text2Result = document.getElementById("text2-result");
const text3 = document.getElementById("text3");
let text3Result = document.getElementById("text3-result");
const text4 = document.getElementById("text4");
let text4Result = document.getElementById("text4-result");
const text5 = document.getElementById("text5");
let text5Result = document.getElementById("text5-result");
const text6 = document.getElementById("text6");
let text6Result = document.getElementById("text6-result");
const text7 = document.getElementById("text7");
let text7Result = document.getElementById("text7-result");
const text8 = document.getElementById("text8");
let text8Result = document.getElementById("text8-result");
const text9 = document.getElementById("text9");
let text9Result = document.getElementById("text9-result");
const text10 = document.getElementById("text10");
let text10Result = document.getElementById("text10-result");
const text11 = document.getElementById("text11");
let text11Result = document.getElementById("text11-result");
const text12 = document.getElementById("text12");
let text12Result = document.getElementById("text12-result");
const text13 = document.getElementById("text13");
let text13Result = document.getElementById("text13-result");
const text14 = document.getElementById("text14");
let text14Result = document.getElementById("text14-result");
const text15 = document.getElementById("text15");
let text15Result = document.getElementById("text15-result");

//hide hearts
function hidewonhy(wonhy) {
  wonhy.style.display = 'none';
}
function hidejoes(joes) {
  joes.style.display = 'none';
}
function hideleeh(leeh) {
  leeh.style.display = 'none';
}
function hidesonjh(sonjh) {
  sonjh.style.display = 'none';
}
function hideahns(ahns) {
  ahns.style.display = 'none';
}
function hide1(text1) {
  text1.style.display = 'none';
}
function hide2(text2) {
  text2.style.display = 'none';
}
function hide3(text3) {
  text3.style.display = 'none';
}
function hide4(text4) {
  text4.style.display = 'none';
}
function hide5(text5) {
  text5.style.display = 'none';
}
function hide6(text6) {
  text6.style.display = 'none';
}
function hide7(text7) {
  text7.style.display = 'none';
}
function hide8(text8) {
  text8.style.display = 'none';
}
function hide9(text9) {
  text9.style.display = 'none';
}
function hide10(text10) {
  text10.style.display = 'none';
}
function hide11(text11) {
  text11.style.display = 'none';
}
function hide12(text12) {
  text12.style.display = 'none';
}
function hide13(text13) {
  text13.style.display = 'none';
}
function hide14(text14) {
  text14.style.display = 'none';
}
function hide15(text15) {
  text15.style.display = 'none';
}

//checkURL and hide hearts
function checkURL() {
   if (window.location.hash === "#wonhy") {
       hidewonhy();
   } else if (window.location.hash === "#joes") {
       hidejoes();
   } else if (window.location.hash === "#leeh") {
       hideleeh();
   } else if (window.location.hash === "#sonjh") {
       hidesonjh();
   } else if (window.location.hash === "#ahns") {
       hideahns();
   } else if (window.location.hash === "#text1") {
       hide1();
   } else if (window.location.hash === "#text2") {
       hide2();
   } else if (window.location.hash === "#text3") {
       hide3();
   } else if (window.location.hash === "#text4") {
       hide4();
   } else if (window.location.hash === "#text5") {
       hide5();
   } else if (window.location.hash === "#text6") {
       hide6();
   } else if (window.location.hash === "#text7") {
       hide7();
   } else if (window.location.hash === "#text8") {
       hide8();
   } else if (window.location.hash === "#text9") {
       hide9();
   } else if (window.location.hash === "#text10") {
       hide10();
   } else if (window.location.hash === "#text11") {
       hide11();
   } else if (window.location.hash === "#text12") {
       hide12();
   } else if (window.location.hash === "#text13") {
       hide13();
   } else if (window.location.hash === "#text14") {
       hide14();
   } else if (window.location.hash === "#text15") {
       hide15();
   } else {}
} 
checkURL();

//imagebox shuffle
var imgcards = $(".image-box");
for (var i = 0; i < imgcards.length; i++) {
    var target = Math.floor(Math.random() * imgcards.length - 1) + 1;
    var target2 = Math.floor(Math.random() * imgcards.length - 1) + 1;
    imgcards.eq(target).before(imgcards.eq(target2));
}

//wonhy
var ref = firebase.database().ref("wonhy");
ref.on("value", (snapshot) => {
    wonhyResult.textContent = snapshot.val();
});

wonhy.addEventListener("click", () => {
    ref.transaction(val => val + 1, (err) => {
        if (err) {
            alert(err);
        }
    });
}, false);

//joes
var ref2 = firebase.database().ref("joes");
ref2.on("value", (snapshot) => {
    joesResult.textContent = snapshot.val();
});

joes.addEventListener("click", () => {
    ref2.transaction(val => val + 1, (err) => {
        if (err) {
            alert(err);
        }
    });
}, false);

//leeh
var ref3 = firebase.database().ref("leeh");
ref3.on("value", (snapshot) => {
    leehResult.textContent = snapshot.val();
});

leeh.addEventListener("click", () => {
    ref3.transaction(val => val + 1, (err) => {
        if (err) {
            alert(err);
        }
    });
}, false);

//sonjh
var ref4 = firebase.database().ref("sonjh");
ref4.on("value", (snapshot) => {
    sonjhResult.textContent = snapshot.val();
});

sonjh.addEventListener("click", () => {
    ref4.transaction(val => val + 1, (err) => {
        if (err) {
            alert(err);
        }
    });
}, false);

//ahns
var ref5 = firebase.database().ref("ahns");
ref5.on("value", (snapshot) => {
    ahnsResult.textContent = snapshot.val();
});

ahns.addEventListener("click", () => {
    ref5.transaction(val => val + 1, (err) => {
        if (err) {
            alert(err);
        }
    });
}, false);

//textbox shuffle

var cards = $(".text-box");
for (var i = 0; i < cards.length; i++) {
    var target = Math.floor(Math.random() * cards.length - 1) + 1;
    var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
    cards.eq(target).before(cards.eq(target2));
}

//textbox likes

//1
var ref6 = firebase.database().ref("text1");
ref6.on("value", (snapshot) => {
    text1Result.textContent = snapshot.val();
});

text1.addEventListener("click", () => {
    ref6.transaction(val => val + 1, (err) => {
        if (err) {
            alert(err);
        }
    });
}, false);

//2
var ref7 = firebase.database().ref("text2");
ref7.on("value", (snapshot) => {
    text2Result.textContent = snapshot.val();
});

text2.addEventListener("click", () => {
    ref7.transaction(val => val + 1, (err) => {
        if (err) {
            alert(err);
        }
    });
}, false);

//3
var ref8 = firebase.database().ref("text3");
ref8.on("value", (snapshot) => {
    text3Result.textContent = snapshot.val();
});

text3.addEventListener("click", () => {
    ref8.transaction(val => val + 1, (err) => {
        if (err) {
            alert(err);
        }
    });
}, false);

//4
var ref9 = firebase.database().ref("text4");
ref9.on("value", (snapshot) => {
    text4Result.textContent = snapshot.val();
});

text4.addEventListener("click", () => {
    ref9.transaction(val => val + 1, (err) => {
        if (err) {
            alert(err);
        }
    });
}, false);

//5
var ref10 = firebase.database().ref("text5");
ref10.on("value", (snapshot) => {
    text5Result.textContent = snapshot.val();
});

text5.addEventListener("click", () => {
    ref10.transaction(val => val + 1, (err) => {
        if (err) {
            alert(err);
        }
    });
}, false);

//6
var ref11 = firebase.database().ref("text6");
ref11.on("value", (snapshot) => {
    text6Result.textContent = snapshot.val();
});

text6.addEventListener("click", () => {
    ref11.transaction(val => val + 1, (err) => {
        if (err) {
            alert(err);
        }
    });
}, false);

//7
var ref12 = firebase.database().ref("text7");
ref12.on("value", (snapshot) => {
    text7Result.textContent = snapshot.val();
});

text7.addEventListener("click", () => {
    ref12.transaction(val => val + 1, (err) => {
        if (err) {
            alert(err);
        }
    });
}, false);

//8
var ref13 = firebase.database().ref("text8");
ref13.on("value", (snapshot) => {
    text8Result.textContent = snapshot.val();
});

text8.addEventListener("click", () => {
    ref13.transaction(val => val + 1, (err) => {
        if (err) {
            alert(err);
        }
    });
}, false);

//9
var ref14 = firebase.database().ref("text9");
ref14.on("value", (snapshot) => {
    text9Result.textContent = snapshot.val();
});

text9.addEventListener("click", () => {
    ref14.transaction(val => val + 1, (err) => {
        if (err) {
            alert(err);
        }
    });
}, false);

//10
var ref15 = firebase.database().ref("text10");
ref15.on("value", (snapshot) => {
    text10Result.textContent = snapshot.val();
});

text10.addEventListener("click", () => {
    ref15.transaction(val => val + 1, (err) => {
        if (err) {
            alert(err);
        }
    });
}, false);

//11
var ref16 = firebase.database().ref("text11");
ref16.on("value", (snapshot) => {
    text11Result.textContent = snapshot.val();
});

text11.addEventListener("click", () => {
    ref16.transaction(val => val + 1, (err) => {
        if (err) {
            alert(err);
        }
    });
}, false);

//12
var ref17 = firebase.database().ref("text12");
ref17.on("value", (snapshot) => {
    text12Result.textContent = snapshot.val();
});

text12.addEventListener("click", () => {
    ref17.transaction(val => val + 1, (err) => {
        if (err) {
            alert(err);
        }
    });
}, false);


//13
var ref18 = firebase.database().ref("text13");
ref18.on("value", (snapshot) => {
    text13Result.textContent = snapshot.val();
});

text13.addEventListener("click", () => {
    ref18.transaction(val => val + 1, (err) => {
        if (err) {
            alert(err);
        }
    });
}, false);

//14
var ref19 = firebase.database().ref("text14");
ref19.on("value", (snapshot) => {
    text14Result.textContent = snapshot.val();
});

text14.addEventListener("click", () => {
    ref19.transaction(val => val + 1, (err) => {
        if (err) {
            alert(err);
        }
    });
}, false);

//15
var ref20 = firebase.database().ref("text15");
ref20.on("value", (snapshot) => {
    text15Result.textContent = snapshot.val();
});

text15.addEventListener("click", () => {
    ref20.transaction(val => val + 1, (err) => {
        if (err) {
            alert(err);
        }
    });
}, false);

