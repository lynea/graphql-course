import { gql } from "apollo-server";

const typeDefs = gql`
  enum PetType {
    DOG
    CAT
    BIRD
  }

  type User {
    email: String!
    avatar: String
    friends: [User]!
  }

  type Pet {
    name: String
    age: Float
    type: PetType
  }

  input allPetsInput {
    maxAge: Float
    type: PetType
  }

  input createPetInput {
    name: String
    age: Float
    type: PetType
  }

  type Query {
    me: User!
    allPets(input: allPetsInput): [Pet!]
    pet: Pet!
  }

  type Mutation {
    createPet(input: createPetInput!): Pet
  }
`;

export default typeDefs;
