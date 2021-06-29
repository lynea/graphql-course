const typeDefs = `
  type User {
   email: String!
   avatar: String
   friends: [User]!
  }

  type Pet {
      name: String
      age: Float
  }

  input allPetsInput {
    maxAge: Float
    name: String
  }
  
  type Query {
      me: User!
      allPets(input: allPetsInput): [Pet!]
      pet: Pet!

  }

`;

export default typeDefs;
