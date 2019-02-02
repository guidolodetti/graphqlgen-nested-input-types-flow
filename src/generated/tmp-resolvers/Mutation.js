/* @flow */
import type { Mutation_Resolvers } from "../graphqlgen";

export const Mutation: Mutation_Resolvers = {
  test: (parent, args, ctx, info) => {
    throw new Error("Resolver not implemented");
  }
};
