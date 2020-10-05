import { type } from "os";
import CommentModel from "../models/CommentModel";
import VideoModel from "../models/VideoModel";

export const SET_VIDEOS = "SET_VIDEOS";
export const ADD_COMMENT = "ADD_COMMENT";

export interface ActionProps {
  type: string;
  payload: Array<VideoModel>;
}

export interface StateProps {
  videos: Array<VideoModel>;
  comments: Array<CommentModel>;
}

const Reducer = (state: StateProps, action: ActionProps) => {
  switch (action.type) {
    case SET_VIDEOS:
      return {
        ...state,
        videos: action.payload,
      };
    case ADD_COMMENT:
      return {
        ...state,
        videos: state.videos.concat(action.payload),
      };
    default:
      return state;
  }
};

export default Reducer;
