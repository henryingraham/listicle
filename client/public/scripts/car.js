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
        document.getElementById('name').textContent = car.Name
        document.getElementById('manufacturer').textContent = 'Manufacturer: ' + car["Manufacturer"]
        document.getElementById('top-speed').textContent = 'Top Speed (mph): ' + car['Top Speed (mph)']
        document.getElementById('0-60').textContent = '0-60 mph (seconds): ' + car["0-60 mph (seconds)"]
        document.getElementById('engine').textContent = 'Engine: ' + car.Engine
        document.getElementById('horsepower').textContent = 'Horsepower: ' + car.Horsepower
        document.getElementById('price').textContent = 'Price (starting): ' + car['Price (starting)']
        document.title = `Listicle - ${car.Name}`
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Cars Available 😞'
        carContent.appendChild(message)
    }
}
renderCar()