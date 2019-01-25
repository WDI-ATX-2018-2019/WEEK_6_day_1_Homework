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
    return customers[index];
  },
  addCustomer(obj) {
    customers.push(obj);
  },
  deleteCustomer(index) {
    customers.splice(index, 1);    
  },
  updateCustomer(obj) {
    let index = obj.index;
    customers[index].name = obj.name;
    customers[index].age = obj.age;
    customers[index].sex = obj.sex;
    customers[index].likes = obj.likes;
  }
}