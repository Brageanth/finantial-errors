/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
export const onCreateVideo = /* GraphQL */ `
  subscription OnCreateVideo {
    onCreateVideo {
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
export const onUpdateVideo = /* GraphQL */ `
  subscription OnUpdateVideo {
    onUpdateVideo {
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
export const onDeleteVideo = /* GraphQL */ `
  subscription OnDeleteVideo {
    onDeleteVideo {
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
