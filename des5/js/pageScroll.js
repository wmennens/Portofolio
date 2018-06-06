function pageScroll() {
  window.scroll({
    top: 760,
    left: 0,
    behavior: 'smooth'
  });
  setTimeout(function(){  reload(); }, 540);

}
function reload() {
  history.go(0);
}
function test() {
  pageScroll();

}
function test1() {
  window.scroll({
    top: 1520,
    left: 0,
    behavior: 'smooth'
  });
  setTimeout(function(){  reload(); }, 700);
}
function test2() {
  pageScroll3();
  reload();
}
function test3() {
  secondPage();
  reload();
}
function test4() {
  toWork();
  reload();
}
function test5() {
  workNext();
  reload();
}
function pageScroll2() {
  window.scroll({
    top: 1520,
    left: 0,
    behavior: 'smooth'
  });
  setTimeout(function(){  reload(); }, 500);
}
function pageScroll3() {
  window.scroll({
    top: 2280,
    left: 0,
    behavior: 'smooth'
  });
}
function pageScroll4() {
  window.scroll({
    top: 3090,
    left: 0,
    behavior: 'smooth'
  });
  setTimeout(function(){  reload(); }, 980);

}
function secondPage() {
  window.scroll({
    top: 760,
    left: 1540,
    behavior: 'smooth'
  });
  setTimeout(function(){  reload(); }, 800);
}
function secondPageBack() {
  window.scroll({
    top: 760,
    left: 0,
    behavior: 'smooth'
  });
  setTimeout(function(){  reload(); }, 800);

}
function toWork() {
  window.scroll({
    top: 1520,
    left: 1520,
    behavior: 'smooth'
  });
  setTimeout(function(){  reload(); }, 800);

}
function workBack() {
  window.scroll({
    top: 1520,
    left: 0,
    behavior: 'smooth'
  });
  setTimeout(function(){  reload(); }, 800);

}
function workNext() {
  window.scroll({
    top: 2280,
    left: 1519,
    behavior: 'smooth'
  });
}
function Back2() {
  window.scroll({
    top: 1520,
    left: 1520 ,
    behavior: 'smooth'
  });
}
function mailInput() {
  let mail = document.getElementById('mail');
  let mailText = document.getElementById('mailText');
  mail.style.opacity = "0";
  mailText.style.transition = "1.2s";
  mailText.style.opacity = "1";
}
function phoneInput() {
  let phone = document.getElementById('phone');
  let phoneText = document.getElementById('phoneText');
  phone.style.opacity = "0";
  phoneText.style.transition = "1.2s";
  phoneText.style.opacity = "1";
}
function mobileInput() {
  let mobile = document.getElementById('mobile');
  let mobileText = document.getElementById('mobileText');
  mobile.style.opacity = "0";
  mobileText.style.transition = "1.2s";
  mobileText.style.opacity = "1";
}
function addressInput() {
  let address = document.getElementById('address');
  let addressText = document.getElementById('addressText');
  address.style.opacity = "0";
  addressText.style.transition = "1.2s";
  addressText.style.opacity = "1";
}


let w = window.innerHeight;

if (w == 480) {
  function pageScroll() {
    window.scroll({
      top: 480,
      left: 0,
      behavior: 'smooth'
    });
      document.getElementById('part-1').addClass('part-1');
  }
  function pageScroll2() {
    window.scroll({
      top: 1020,
      left: 0,
      behavior: 'smooth'
    });
  }
  function pageScroll3() {
    window.scroll({
      top: 1570,
      left: 0,
      behavior: 'smooth'
    });
  }
  function pageScroll4() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  function secondPage() {
    window.scroll({
      top: 466,
      left: 322,
      behavior: 'smooth'
    });
  }
  function secondPageBack() {
    window.scroll({
      top: 480,
      left: 0,
      behavior: 'smooth'
    });
  }
  function toWork() {
    window.scroll({
      top: 1020,
      left: 322,
      behavior: 'smooth'
    });
  }
  function workBack() {
    window.scroll({
      top: 1020,
      left: 0,
      behavior: 'smooth'
    });
  }
  function workNext() {
    window.scroll({
      top: 1540,
      left: 322,
      behavior: 'smooth'
    });
  }
  function Back2() {
    window.scroll({
      top: 1020,
      left: 322,
      behavior: 'smooth'
    });
  }
}


if (w == 800) {
  function workNext() {
    window.scroll({
      top: 2170,
      left: 1519,
      behavior: 'smooth'
    });
  }
  function pageScroll3() {
    window.scroll({
      top: 2250,
      left: 0,
      behavior: 'smooth'
    });
  }
}
function toport() {
window.open("http://14511.hosts.ma-cloud.nl/porto/des4/");
}
function tomyband() {
window.open("http://14511.hosts.ma-cloud.nl/school/proj/");
}

function toSee() {
  location.href = "front.html";
}
function toSee2() {
  location.href = "back.html";
}
