//SCROLL EFFECT

function scrollAppear() {
    let introText = document.querySelector('.intro-text');
    let introPosition = introText.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.3;

    if ((introPosition) < screenPosition) {
        introText.classList.add('intro-appear');
    }
}


window.addEventListener('scroll', scrollAppear);


function scrollAppear1() {
    let introText1 = document.querySelector('.intro-text1');
    let introPosition1 = introText1.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.3;

    if (introPosition1 < screenPosition) {
        introText1.classList.add('intro-appear');
    }
}

window.addEventListener('scroll', scrollAppear1);


function scrollAppear2() {
    let introText2 = document.querySelector('.intro-text2');
    let introPosition2 = introText2.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.3;

    if (introPosition2 < screenPosition) {
        introText2.classList.add('intro-appear');
    }
}

window.addEventListener('scroll', scrollAppear2);

function scrollAppear3() {
    let introText3 = document.querySelector('.intro-text3');
    let introPosition3 = introText3.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.3;

    if (introPosition3 < screenPosition) {
        introText3.classList.add('intro-appear');
    }
}

window.addEventListener('scroll', scrollAppear3);

function scrollAppear4() {
    let introText4 = document.querySelector('.intro-text4');
    let introPosition4 = introText4.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.3;

    if (introPosition4 < screenPosition) {
        introText4.classList.add('intro-appear');
    }
}

window.addEventListener('scroll', scrollAppear4);

function scrollAppear5() {
    let introText5 = document.querySelector('.intro-text5');
    let introPosition5 = introText5.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.3;

    if (introPosition5 < screenPosition) {
        introText5.classList.add('intro-appear');
    }
}

window.addEventListener('scroll', scrollAppear5);

function scrollAppear6() {
    let introText6 = document.querySelector('.intro-text6');
    let introPosition6 = introText6.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.3;

    if (introPosition6 < screenPosition) {
        introText6.classList.add('intro-appear');
    }
}

window.addEventListener('scroll', scrollAppear6);
