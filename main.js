let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let box = document.querySelector('.box');
// let image = document.querySelectorAll('.image');


let degrees = 0;

prev.addEventListener('click', function(){
    degrees += 45;
    box.style = `transform: perspective(1000px) rotateY(${degrees}deg)`;
})

next.addEventListener('click', function(){
    degrees -= 45;
    box.style = `transform: perspective(1000px) rotateY(${degrees}deg)`;
})



// for (let i = 0; i < image.length; i++) {
//     image[i].addEventListener('mouseover', function(){
//             image[i].classList.add('zoom');
//         })
// }

// for (let i = 0; i < image.length; i++) {
//     image[i].addEventListener('mouseout', function(){
//             image[i].classList.remove('zoom');
//         })
// }