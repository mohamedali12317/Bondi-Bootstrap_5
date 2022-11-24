let SwLi = document.querySelectorAll(`.swl li`);

let imgs = document.querySelectorAll(`.all`);

// let imgs3 = Array.from(document.querySelectorAll(`.all`));


SwLi.forEach((li) => {
 li.addEventListener('click', remove_active);
 li.addEventListener('click', mange_item);
});


function remove_active() {
 SwLi.forEach((li) => {
  li.classList.remove('active');
 })
};

function mange_item () {
 imgs.forEach((img) => {
  img.style.display = 'none';
 })

 document.querySelectorAll(this.dataset.cat).forEach((el) => {
  el.style.display = 'block';
 });
 
}

let btn = document.querySelector(".toTop");
console.log(window.scrollY) // 925;

window.onscroll = function () {
 if (window.scrollY >= 801) {
   btn.style.display = 'block'
 }else {
  btn.style.display = 'none';
 }

}

btn.onclick = function () {
 window.scrollTo({
     top : 0 , left : 0 , behavior : `smooth`
 });

}

