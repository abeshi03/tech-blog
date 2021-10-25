import { ImageType } from "../Image";

export type Profile = {
  familyName: string;
  lastName: string;
  role: string;
  image: ImageType
  createdAt: string;
  publishedAt: string;
  revisedAt: string;
  updatedAt: string
}
