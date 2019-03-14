# Blog w/Realtime Comments Using Hasura + Gatsby

This is an app that was built on [Jason’s livestream, _Learn With Jason_][livestream].

[Watch the livestream][livestream] to learn how to build this yourself.

[livestream]: https://www.youtube.com/watch?v=HTEGGndT3zY&t=0s&list=PLz8Iz-Fnk_eTpvd49Sa77NiF8Uqq5Iykx&index=2

## NOTE: This App Needs Better Authentication

Currently, this app uses the `GATSBY_HASURA_GRAPHQL_ADMIN_SECRET` value to access the Hasura GraphQL API. This is fine for a demo, but **it is not secure for a production app.**

See [Hasura’s docs on authentication](https://docs.hasura.io/1.0/graphql/manual/auth/index.html) to make sure your app is production-ready.
