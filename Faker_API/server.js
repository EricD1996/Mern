// import { faker } from '@faker-js/faker'
const port = 8040
const express = require('express')
const {faker} = require("@faker-js/faker")
const app = express()
app.use(express.json())

const createUser = () => {
    const user = {
            password: faker.internet.password(),
            email: faker.internet.email(),
            phoneNumber: faker.phone.number(),
            lastName: faker.name.lastName(),
            firstName: faker.name.firstName(),
            _id: faker.datatype.uuid()
    }
    return user;
}

const createCompany = () => {
    const company = {
        _id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.random.locale(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
    return company;
}

const createBoth = () => {
    const both = [
        createUser(),
        createCompany()
    ]
    return both;
}
app.get('/api/users/new', (req,res) => {
    return res.json({
        status: "success",
        msg: createUser()
    })
})

app.get('/api/companies/new', (req,res) => {
    return res.json({
        status: "success",
        msg: createCompany()
    })
})

app.get('/api/user/company', (req,res) => {
    return res.json({
        status: "success",
        msg: (createBoth())
    })
})

app.listen(port, () => {
    console.log(`Listening on port  ${port}`)
})