import { section } from "../js/DOM/getForm.js";
import { client } from "../service/Client.js";
import { dataClient } from "./DOM/getInput.js";


async function handleFormPersonalInformationSubmit(event) {
    try {
        event.preventDefault();

        const firstName = dataClient.firstName.value;
        const lastName = dataClient.lastName.value;
        const telephone = Array.from(dataClient.telephone).map(input => input.value);

        const dadosPessoais = {
            firstName,
            lastName,
            telephone
        };

       const SchedulingNewClient = await client.newCadastre(dadosPessoais);
        console.log(dadosPessoais)
        alert("Ok");
    } catch (error) {
        alert("Error");
        console.log(error);
    }
}
const formPersonalInformation = section.formPersonalInformation
formPersonalInformation.addEventListener("submit", handleFormPersonalInformationSubmit);



function handleNextButtonClick() {
    const sections = section.sectionForm;
    const btnsNext = dataClient.BtnNextPersonalData;

    btnsNext.forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            sections[index].style.display = 'none';

            if (index + 1 < sections.length) {
                sections[index + 1].style.display = 'flex';
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', handleNextButtonClick);

function handleMoreNumber() {
    console.log('Clicked on moreNumber');
    const telephoneDiv = dataClient.telephoneDiv;
    const newTelephone = document.createElement('input');

    newTelephone.type = 'tel';
    newTelephone.className = 'form-control';
    newTelephone.className = 'telephone';
    newTelephone.id = 'telephone';
    newTelephone.placeholder = 'Telephone';

    telephoneDiv.appendChild(newTelephone);
}

document.addEventListener('click', function (e) {
    if (e.target.classList.contains('moreNumber')) {
        handleMoreNumber();
    }
});