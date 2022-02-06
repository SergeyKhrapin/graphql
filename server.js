const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql')

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve: () => 'Hello, world',
      },
      argon: {
        type: GraphQLString,
        resolve: () => '18',
      },
    },
  }),
})

const app = express()

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}))

app.listen(3000)
