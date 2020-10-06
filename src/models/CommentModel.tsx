import VideoModel from "./VideoModel";

export default interface CommentModel {
  comment: string;
  video: VideoModel;
  name: string;
  id: string;
}
