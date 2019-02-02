const customers = require('./data')


//get 

const CustomerFunction = {

    getCustomer(index) {
        return customers[index]
    },

    //put 

    addCustomer(newName, newAge, newHeight, newWeight) {
        customers.push({
            name: newName,
            age: newAge,
            height: newHeight,
            weight: newWeight
        })
        return customers
    },

    // post 

    changeAge(index, newAge) {
        customers[index].age = newAge
        return customers
    }
}


module.exports = CustomerFunction