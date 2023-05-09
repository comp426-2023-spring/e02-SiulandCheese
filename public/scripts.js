// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver
var rps = false; 
var opponent = false;

function toggleRPS() { 
    rps = !rps
    var toggle = document.getElementsByClassName("Toggle")[0]; 
    console.log(rps)

    if (rps) { toggle.style.display = 'inline';}
    else { toggle.style.display = 'none';}
    

}

function toggleOpponent() {
     opponent = !opponent 
    
}

async function playRock() { 
    var player = document.getElementById("player"); 
    var opponentText = document.getElementById("opponent");
    var result = document.getElementById("result");
    var resultPopup = document.getElementsByClassName("resultPopup")[0];
    var shot = 'rock'; 
    
    if (!rps && opponent) {
        // Play RPS against Opponent
        const response = await fetch(`/app/rps/play/${shot}`);
        const jsonData = await response.json();
        console.log(jsonData);
        result.innerHTML = jsonData.result.toUpperCase();
        player.innerHTML = "You: " + jsonData.player;
        opponentText.innerHTML = "Opponent: " + jsonData.opponent;
        resultPopup.style.display = 'inline';
    }
    else if (!rps) { 
        // Play RPS without Opponent 
        const response = await fetch(`/app/rps`);
        const jsonData = await response.json();
        console.log(jsonData);
        result.innerHTML = jsonData.player.toUpperCase();
        resultPopup.style.display = 'inline';
    }
    else if (opponent) { 
        // Play an opponent in RPSLS
        const response = await fetch(`/app/rpsls/play/${shot}`);
        const jsonData = await response.json();
        console.log(jsonData);
        result.innerHTML = jsonData.result.toUpperCase();
        player.innerHTML = "You: " + jsonData.player;
        opponentText.innerHTML = "Opponent: " + jsonData.opponent;
        resultPopup.style.display = 'inline';
    }
    else { 
        // Play yourself in RPSLS
        const response = await fetch("/app/rpsls");
        const jsonData = await response.json();
        console.log(jsonData);
        result.innerHTML = jsonData.player.toUpperCase();
        resultPopup.style.display = 'inline';
    }
}

async function playPaper() { 
    var player = document.getElementById("player"); 
    var opponentText = document.getElementById("opponent");
    var result = document.getElementById("result");
    var resultPopup = document.getElementsByClassName("resultPopup")[0];
    var shot = 'paper'; 
    
    if (!rps && opponent) {
        // Play RPS against Opponent
        const response = await fetch(`/app/rps/play/${shot}`);
        const jsonData = await response.json();
        console.log(jsonData);
        result.innerHTML = jsonData.result.toUpperCase();
        player.innerHTML = "You: " + jsonData.player;
        opponentText.innerHTML = "Opponent: " + jsonData.opponent;
        resultPopup.style.display = 'inline';
    }
    else if (!rps) { 
        // Play RPS without Opponent 
        const response = await fetch(`/app/rps`);
        const jsonData = await response.json();
        console.log(jsonData);
        result.innerHTML = jsonData.player.toUpperCase();
        resultPopup.style.display = 'inline';
    }
    else if (opponent) { 
        // Play an opponent in RPSLS
        const response = await fetch(`/app/rpsls/play/${shot}`);
        const jsonData = await response.json();
        console.log(jsonData);
        result.innerHTML = jsonData.result.toUpperCase();
        player.innerHTML = "You: " + jsonData.player;
        opponentText.innerHTML = "Opponent: " + jsonData.opponent;
        resultPopup.style.display = 'inline';
    }
    else { 
        // Play yourself in RPSLS
        const response = await fetch("/app/rpsls");
        const jsonData = await response.json();
        console.log(jsonData);
        result.innerHTML = jsonData.player.toUpperCase();
        resultPopup.style.display = 'inline';
    }
}

