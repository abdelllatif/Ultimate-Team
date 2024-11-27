const myInput = document.querySelector(".myinput");
document.addEventListener("DOMContentLoaded", () => {
    const playerList = document.getElementById("playerList");
    const totalPlayersText = document.getElementById("totalPlayersText");

    let totalPlayers = 0;
    const maxPlayers = 18;

    fetch('./players.json')
        .then(res => res.json())
        .then(data => {
            const players = data.players;

            players.forEach(player => {
                const playerItem = document.createElement("div");
                playerItem.className = "player-item";
                 if(player.position==='GK'){
                    playerItem.innerHTML =
                       
                    ` <button class="add-to-team-btn">
                    <img src="${player.photo}" alt="${player.name}" class="player-photo">
                    <div class="player-info">
                        <h4>${player.name}</h4>
                        <p>Position: ${player.position}</p>
                        
                       <div class="player-grid" >
                       <div class="player-info-name" > RAT DIV HAN KIC REF SPD POS</div>
                        <div class="player-info"> <span> ${player.rating}</span><span> ${player.diving}</span><span> ${player.handling}</span><span> ${player.kicking} </span><span>${player.reflexes}</span><span>${player.speed}</span><span>${player.positioning}</span></div>
                        <p> <img src="${player.logo}" alt="${player.club}" class="club-logo"> ${player.club}</p>
                        <p> <img src="${player.flag}" alt="${player.nationality}" class="flag-icon"> ${player.nationality}</p>
                        
                        </div>
                        </div>
                   </button>
                `;
                 }
                 else{
                playerItem.innerHTML =
                 ` <button class="add-to-team-btn">
                    <img src="${player.photo}" alt="${player.name}" class="player-photo">
                    <div class="player-info">
                        <h4>${player.name}</h4>
                        <p>Position: ${player.position}</p>

                       <div class="player-grid" >
                        <div class="player-info-name"> ${'RAT'} ${'PAC'} ${'SHO'} ${'PAS'} ${'DRI'} ${'DEF'}  ${'PHY'} </div>
                        <div class="player-info" > <span>${player.rating}</span> <span>${player.pace}</span> <span>${player.shooting}</span> <span>${player.passing}</span><span> ${player.dribbling}</span><span>${player.defending}</span> <span>${player.physical}</span> </div>
                           <p><img src="${player.logo}" alt="${player.club}" class="club-logo"> ${player.club}</p>
                        <p> <img src="${player.flag}" alt="${player.nationality}" class="flag-icon"> ${player.nationality}</p>
                        
                        </div>
                        </div>
                   </button>
                `;
            }
                playerItem.querySelector(".add-to-team-btn").addEventListener("click", () => {
                    if (totalPlayers < maxPlayers) {
                        totalPlayers++;
                        totalPlayersText.textContent = `Total Players: ${totalPlayers} / ${maxPlayers}`;
                        // alert(`${player.name} added to your team!`);
                    } else {
                        alert("Team is full! You cannot add more players.");
                    }
                });

                playerList.appendChild(playerItem);
            });
        })
        .catch(err => console.error("Error loading players:", err));
});
  

// const popupFormContainer = document.getElementById("popupFormContainer");


//     const openPopupButton = document.getElementById("openPopup");
//     const closePopupButton = document.getElementById("closePopup");

// document.addEventListener("DOMContentLoaded", () => {
    

//     openPopupButton.addEventListener("click", () => {
//         popupFormContainer.classList.remove("hidden");
//     });

//     closePopupButton.addEventListener("click", () => {
//         popupFormContainer.classList.add("hidden");
//     });

   
// });

// Select elements
const popupFormContainer = document.getElementById('popupFormContainer');
const togglePopupBtn = document.getElementById('togglePopupBtn');
const closePopupBtn = document.getElementById('closePopup');

function togglePopup() {
    popupFormContainer.classList.toggle('hidden');
}

togglePopupBtn.addEventListener('click', togglePopup);
closePopupBtn.addEventListener('click', togglePopup);

