import React from "react"
import { graphql, Link } from "gatsby"
import gql from "graphql-tag"
import { useSubscription } from "react-apollo-hooks"

export const query = graphql`
  query($id: hasura_uuid!) {
    blog {
      post: posts_by_pk(id: $id) {
        id
        title
        author {
          firstName
          lastName
        }
      }
    }
  }
`

const GET_COMMENTS = gql`
  subscription($id: uuid!) {
    comments(where: { post_id: { _eq: $id } }) {
      id
      content
    }
  }
`

const Comments = ({ id }) => {
  const { data, loading, error } = useSubscription(GET_COMMENTS, {
    suspend: false,
    variables: { id },
  })

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>
  }

  return (
    <ul>
      {data.comments.map(comment => (
        <li key={comment.id}>{comment.content}</li>
      ))}
    </ul>
  )
}

export default ({ data }) => {
  const post = data.blog.post

  return (
    <div style={{ margin: "5rem auto", width: "550px" }}>
      <Link to="/">&larr; back to all posts</Link>
      <h1>{post.title}</h1>
      <p>
        Written by {post.author.firstName} {post.author.lastName}.
      </p>
      <p>{post.content}</p>
      <Comments id={post.id} />
    </div>
  )
}
