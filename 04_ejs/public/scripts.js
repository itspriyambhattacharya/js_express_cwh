const elem = document.createElement("h3");
elem.innerHTML = "Thanks for Visiting out Site";
console.log(elem);

setTimeout(() => {
  document.body.appendChild(elem);
}, 3000);
