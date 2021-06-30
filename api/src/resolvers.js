let pets = [
  {
    name: "spike",
    age: 0.5,
    type: "DOG",
  },
  {
    name: "Balou",
    age: 7,
    type: "Dog",
  },
];

const resolvers = {
  Query: {
    me() {
      return {
        email: "test",
        avatar: "test",
        friends: [],
      };
    },
    pet() {
      return {
        name: "spike",
        age: 5,
        type: "DOG",
      };
    },
    allPets(_, { input }) {
      console.log(input);
      if (input && input.maxAge) {
        return pets.filter((pet) => pet.age <= input.maxAge);
      } else {
        return pets;
      }
    },
  },
  Mutation: {
    createPet(_, { input }) {
      pets = [...pets, input];
      return input;
    },
  },
};

export default resolvers;
