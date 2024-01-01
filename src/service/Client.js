
const url = 'http://localhost:3000/client';

const showClient = async (id) => {
    try {
        const response = await fetch(`${url}${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    
    if (response.ok){
        return response.body
    }
    throw new Error ('Unable to show a client')
    }

    catch (error) {
        console.error('Error:', error);
        throw error; 
    }
}

const newCadastre  = async (clientData) => {
    
    try {

        const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify (clientData)
    })

    if (response.ok){
        return response.body
    }
    throw new Error ('Unable to create a new client')
    }

    catch (error) {
        console.error('Error:', error);
        throw error; 
    }
}


export const client = {

    showClient,
    newCadastre
}



// const newCadastre  = async (firstName, lastName, telephone, hair,
//     beard, moustache, day, mounth, hour) => {
    
//     try {

//         const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },

//         body: JSON.stringify ({

//             firstName:firstName,
//             lastName:lastName,
//             telephone:telephone,
//             hair:hair,
//             beard:beard,
//             moustache:moustache,
//             day:day,
//             mounth:mounth,
//             hour:hour
//         })
//     })