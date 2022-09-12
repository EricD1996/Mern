const port = 8000
const express = require('express')
const app = express()
app.use(express.json())

app.get('/api/cities', (req,res) => {
    const cities = [
        {
            id: 1,
            name: 'Aogashima',
            population: 170,
        },
        {
            id: 2,
            name: 'Longyearbyen',
            population: 2144,
        },
        {
            id: 3,
            name: 'Kennedy Meadows',
            population: 28,
        }
    ]
    return res.json(cities)
})

app.put('/api/cities/:id', (req,res) => {
    return res.json({
        status : "success",
        msg : `Updated city id: ${req.params.id}`,
        updatedCity: req.body
    })
})


app.delete("/api/cities/:id", (req,res) => {
    const {id} = req.params
    console.log(req.params)
    return res.json({
        status: "success",
        msg: `Deleted city id: ${id}`
    })
})


app.get('/api/city/:id', (req, res) => {
    const {id} = req.params
    const cities = [
        {
            id: 1,
            name: 'Aogashima',
            population: 170,
        },
        {
            id: 2,
            name: 'Longyearbyen',
            population: 2144,
        },
        {
            id: 3,
            name: 'Kennedy Meadows',
            population: 28,
        }
    ]
    const cityToBeReturned = cities.filter((city) => {
        return city.id == id
    })
    return res.json({
        status: "success",
        city: cityToBeReturned
    })
})


app.post('/api/cities', (req,res) => {
    console.log(req.body)
    return res.json({
        status: "success",
        city: req.body
    })
})

app.get('/api/',(req,res) => {
    return res.send({hello: "world"})
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})