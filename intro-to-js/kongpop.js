function askMyName() {
  const name = prompt("Please enter your name", ""); // เรียกใช้คำสั่ง prompt เพื่อถามชื่อ https://www.w3schools.com/jsref/met_win_prompt.asp

  if (name != null) {
    document.getElementById("name-h1").innerHTML =
      "My name is " + name;
  }
}

function helloWorld() {
  const h1message = document.getElementById("name-h1").innerHTML
  alert(h1message + " : ทุกปัญหามีทางแก้ ทุกเรื่องแย่มีทางออก"); // ใช้คำสั่ง document.getElementById เหมือนใน askMyName เพื่อเอาข้อความใน h1 มาใส่
}