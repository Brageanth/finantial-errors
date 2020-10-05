import CommentModel from "./CommentModel";

export default interface VideoModel {
  title: string;
  url: string;
  pdf: string;
  date: string;
  thumbnail: string;
  id: string;
  comments: Array<CommentModel>;
}
