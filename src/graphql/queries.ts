/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      comment
      video {
        title
        url
        pdf
        date
        thumbnail
        id
        comments {
          comment
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        comment
        video {
          title
          url
          pdf
          date
          thumbnail
          id
          createdAt
          updatedAt
        }
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getVideo = /* GraphQL */ `
  query GetVideo($id: ID!) {
    getVideo(id: $id) {
      title
      url
      pdf
      date
      thumbnail
      id
      comments {
        comment
        video {
          title
          url
          pdf
          date
          thumbnail
          id
          createdAt
          updatedAt
        }
        id
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listVideos = /* GraphQL */ `
  query ListVideos(
    $filter: ModelVideoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVideos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        title
        url
        pdf
        date
        thumbnail
        id
        comments {
          comment
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
