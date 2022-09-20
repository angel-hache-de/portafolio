import { SOCIAL_URL } from "../database/projects";

export interface SocialMedia {
  media: string;
  image: SOCIAL_URL;
  link?: string;
}
