import { API, graphqlOperation } from "aws-amplify";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { createComment, updateVideo } from "../graphql/mutations";
import { listComments } from "../graphql/queries";
import CommentModel from "../models/CommentModel";

export default function Comments({ video }: any) {
  const [comments, setComments] = useState<any[]>([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    if (comments) {
      setTimeout(() => fetchComments(), 3000);
    } else {
      fetchComments();
    }
  }, [comments]);

  async function fetchComments() {
    try {
      const commentData: any = await API.graphql(
        graphqlOperation(listComments)
      );
      const commentsState = commentData.data.listComments.items;
      const finalState: any[] = [];
      video.comments.map((commentVideo: string) => {
        const commentFind: any = commentsState.find(
          (commentRes: any) => commentRes.id === commentVideo
        );
        if (commentFind) {
          finalState.push(commentFind);
        }
      });
      setComments(finalState);
    } catch (err) {
      console.log("error fetching comments", err);
    }
  }

  async function sendComment() {
    try {
      const newComment: any = await API.graphql(
        graphqlOperation(createComment, { input: { comment } })
      );
      const commentData = newComment.data.createComment;
      const newComments = video.comments || [];
      newComments.push(commentData.id);
      await API.graphql(
        graphqlOperation(updateVideo, {
          input: { id: video.id, comments: newComments },
        })
      );
      const finalComments: any[] = [];
      setComments(finalComments.concat(comments, commentData));
      setComment("");
    } catch (err) {
      console.log("error add comment", err);
    }
  }

  return (
    <>
      <div className="commits">
        <h2>
          Queremos saber que te parecio esta clase Dejanos tus comentarios
        </h2>
        <div>
          <textarea
            name="commit"
            id=""
            value={comment}
            cols={50}
            rows={2}
            placeholder={"Escribe tu comentario..."}
            onChange={(event) => setComment(event.target.value)}
          ></textarea>
          <button className="buttonTextarea" onClick={() => sendComment()}>
            Enviar
          </button>
        </div>
      </div>
      {comments
        .slice(0)
        .reverse()
        .map((comment: CommentModel) => (
          <div className="commits">
            <div
              style={{ width: "52%", background: "#d7dbdd", margin: "0.5% 0" }}
            >
              {comment.comment}
            </div>
          </div>
        ))}
    </>
  );
}