async function playScissors() { 
    var player = document.getElementById("player"); 
    var opponentText = document.getElementById("opponent");
    var result = document.getElementById("result");
    var resultPopup = document.getElementsByClassName("resultPopup")[0];
    var shot = 'scissors'; 
    
    if (!rps && opponent) {
        // Play RPS against Opponent
        const response = await fetch(`/app/rps/play/${shot}`);
        const jsonData = await response.json();
        console.log(jsonData);
        result.innerHTML = jsonData.result.toUpperCase();
        player.innerHTML = "You: " + jsonData.player;
        opponentText.innerHTML = "Opponent: " + jsonData.opponent;
        resultPopup.style.display = 'inline';
    }
    else if (!rps) { 
        // Play RPS without Opponent 
        const response = await fetch(`/app/rps`);
        const jsonData = await response.json();
        console.log(jsonData);
        result.innerHTML = jsonData.player.toUpperCase();
        resultPopup.style.display = 'inline';
    }
    else if (opponent) { 
        // Play an opponent in RPSLS
        const response = await fetch(`/app/rpsls/play/${shot}`);
        const jsonData = await response.json();
        console.log(jsonData);
        result.innerHTML = jsonData.result.toUpperCase();
        player.innerHTML = "You: " + jsonData.player;
        opponentText.innerHTML = "Opponent: " + jsonData.opponent;
        resultPopup.style.display = 'inline';
    }
    else { 
        // Play yourself in RPSLS
        const response = await fetch("/app/rpsls");
        const jsonData = await response.json();
        console.log(jsonData);
        result.innerHTML = jsonData.player.toUpperCase();
        resultPopup.style.display = 'inline';
    }
}

async function playLizard() { 
    var player = document.getElementById("player"); 
    var opponentText = document.getElementById("opponent");
    var result = document.getElementById("result");
    var resultPopup = document.getElementsByClassName("resultPopup")[0];
    var shot = 'lizard'; 
    
    if (!rps && opponent) {
        // Play RPS against Opponent
        const response = await fetch(`/app/rps/play/${shot}`);
        const jsonData = await response.json();
        console.log(jsonData);
        result.innerHTML = jsonData.result.toUpperCase();
        player.innerHTML = "You: " + jsonData.player;
        opponentText.innerHTML = "Opponent: " + jsonData.opponent;
        resultPopup.style.display = 'inline';
    }
    else if (!rps) { 
        // Play RPS without Opponent 
        const response = await fetch(`/app/rps`);
        const jsonData = await response.json();
        console.log(jsonData);
        result.innerHTML = jsonData.player.toUpperCase();
        resultPopup.style.display = 'inline';
    }
    else if (opponent) { 
        // Play an opponent in RPSLS
        const response = await fetch(`/app/rpsls/play/${shot}`);
        const jsonData = await response.json();
        console.log(jsonData);
        result.innerHTML = jsonData.result.toUpperCase();
        player.innerHTML = "You: " + jsonData.player;
        opponentText.innerHTML = "Opponent: " + jsonData.opponent;
        resultPopup.style.display = 'inline';
    }
    else { 
        // Play yourself in RPSLS
        const response = await fetch("/app/rpsls");
        const jsonData = await response.json();
        console.log(jsonData);
        result.innerHTML = jsonData.player.toUpperCase();
        resultPopup.style.display = 'inline';
    }
}

async function playSpock() { 
    var player = document.getElementById("player"); 
    var opponentText = document.getElementById("opponent");
    var result = document.getElementById("result");
    var resultPopup = document.getElementsByClassName("resultPopup")[0];
    var shot = 'spock'; 
    
    if (!rps && opponent) {
        // Play RPS against Opponent
        const response = await fetch(`/app/rps/play/${shot}`);
        const jsonData = await response.json();
        console.log(jsonData);
        result.innerHTML = jsonData.result.toUpperCase();
        player.innerHTML = "You: " + jsonData.player;
        opponentText.innerHTML = "Opponent: " + jsonData.opponent;
        resultPopup.style.display = 'inline';
    }
    else if (!rps) { 
        // Play RPS without Opponent 
        const response = await fetch(`/app/rps`);
        const jsonData = await response.json();
        console.log(jsonData);
        result.innerHTML = jsonData.player.toUpperCase();
        resultPopup.style.display = 'inline';
    }
    else if (opponent) { 
        // Play an opponent in RPSLS
        const response = await fetch(`/app/rpsls/play/${shot}`);
        const jsonData = await response.json();
        console.log(jsonData);
        result.innerHTML = jsonData.result.toUpperCase();
        player.innerHTML = "You: " + jsonData.player;
        opponentText.innerHTML = "Opponent: " + jsonData.opponent;
        resultPopup.style.display = 'inline';
    }
    else { 
        // Play yourself in RPSLS
        const response = await fetch("/app/rpsls");
        const jsonData = await response.json();
        console.log(jsonData);
        result.innerHTML = jsonData.player.toUpperCase();
        resultPopup.style.display = 'inline';
    }
}

function reset() { location.reload(); }


