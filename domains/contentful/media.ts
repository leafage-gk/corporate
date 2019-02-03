import { Sys } from 'contentful';

export interface ImageSizeResponse {
  width: number;
  height: number;
}

export interface ImageDetailsResponse {
  size: number;
  image: ImageSizeResponse;
}

export interface FileResponse {
  contentType: string;
  details: ImageDetailsResponse;
  fileName: string;
  url: string;
}

export interface MediaResponse {
  sys: Sys;
  fields: {
    title: string;
    file: FileResponse;
  };
}
