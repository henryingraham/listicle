const renderCar = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop())

    const response = await fetch('/cars')
    const data = await response.json()
    

    const carContent = document.getElementById('car-content')

    let car
    car = data.find(car => car.id === requestedID)
console.log(car)
    if (car){
        document.getElementById('image').src = car.image
        document.getElementById('name').textContent = car.name
        document.getElementById('manufacturer').textContent = 'Manufacturer: ' + car.manufacturer
        document.getElementById('top-speed').textContent = 'Top Speed (mph): ' + car.topSpeed
        document.getElementById('0-60').textContent = '0-60 mph (seconds): ' + car.acceleration
        document.getElementById('engine').textContent = 'Engine: ' + car.engine
        document.getElementById('horsepower').textContent = 'Horsepower: ' + car.horsepower
        document.getElementById('price').textContent = 'Price (starting): ' + car.price
        document.title = `Listicle - ${car.name}`
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Cars Available 😞'
        carContent.appendChild(message)
    }
}
renderCar()