require("dotenv").config()
const fetch = require("isomorphic-fetch")
const { createHttpLink } = require("apollo-link-http")

module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "hasura",
        fieldName: "blog",
        createLink: () => {
          return createHttpLink({
            uri:
              "https://hasura-gatsby-livestream.herokuapp.com/v1alpha1/graphql",
            headers: {
              "x-hasura-admin-secret":
                process.env.GATSBY_HASURA_GRAPHQL_ADMIN_SECRET,
            },
            fetch,
          })
        },
      },
    },
  ],
}
