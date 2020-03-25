const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength

// const initPlayers = (players) => {
//     let detailedPlayers = [];
//     for (i = 0; i < players.length; i++) {
//         detailedPlayers[i] = {
//             name: players[i],
//             image: "images/super-" + (i + 1) + ".png",
//             strength: getRandomStrength(),
//             type: (i % 2 == 0) ? "hero" : "villain"
//         }
//     }
//     return detailedPlayers;
// }

const initPlayers = (players) => {
    let detailedPlayers = [];
    PLAYERS.map(function(value, index){
        detailedPlayers[index] ={
            name : players[index],
            image: "images/super-" + (index + 1) + ".png",
            strength: getRandomStrength(),
            type: (index % 2 == 0) ? "hero" : "villain"
        }
    });
    return detailedPlayers;
}

// getting random strength

const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// Build player template

const buildPlayers = (players, type) => {
    let fragment = '';

    PLAYERS.map(function(value, index) {
        player = `<div class="player">
                    <img src="${players[index].image}" alt="">
                    <div class="name">${players[index].name}</div>
                    <div class="strength">${players[index].strength}</div>
                </div>`;
        if (players[index].type == type){
            fragment = fragment + player;
        }    
    });
    return fragment;
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}



