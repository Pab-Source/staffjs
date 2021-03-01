import $staffContainer from "./components/staff-container";

const $root = document.getElementById("root");

$root.appendChild($staffContainer());

$root.innerText = "Hola";
(async () => {
  window.navigator.clipboard.readText().then(va => {
    document.body.innerText = va;
  });
})();

window.navigator.clipboard.addEventListener("copy", function (eve) {
  eve.preventDefault();
  eve.clipboardData.setData("text/plain", "hola");
  console.log(eve);
});

window.navigator.clipboard.read().then(te => console.log(te));
