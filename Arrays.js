const players = [{
        "id": 1,
        "name": "Ivan",
        "scorePoints": 4500
    },
    {
        "id": 2,
        "name": "Petr",
        "scorePoints": 3600
    },
    {
        "id": 3,
        "name": "Vadim",
        "scorePoints": 3433
    },
    {
        "id": 4,
        "name": "Olga",
        "scorePoints": 2356
    },
];

function calculatePlayersScore(players) {
    let bestPlayer = {
        scorePoints: 0,
    };

    players.forEach(player => {
        if (player.scorePoints > bestPlayer.scorePoints) {
            bestPlayer = player;
        }
    });

    delete bestPlayer.id;
    return bestPlayer;
}

console.log(calculatePlayersScore(players));