popupFormContainer.addEventListener('click', (event) => {
    if (event.target === popupFormContainer) {
        togglePopup();
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const playerPositionSelect = document.getElementById('playerPosition');
    const myInput = document.querySelector(".myinput");
    const addPlayerButton = document.getElementById('btnAjouter'); // Button for adding player

    // Function to update the input fields based on position (GK or other)
    function updateInputs(position) {
        if (position === "GK") {
            myInput.innerHTML = `
                <div><input type="number" id="playerRating" placeholder="Rating" name="playerRating" min="0" max="100" required></div>
                <div><input type="number" id="playerDiving" placeholder="Diving" name="playerDiving" min="0" max="100" required></div>
                <div><input type="number" id="playerHandling" placeholder="Handling" name="playerHandling" min="0" max="100" required></div>
                <div><input type="number" id="playerKicking" placeholder="Kicking" name="playerKicking" min="0" max="100" required></div>
                <div><input type="number" id="playerReflexes" placeholder="Reflexes" name="playerReflexes" min="0" max="100" required></div>
                <div><input type="number" id="playerSpeed" placeholder="Speed" name="playerSpeed" min="0" max="100" required></div>
                <div><input type="number" id="playerPositioning" placeholder="Positioning" name="playerPositioning" min="0" max="100" required></div>
            `;
        } else {
            myInput.innerHTML = `
                <div><input type="number" id="playerRating" placeholder="Rating" name="playerRating" min="0" max="100" required></div>
                <div><input type="number" id="playerPace" placeholder="Pace" name="playerPace" min="0" max="100" required></div>
                <div><input type="number" id="playerShooting" placeholder="Shooting" name="playerShooting" min="0" max="100" required></div>
                <div><input type="number" id="playerPassing" placeholder="Passing" name="playerPassing" min="0" max="100" required></div>
                <div><input type="number" id="playerDribbling" placeholder="Dribbling" name="playerDribbling" min="0" max="100" required></div>
                <div><input type="number" id="playerDefending" placeholder="Defending" name="playerDefending" min="0" max="100" required></div>
                <div><input type="number" id="playerPhysical" placeholder="Physical" name="playerPhysical" min="0" max="100" required></div>
            `;
        }
    }

    playerPositionSelect.addEventListener("change", () => {
        updateInputs(playerPositionSelect.value);
    });

    addPlayerButton.addEventListener("click", (e) => {
        e.preventDefault(); 
        const playerName = document.getElementById('playerName').value;
        const playerImg = document.getElementById('playerimg').value;
        const clubImg = document.getElementById('clubimg').value;
        const clubName = document.getElementById('clubname').value;
        const playerPosition = document.getElementById('playerPosition').value;
        const nationalityimg = document.getElementById('nationalityimg').value;
        const nationalityname = document.getElementById('nationalityname').value;

        const playeItem = document.createElement("div");
        playeItem.className = "player-item";

        if (playerPosition === 'GK') {
            const playerRating = document.getElementById('playerRating').value;
            const playerDiving = document.getElementById('playerDiving').value;
            const playerHandling = document.getElementById('playerHandling').value;
            const playerKicking = document.getElementById('playerKicking').value;
            const playerReflexes = document.getElementById('playerReflexes').value;
            const playerSpeed = document.getElementById('playerSpeed').value;
            const playerPositioning = document.getElementById('playerPositioning').value;

            playeItem.innerHTML = `
                <button class="add-to-team-btn">
                    <img src="${playerImg}" alt="${playerName}" class="player-photo">
                    <div class="player-info">
                        <h4>${playerName}</h4>
                        <p>Position: ${playerPosition}</p>
                        <div class="player-grid">
                            <div class="player-info-name"> RAT DIV HAN KIC REF SPD POS</div>
                            <div class="player-info">
                                <span>${playerRating}</span>
                                <span>${playerDiving}</span>
                                <span>${playerHandling}</span>
                                <span>${playerKicking}</span>
                                <span>${playerReflexes}</span>
                                <span>${playerSpeed}</span>
                                <span>${playerPositioning}</span>
                            </div>
                            <p><img src="${clubImg}" alt="${clubName}" class="club-logo"> ${clubName}</p>
                            <p><img src="${nationalityimg}" alt="${nationalityname}" class="flag-icon"> ${nationalityname}</p>
                        </div>
                    </div>
                </button>
            `;
        } else {
            const playerRating = document.getElementById('playerRating').value;
            const playerPace = document.getElementById('playerPace').value;
            const playerShooting = document.getElementById('playerShooting').value;
            const playerPassing = document.getElementById('playerPassing').value;
            const playerDribbling = document.getElementById('playerDribbling').value;
            const playerDefending = document.getElementById('playerDefending').value;
            const playerPhysical = document.getElementById('playerPhysical').value;

            playeItem.innerHTML = `
                <button class="add-to-team-btn">
                    <img src="${playerImg}" alt="${playerName}" class="player-photo">
                    <div class="player-info">
                        <h4>${playerName}</h4>
                        <p>Position: ${playerPosition}</p>
                        <div class="player-grid">
                            <div class="player-info-name"> RAT PAC SHO PAS DRI DEF PHY</div>
                            <div class="player-info">
                                <span>${playerRating}</span>
                                <span>${playerPace}</span>
                                <span>${playerShooting}</span>
                                <span>${playerPassing}</span>
                                <span>${playerDribbling}</span>
                                <span>${playerDefending}</span>
                                <span>${playerPhysical}</span>
                            </div>
                            <p><img src="${clubImg}" alt="${clubName}" class="club-logo"> ${clubName}</p>
                            <p><img src="${nationalityimg}" alt="${nationalityname}" class="flag-icon"> ${nationalityname}</p>
                        </div>
                    </div>
                </button>
            `;
        }

        document.getElementById("playerList").appendChild(playeItem);
    });
});

const buttons = document.querySelectorAll('.players button');

// Select the popup container
const popup = document.getElementById('playerPopup'); 
const popupCloseButton = document.getElementById('popupCloseButton'); // Button to close the popup

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const player = button.textContent.trim(); // Get the player position from button text
        
        // Initialize variables for the player's details
        let playerName = "", playerPosition = player, playerImg = "", playerRating = "", playerPace = "", playerShooting = "",
            playerPassing = "", playerDribbling = "", playerDefending = "", playerPhysical = "", clubName = "",
            nationalityName = "", clubImg = "", nationalityImg = "";
        
        // Define player details based on the position selected
        switch(player) {
            case 'st':
                const  buttons = document.querySelectorAll('.players button'); 
                 playerContent.innerHTML = `
                <div class="popup-content">
                    <button class="close-btn" id="popupCloseButton">&times;</button>
                    <img src="${playerImg}" alt="${playerName}" class="player-photo">
                    <div class="player-info">
                        <h4>${playerName}</h4>
                        <p>Position: ${playerPosition}</p>
                        <div class="player-grid">
                            <div class="player-info-name"> RAT PAC SHO PAS DRI DEF PHY</div>
                            <div class="player-info">
                                <span>${playerRating}</span>
                                <span>${playerPace}</span>
                                <span>${playerShooting}</span>
                                <span>${playerPassing}</span>
                                <span>${playerDribbling}</span>
                                <span>${playerDefending}</span>
                                <span>${playerPhysical}</span>
                            </div>
                        </div>
                        <p><img src="${clubImg}" alt="${clubName}" class="club-logo"> ${clubName}</p>
                        <p><img src="${nationalityImg}" alt="${nationalityName}" class="flag-icon"> ${nationalityName}</p>
                    </div>
                </div>
            `;
    
            case 'lm':
                playerName = "Left Midfielder";
                playerImg = "images/lm.png";
                playerRating = "80";
                playerPace = "85";
                playerShooting = "80";
                playerPassing = "85";
                playerDribbling = "88";
                playerDefending = "75";
                playerPhysical = "80";
                clubName = "Real Madrid";
                nationalityName = "Spain";
                clubImg = "images/realmadrid.png";
                nationalityImg = "images/spain.png";
                break;
            case 'cm':
                playerName = "Central Midfielder";
                playerImg = "images/cm.png";
                playerRating = "83";
                playerPace = "80";
                playerShooting = "82";
                playerPassing = "88";
                playerDribbling = "85";
                playerDefending = "80";
                playerPhysical = "85";
                clubName = "Manchester City";
                nationalityName = "England";
                clubImg = "images/manchester.png";
                nationalityImg = "images/england.png";
                break;
            case 'cdm':
                playerName = "Defensive Midfielder";
                playerImg = "images/cdm.png";
                playerRating = "86";
                playerPace = "75";
                playerShooting = "80";
                playerPassing = "88";
                playerDribbling = "84";
                playerDefending = "90";
                playerPhysical = "88";
                clubName = "Chelsea";
                nationalityName = "Germany";
                clubImg = "images/chelsea.png";
                nationalityImg = "images/germany.png";
                break;
            case 'rm':
                playerName = "Right Midfielder";
                playerImg = "images/rm.png";
                playerRating = "80";
                playerPace = "85";
                playerShooting = "80";
                playerPassing = "85";
                playerDribbling = "90";
                playerDefending = "70";
                playerPhysical = "80";
                clubName = "Paris Saint-Germain";
                nationalityName = "France";
                clubImg = "images/psg.png";
                nationalityImg = "images/france.png";
                break;
            case 'cb':
                playerName = "Center Back";
                playerImg = "images/cb.png";
                playerRating = "88";
                playerPace = "70";
                playerShooting = "65";
                playerPassing = "75";
                playerDribbling = "70";
                playerDefending = "90";
                playerPhysical = "90";
                clubName = "Bayern Munich";
                nationalityName = "Germany";
                clubImg = "images/bayern.png";
                nationalityImg = "images/germany.png";
                break;
            case 'Gk':
                playerName = "Goalkeeper";
                playerImg = "images/gk.png";
                playerRating = "90";
                playerPace = "60";
                playerShooting = "55";
                playerPassing = "75";
                playerDribbling = "60";
                playerDefending = "85";
                playerPhysical = "90";
                clubName = "Liverpool";
                nationalityName = "Brazil";
                clubImg = "images/liverpool.png";
                nationalityImg = "images/brazil.png";
                break;

        const playerContent = `
            <div class="popup-content">
                <button class="close-btn" id="popupCloseButton">&times;</button>
                <img src="${playerImg}" alt="${playerName}" class="player-photo">
                <div class="player-info">
                    <h4>${playerName}</h4>
                    <p>Position: ${playerPosition}</p>
                    <div class="player-grid">
                        <div class="player-info-name"> RAT PAC SHO PAS DRI DEF PHY</div>
                        <div class="player-info">
                            <span>${playerRating}</span>
                            <span>${playerPace}</span>
                            <span>${playerShooting}</span>
                            <span>${playerPassing}</span>
                            <span>${playerDribbling}</span>
                            <span>${playerDefending}</span>
                            <span>${playerPhysical}</span>
                        </div>
                    </div>
                    <p><img src="${clubImg}" alt="${clubName}" class="club-logo"> ${clubName}</p>
                    <p><img src="${nationalityImg}" alt="${nationalityName}" class="flag-icon"> ${nationalityName}</p>
                </div>
            </div>
        `;

   
    });
});
