import VideoModel from "./VideoModel";

export default interface CommentModel {
  comment: string;
  video: VideoModel;
  id: string;
}
