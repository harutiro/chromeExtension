// window.addEventListener('load', () => {
//     // alert("😄😄😄😄😄😄😄")
//     // console.log("aa")



// const element = `<div style="position: fixed; bottom: 100px; right: 50px; color: white;">aaaa</div>`;
const elm = document.createElement("div");
elm.style.cssText = "position: fixed; bottom: 100px; right: 50px; color: white;";
elm.innerText = "aaaa";
document.getElementsByTagName("body")[0].append(elm);