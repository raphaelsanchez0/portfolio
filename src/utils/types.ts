import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Skill {
  name: string;
  color: string;
  link: string;
}

export interface ProjectInterface {
  title: string;
  description: string;
  imageSrc: string | StaticImport;
  skills: Skill[];
  liveLink?: string;
  githubLink?: string;
}
