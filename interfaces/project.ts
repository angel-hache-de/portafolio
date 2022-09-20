import { TECH_PICURL } from "../database/projects";

export interface Project {
  name: string;
  description: string;
  techs: TECH_PICURL[];
  images: string[];
  linkToSite?: string;
}
