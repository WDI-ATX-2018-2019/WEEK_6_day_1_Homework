
const customerData = [{
        name: 'Allen',
        age: 22,
        location: 'Midland, TX',
        customer: false
    },
    {
        name: 'Joe',
        age: 22,
        location: 'Amarillo, TX',
        customer: false
    },
    {
        name: 'Lenny',
        age: 22,
        location: 'Tuscaloosa, MS',
        customer: false
    },
    {
        name: 'Rikk',
        age: 22,
        location: 'OC, CA',
        customer: false
    },
    {
        name: 'Tammy',
        age: 22,
        location: 'Atlanta, GA',
        customer: false
    }
]

module.exports = {
    getCustomers() {
        return customerData.join(',')
    },
    getCustomer(id) {
        return customerData[id]
    }
}