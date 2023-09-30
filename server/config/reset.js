import { pool } from './database.js'
import "./dotenv.js"
import carData from '../data/cars.js'

const createCarsTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS cars;

        CREATE TABLE IF NOT EXISTS cars (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            manufacturer VARCHAR(225) NOT NULL,
            topSpeed VARCHAR(255) NOT NULL,
            acceleration VARCHAR(255) NOT NULL,
            engine VARCHAR(255) NOT NULL,
            horsepower VARCHAR(255) NOT NULL,
            price VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL
            
        )
    `

    try {
        const res = await pool.query(createTableQuery)
        console.log('🎉 cars table created successfully')
    } catch (err) {
        console.error('⚠️ error creating cars table', err)
    }
}

const seedCarsTable = async () => {
    await createCarsTable()

    carData.forEach((car) => {
        const insertQuery = {
            text: 'INSERT INTO cars (name, manufacturer, topSpeed, acceleration, engine, horsepower, price, image) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)'
        }

        const values = [
            car.name,
            car.manufacturer,
            car.topSpeed,
            car.acceleration,
            car.engine,
            car.horsepower,
            car.price,
            car.image
        ]

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting car', err)
                return
            }

            console.log(`✅ ${car.name} added successfully`)
        })
    })
}

seedCarsTable()