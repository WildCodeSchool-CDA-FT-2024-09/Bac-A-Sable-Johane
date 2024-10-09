// import express from "express";
// import router from "./router";
// import * as dotenv from "dotenv";
// import cors from "cors";
// dotenv.config();

// const { API_URL } = process.env;

// const app = express();

// app.use(
//   cors({
//     origin: process.env.FRONTEND_URL  as string
//   })
// );

// app.use(express.json());



// app.use('/api', router);

// app.listen(API_URL , async () => {
//   await dataSource.initialize();
//   console.log(`Serveur is listenning on http://localhost:${API_URL }`);
// });


import { ApolloServer } from "@apollo/server"; // preserve-line
import { startStandaloneServer } from "@apollo/server/standalone";
import { dataSource } from "./db/client";
import "reflect-metadata";
import { buildSchema } from "type-graphql";

import RepoResolver from "./repos/repo.resolver"
import LangResolver from "./langs/lang.resolver";
import StatusResolver from "./status/status.resolver";

// import repos from "../data/repos.json";
// import langs from "../data/langs.json";
// import raws from "../data/raw.json"

// const typeDefs = `#graphql
//   # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

//   # This "Book" type defines the queryable fields for every book in our data source.
//   type Repo {
//     id: String
//     name: String
//     url: String
//   }

//   type Lang { 
//   id: String
//   label: String 
//   }

//   type Raw {
//   id: String
//   isPrivate: Boolean
//   languages : [Lang]
//   name: String
//   url : String
//   }

//   # The "Query" type is special: it lists all of the available queries that
//   # clients can execute, along with the return type for each. In this
//   # case, the "books" query returns an array of zero or more Books (defined above).
//   type Query {
//     repos: [Repo]
//     langs: [Lang]
//     raws: [Raw]
//   }
// `;

// const resolvers = {
//   Query: {
//     repos: () => repos,
//     langs: () => langs,
//     raws: () => raws,
//   },
// };

// Creation du schéma à partir des resolvers
(async () => {
  await dataSource.initialize();
  const schema = await buildSchema({
    resolvers : [RepoResolver, LangResolver, StatusResolver],

})

const server = new ApolloServer({
  // typeDefs,
  // resolvers,
  schema,
});

  const { url } = await startStandaloneServer(server, {
    listen: { port: 3001 },
  });

  console.log(`🚀  Server ready at: ${url}`);
})();