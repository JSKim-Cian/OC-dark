import { GraphQLServer } from "graphql-yoga"
import resolvers from "./graphql/resolvers"

/* graphQL configuration */
const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers
})

server.start(() => console.log(`Graphql Server Running... on Server of ${[process.env.USERNAME]}`))
