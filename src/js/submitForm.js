import { section } from "../js/DOM/getForm.js";
import { client } from "../service/Client.js";
import { dataClient } from "./DOM/getInput.js";

let telephoneInputs = [];
const divEnd = section.divEnd
const formScheduling = section.formScheduling

function handleMoreNumber() {
    console.log('Clicked on moreNumber');
    const telephoneDiv = dataClient.telephoneDiv;
    const newTelephone = document.createElement('input');

    newTelephone.type = 'tel';
    newTelephone.id = 'telephone';

    newTelephone.className = 'form-control telephone';
    newTelephone.placeholder = 'Telephone';

    telephoneDiv.appendChild(newTelephone);
    telephoneInputs.push(newTelephone)
}

document.addEventListener('click', function (e) {
    if (e.target.classList.contains('moreNumber')) {
        handleMoreNumber();
    }
});


async function handleFormSchedulingSubmit(event) {
    try {
        event.preventDefault();

        const firstName = dataClient.firstName.value;
        const lastName = dataClient.lastName.value;
        const telephoneInput = Array.from(dataClient.telephone).map(input => input.value);
        const telephoneNewInput = telephoneInputs.map(input => input.value);
        const telephone = [...telephoneInput, ...telephoneNewInput];

        const hair = dataClient.hair.value
        const beard = dataClient.beard.value;
        const moustache = dataClient.moustache.value;

        const day = dataClient.day.value;
        const month = dataClient.month.value;
        const hour = dataClient.hour.value;

        console.log(telephone)

        const dadosPessoais = {
            firstName,
            lastName,
            telephone,
            hair,
            beard,
            moustache,
            day,
            month,
            hour
        };

        console.log(dadosPessoais)

       const SchedulingNewClient = await client.newCadastre(dadosPessoais);

        // alert("Ok");

        formScheduling.style.display = 'none';
        divEnd.style.display = 'flex';
        

    } catch (error) {
        alert("Error");
        console.log(error);
    }
    
}
formScheduling.addEventListener("submit", handleFormSchedulingSubmit);


function handleNextButtonClick() {
    const divInputs = section.divInputs;
    const btnsNext = dataClient.BtnNextPersonalData;

    btnsNext.forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            divInputs[index].style.display = 'none';

            if (index + 1 < divInputs.length) {
                divInputs[index + 1].style.display = 'inline';
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', handleNextButtonClick);


