let url = 'https://open.faceit.com/data/v4/players?nickname=Static_X';
let bearer = 'Bearer 8c0f3148-1ea1-43d5-be95-fec82dd42948';
let playerData = 
    fetch(url, {
        headers: {
            'Authorization': bearer,
            'Content-Type': 'application/json'
        }
        })
    .then(response => response.json())
    .then(playerDetails => alert(playerDetails.nickname));
console.log(playerData)