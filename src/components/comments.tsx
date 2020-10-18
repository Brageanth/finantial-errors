import { API, graphqlOperation } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { createComment, updateVideo } from "../graphql/mutations";
import { listComments } from "../graphql/queries";
import InfiniteScroll from "react-infinite-scroll-component";
import CommentModel from "../models/CommentModel";
import moment from "moment";

export default function Comments({ videoId }: any) {
  const [comments, setComments] = useState<any>();
  const [comment, setComment] = useState<string>();
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [nextToken, setNextToken] = useState();

  useEffect(() => {
    if (comments) {
      setTimeout(() => fetchComments(), 30000);
    } else {
      fetchComments();
    }
  }, [comments]);

  async function fetchComments() {
    try {
      const commentData: any = await API.graphql(
        graphqlOperation(listComments, {
          filter: {
            videoId: {
              eq: videoId,
            },
          },
          nextToken,
        })
      );
      const commentsItems = commentData.data.listComments.items;

      setNextToken(commentData.data.listComments.nextToken);
      const concatComments = comments
        ? [].concat(comments, commentsItems)
        : commentsItems;
      const finalComments: any = [];

      concatComments.map((com: any) =>
        finalComments.find((ment: any) => com.comment === ment.comment)
          ? true
          : finalComments.push(com)
      );

      setComments(
        finalComments.sort((comment1: any, comment2: any) =>
          moment(comment1.createdAt).isAfter(comment2.createdAt) ? -1 : 1
        )
      );
    } catch (err) {
      console.log("error fetching comments", err);
    }
  }

  async function sendComment() {
    try {
      setLoading(true);
      const newComment: any = await API.graphql(
        graphqlOperation(createComment, { input: { comment, name, videoId } })
      );
      const commentData = newComment.data.createComment;

      const finalComments: [] = [];
      setComments(finalComments.concat(commentData, comments));
      setComment("");
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log("error add comment", err);
    }
  }

  return (
    <>
      <div className="commits">
        <h2>
          {videoId === "5"
            ? "Déjanos tus comentarios"
            : "Queremos saber que te pareció esta clase. Déjanos tus comentarios"}
        </h2>
        <div style={{ margin: "1% 0" }}>
          <input
            onChange={(event) => setName(event.target.value)}
            placeholder={"Nombre"}
            style={{ width: "100%", border: "none" }}
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
          {loading || (
            <button className="buttonTextarea" onClick={() => sendComment()}>
              Enviar
            </button>
          )}
        </div>
      </div>
      <InfiniteScroll
        dataLength={comments?.length || 0}
        next={() => fetchComments()}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {comments?.map((comment: CommentModel) => (
          <div className="commits">
            <div
              style={{
                background: "#d7dbdd",
                margin: "0.5% 0",
                textAlign: "left",
                fontFamily: "poppins",
              }}
            >
              <span
                style={{
                  fontFamily: "aileron-black, poppins",
                  fontWeight: 700,
                }}
              >
                {comment.name || ""}
              </span>
              <br />
              {comment.comment}
            </div>
          </div>
        ))}
      </InfiniteScroll>
      <div>Cargar más</div>
    </>
  );
}
