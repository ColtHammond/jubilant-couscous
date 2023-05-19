const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const { MongoClient } = require('mongodb');
const Task = require('./task');

const app = express();

// Define the GraphQL schema
const schema = buildSchema(`
  type Query {
    getUser(id: ID!): User
  }

  type Mutation {
    createUser(username: String!, data: String!): User
  }

  type User {
    id: ID!
    username: String!
    data: String!
  }
`);

// Implement resolvers
const root = {
	getUser: ({ id }) => {
		// Logic to fetch user data from the database based on the provided ID
	},
	createUser: ({ username, data }) => {
		// Logic to create a new user in the database with the provided username and data
	},
};

// Configure the GraphQL endpoint
app.use(
	'/graphql',
	graphqlHTTP({
		schema: schema,
		rootValue: root,
		graphiql: true, // Enable GraphiQL tool for development
	})
);

// Start the server
const port = 3000;
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/tracked-challenges'); // Replace 'mydatabase' with your database name
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to the MongoDB database
client.connect((err) => {
	if (err) {
		console.error('Failed to connect to the database:', err);
		return;
	}
	console.log('Connected to the database');
	// Proceed with setting up the GraphQL server (steps 3-6) inside the connect callback

	// Step 3: Define the resolvers for the GraphQL queries and mutations
	const resolvers = {
		getUser: ({ id }) => {
			// Logic to fetch user data from the database based on the provided ID
		},
		createUser: ({ username, data }) => {
			// Logic to create a new user in the database with the provided username and data
		},
	};

	// Step 4: Connect the resolvers to the GraphQL schema
	const { makeExecutableSchema } = require('graphql-tools');
	const executableSchema = makeExecutableSchema({ typeDefs: schema, resolvers });

	// Step 5: Configure the GraphQL endpoint with the updated executable schema
	app.use(
		'/graphql',
		graphqlHTTP({
			schema: executableSchema,
			graphiql: true, // Enable GraphiQL tool for development
		})
	);

	// Proceed with any additional setup or logic for your GraphQL server

	// ...

	// Start the server
	const port = 3000;
	app.listen(port, () => {
		console.log(`Server running on port ${port}`);
	});
});
