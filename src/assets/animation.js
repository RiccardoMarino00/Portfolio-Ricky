let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');

let slider = document.querySelector('.slider');
let sliderList = slider.querySelector('.slider .list');
let thumbNail = document.querySelector ('.thumbnail');
let thumbnailItems = thumbNail.querySelectorAll('.item')

thumbNail.appendChild(thumbnailItems[0]);


// next btn
nextBtn.onclick = function() {
    moveSlider('next');
    console.log(nextBtn);

}

// prev btn
prevBtn.onclick = function() {
    moveSlider('prev')
}

function moveSlider(direction) {
    console.log(nextBtn);
    let sliderItems = slider.querySelectorAll('.item');
    if (direction === 'next') {
        sliderList.appendChild(sliderItems[0]);
        thumbNail.appendChild(thumbnailItems[0]);
        slider.classList.add('next')
    }
}