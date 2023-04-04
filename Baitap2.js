function inTamgiac1() {
  //   let string = " ";
  for (let i = 1; i <= 5; i++) {
    for (let k = 1; k <= i; k++) {
      document.write("*");
    }
    document.write("<br>");
  }
}

function inTamgiac2() {
  for (let i = 1; i <= 5; i++) {
    for (let k = 1; k <= 5 - i + 1; k++) {
      document.write("*");
    }
    document.write("<br>");
  }
}

function inTamgiac3() {
  for (let i = 1; i <= 5; i++) {
    for (let h = 1; h <= 5 - i; h++) {
      document.write("&nbsp;&nbsp;");
    }
    for (let k = 1; k <= i; k++) {
      document.write("*");
    }
    document.write("<br>");
  }
}

function inTamgiac4() {
  for (let i = 1; i <= 5; i++) {
    for (let h = 1; h <= i - 1; h++) {
      document.write("&nbsp;&nbsp;");
    }
    for (let k = 1; k <= 5 - i + 1; k++) {
      document.write("*");
    }
    document.write("<br>");
  }
}

function inHinhChuNhat() {
  for (let i = 1; i <= 7; i++) {
    for (let j = 1; j <= 15; j++) {
      if (i == 1 || i == 7) {
        document.write("*");
      } else {
        if (j != 1 && j != 15) {
          document.write("&nbsp;&nbsp;");
        } else {
          document.write("*");
        }
      }
    }
    document.write("<br>");
  }
}
