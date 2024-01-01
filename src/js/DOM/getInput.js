const firstName = document.getElementById("fistName")
const lastName = document.getElementById("lastName")
const telephone = document.querySelectorAll(".telephone")
const BtnNextPersonalData = document.querySelectorAll('.BtnNextPersonalData');

const moreNumber = document.querySelector('.moreNumber')
const numberDiv = document.querySelector('.numberDiv')
const telephoneDiv = document.querySelector('.telephoneDiv')

const hair = document.getElementById('hair')
const beard = document.getElementById('beard')
const moustache = document.getElementById('moustache')

const day = document.getElementById('day')
const month = document.getElementById('month')
const hour = document.getElementById('hour')



export const dataClient = {
    firstName,
    lastName,
    telephone,
    hair,
    beard,
    moustache,
    day,
    month,
    hour,
    BtnNextPersonalData,
    moreNumber,
    numberDiv,
    telephoneDiv
}

