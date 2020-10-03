/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateVideoInput = {
  id?: string | null,
  title: string,
  url: string,
  pdf?: string | null,
  date: string,
};

export type ModelVideoConditionInput = {
  title?: ModelStringInput | null,
  url?: ModelStringInput | null,
  pdf?: ModelStringInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelVideoConditionInput | null > | null,
  or?: Array< ModelVideoConditionInput | null > | null,
  not?: ModelVideoConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateVideoInput = {
  title?: string | null,
  url?: string | null,
  pdf?: string | null,
  date?: string | null,
};

export type DeleteVideoInput = {
  id?: string | null,
};

export type ModelVideoFilterInput = {
  title?: ModelStringInput | null,
  url?: ModelStringInput | null,
  pdf?: ModelStringInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelVideoFilterInput | null > | null,
  or?: Array< ModelVideoFilterInput | null > | null,
  not?: ModelVideoFilterInput | null,
};

export type CreateVideoMutationVariables = {
  input: CreateVideoInput,
  condition?: ModelVideoConditionInput | null,
};

export type CreateVideoMutation = {
  createVideo:  {
    __typename: "Video",
    id: string,
    title: string,
    url: string,
    pdf: string | null,
    date: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateVideoMutationVariables = {
  input: UpdateVideoInput,
  condition?: ModelVideoConditionInput | null,
};

export type UpdateVideoMutation = {
  updateVideo:  {
    __typename: "Video",
    id: string,
    title: string,
    url: string,
    pdf: string | null,
    date: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteVideoMutationVariables = {
  input: DeleteVideoInput,
  condition?: ModelVideoConditionInput | null,
};

export type DeleteVideoMutation = {
  deleteVideo:  {
    __typename: "Video",
    id: string,
    title: string,
    url: string,
    pdf: string | null,
    date: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetVideoQueryVariables = {
  id: string,
};

export type GetVideoQuery = {
  getVideo:  {
    __typename: "Video",
    id: string,
    title: string,
    url: string,
    pdf: string | null,
    date: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListVideosQueryVariables = {
  filter?: ModelVideoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVideosQuery = {
  listVideos:  {
    __typename: "ModelVideoConnection",
    items:  Array< {
      __typename: "Video",
      id: string,
      title: string,
      url: string,
      pdf: string | null,
      date: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateVideoSubscription = {
  onCreateVideo:  {
    __typename: "Video",
    id: string,
    title: string,
    url: string,
    pdf: string | null,
    date: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateVideoSubscription = {
  onUpdateVideo:  {
    __typename: "Video",
    id: string,
    title: string,
    url: string,
    pdf: string | null,
    date: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteVideoSubscription = {
  onDeleteVideo:  {
    __typename: "Video",
    id: string,
    title: string,
    url: string,
    pdf: string | null,
    date: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
