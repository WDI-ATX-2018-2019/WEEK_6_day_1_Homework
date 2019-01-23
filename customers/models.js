const customers = [
  {
    name: 'Cassie',
    age: 19,
    sex: 'Female',
    likes: 'makeup'
  },
  {
    name: 'Chris',
    age: 21,
    sex: 'Male',
    likes: 'video games'
  },
  {
    name: 'Ava',
    age: 6,
    sex: 'Female',
    likes: 'LOL'
  },
  {
    name: 'Liliana',
    age: 4,
    sex: 'Female',
    likes: 'barbies'
  },
  {
    name: 'Judy',
    age: 25,
    sex: 'Female',
    likes: 'crafts'
  },
  {
    name: 'Liam',
    age: 9,
    sex: 'Male',
    likes: 'minecraft'
  },
  {
    name: 'Freya',
    age: 1,
    sex: 'Female',
    likes: 'food'
  }
]

module.exports = {
  getCustomers() {
    cow = customers.toString()
    return customers;
  },
  getCustomerIndex(index) {
    console.log(index);
    return customers[index];
  }
}