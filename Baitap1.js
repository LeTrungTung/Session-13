function fibonaci() {
  const n = Number(prompt("Nhập số Fibonaci cần in:"));
  let a1 = 0;
  let a2 = 1;
  let so = 0;
  let count = 0;
  let string = 1;
  while (count < n - 1) {
    so = a1 + a2;
    string = string + " " + so;
    a1 = a2;
    a2 = so;
    count = count + 1;
  }
  console.log("Dãy số là:" + string);
  document.getElementById("dayso").innerHTML = string;
}

function fibo_mod5() {
  let a1 = 0;
  let a2 = 1;
  let so = 0;
  let check = true;
  do {
    so = a1 + a2;
    a1 = a2;
    a2 = so;
    if (so % 5 == 0) {
      console.log("Số Fibo chi hết cho 5: " + so);
      check = false;
    }
  } while (check);
  document.getElementById("fibo_mod5").innerHTML =
    "Số Fibo đầu tiên chia hết cho 5 là: " + so;
}

function into100() {
  let string100 = "";
  let so = 1;
  let replace = "";
  while (so < 100) {
    if (so % 3 == 0 && so % 5 == 0) {
      replace = "FizzBuzz";
    } else if (so % 3 == 0) {
      replace = "Fizz";
    } else if (so % 5 == 0) {
      replace = "Buzz";
    } else {
      replace = so;
    }
    string100 = string100 + " " + replace;
    so = so + 1;
  }
  console.log("Dãy 100 số đầu tiên là: " + string100);
  document.getElementById("day_100").innerHTML = string100;
}

function guess() {
  alert("Nhập vào khoảng số cần đoán");
  const a = parseInt(prompt("Nhập cận dưới của khoảng số:"));
  const b = parseInt(prompt("Nhập cận trên của khoảng số:"));
  let computer = parseInt(
    Math.floor(Math.random() * (b - a + 1) + a)
  );

  do {
    let person = parseInt(
      prompt("Người chơi nhập vào số đoán trong khoảng trên:")
    );
    if (person >= a && person <= b) {
      if (computer == person) {
        alert("Chúc mừng, Bạn đã chọn đúng số của Máy tính");
        return alert("Cảm ơn bạn đã tham gia");
      } else {
        if (computer > person) {
          alert("Bạn cần chọn số lớn hơn" + person);
        } else {
          alert("Bạn cần chọn số nhỏ hơn" + person);
        }
      }
    } else {
      alert("Bạn cần chọn số nằm trong khoảng " + a + " đến " + b);
    }
  } while (computer == person);
}
