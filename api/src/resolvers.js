const pets = [
  {
    name: "spike",
    age: 0.5,
  },
  {
    name: "Balou",
    age: 7,
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
      };
    },
    allPets(_, { input }) {
      if (input && input.maxAge) {
        return pets.filter((pet) => pet.age <= maxAge);
      } else {
        return pets;
      }
    },
  },
};

export default resolvers;
