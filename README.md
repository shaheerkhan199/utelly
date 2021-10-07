# Utelly
Lookup a tv show or movie by name and retrieve its availability across supported services for a particular country || Netflix, Amazon Prime Video, Amazon Instant Video, Apple TV+, Google Play, iTunes, YouTube Premium, Disney Plus, Hulu, Atom Tickets, CBS, DC Universe, HBO, Discovery Channel, Fandango Movies, Fox, NBC, Nickelodeon.

First you have to login or signup to utelly on https://rapidapi.com/auth/sign-up then you will get API key and you need to subscribe from provided link.

## Installation
Node.JS (Server):
```bash
npm install utelly
```

## Node.js Usage
```node
const Utelly = require("utelly");

Utelly.setApiKey("s0l3466733msh1d5cfb41a80b55ap1eb824jsn79f3d1c3as8d");

async function getData() {
    try {
        let data = await Utelly.lookUp({ term: 'bojack', country: 'uk' });
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}

getData();
```



