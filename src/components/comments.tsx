import { API, graphqlOperation } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { createComment, updateVideo } from "../graphql/mutations";
import { listComments } from "../graphql/queries";
import CommentModel from "../models/CommentModel";

export default function Comments({ video, videoId }: any) {
  const [comments, setComments] = useState<any[]>([]);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");

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

      setComments(
        commentsState.filter((commentRes: any) =>
          videoId === "1"
            ? !commentRes.videoId
            : commentRes.videoId === video.id
        )
      );
    } catch (err) {
      console.log("error fetching comments", err);
    }
  }

  async function sendComment() {
    try {
      const newComment: any = await API.graphql(
        graphqlOperation(createComment, { input: { comment, name, videoId } })
      );
      const commentData = newComment.data.createComment;
      const newComments = video.comments.slice(0) || [];
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
          Queremos saber que te pareció esta clase. Déjanos tus comentarios
        </h2>
        <div style={{ margin: "1% 0" }}>
          <input
            onChange={(event) => setName(event.target.value)}
            placeholder={"Nombre"}
            style={{ width: "100%", border: "none", padding: "1%" }}
          />
        </div>
        <div>
          <textarea
            name="commit"
            id=""
            value={comment}
            style={{ width: "100%" }}
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
              style={{
                background: "#d7dbdd",
                margin: "0.5% 0",
                textAlign: "left",
                fontFamily: "aileron",
              }}
            >
              <span style={{ fontFamily: "aileron-black" }}>
                {comment.name || ""}
              </span>
              <br />
              {comment.comment}
            </div>
          </div>
        ))}
    </>
  );
}
