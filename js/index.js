let a;
let time;
let date;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
  const a = new Date();
  const time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
  const date = a.toLocaleDateString(undefined,options)
  document.getElementById("date").innerHTML = time;
  document.getElementById("date1").innerText = date;
}, 1000);
