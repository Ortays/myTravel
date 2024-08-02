function formValidation() {
    let name = document.forms["myForm"]['fname'].value;
    console.log(name);

    if (name == '') {
        alert('Wajib diisi!')
    } else {
        alert('Sukses terkirim!');
    }
}

let indexSlide = 1;
showSlide(1);

function nextSlide(n) {
    showSlide(indexSlide += n);
}

function showSlide(n) {
    let listImage = document.getElementsByClassName('main-content-banner')
    console.log(listImage);

    if (n > listImage.length) indexSlide = 1;
    
    let index = 0;
    while (index < listImage.length) {
        listImage[index].style.display = 'none';
        index++;
    }

    listImage[indexSlide - 1].style.display = 'block';
}

setInterval(() => nextSlide(1), 3000);