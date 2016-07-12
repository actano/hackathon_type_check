class Animal {
  constructor(name) {
    this.name = name
  }

  getName() {
    return this.name
  }
}

class Dog extends Animal {
  constructor(name, age) {
    super(name)
    this.age = age
  }

  getAge() {
    return this.age
  }
}

function inc(x) {
  return x + 1
}

module.exports = {
  Animal,
  Dog,
  inc
}
