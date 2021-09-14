// Animal "Node"
class Animal{
  constructor(type){
    this.type = type;
    this.dateAdded = Date.Now();
  }
}

// Holds queues
class AnimalShelter{
  constructor(){
    this.dogs = new Queue();
    this.cats = new Queue();
  }

  enqueue(animal){
    if (animal.type.toLowerCase() === 'dog') {
      this.dogs.enqueue(animal);
    } else {
      this.cats.enqueue(animal);
    }
  }

  dequeueAny(){
    let dog = this.dogs.peek();
    let cat = this.cats.peek();
    let dogTime = dog.dateAdded.getTime();
    let catTime = cat.dateAdded.getTime();
    if (dogTime < catTime) {
      return this.dogs.dequeue();
    } else {
      return this.cats.dequeue();
    }
  }

  dequeueDog(){
    if (this.dogs.isEmpty()) {
      return null
    } else {
      return this.dogs.dequeue()
    }
  }

  dequeueCat(){
    if (this.cats.isEmpty()) {
      return null
    } else {
      return this.cats.dequeue()
    }
  }
}