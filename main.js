document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest() {
    const playerName = document.querySelector('input').value
    try {
        const response = await fetch(`https://nbafinals-api-100devs.herokuapp.com/api/${playerName}`)
        
        const data = await response.json()

        document.getElementById('points').textContent = data.points
        document.getElementById('rebounds').textContent = data.rebs
        document.getElementById('assists').textContent = data.assists
        document.getElementById('steals').textContent = data.steals
        document.getElementById('blocks').textContent = data.blocks

    } catch(error) {
        console.log(error)
    }
}