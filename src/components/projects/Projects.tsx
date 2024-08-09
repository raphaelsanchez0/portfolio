import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import Project from "../project/Project";
import { ProjectInterface } from "@/utils/types";

const projects: ProjectInterface[] = [
  {
    title: "AssignMint",
    description:
      "A full stack task management web app with an integrated calender, an intuitive UI, and user authentication.",
    imageSrc: "/images/assignmint.png",
    skills: [
      {
        name: "React",
        color: "#51aec4",
        link: "https://reactjs.org/",
      },
      {
        name: "TypeScript",
        color: "#3178c6",
        link: "https://www.typescriptlang.org/",
      },
      {
        name: "PostgreSQL",
        color: "#336791",
        link: "https://www.postgresql.org/",
      },
      {
        name: "Supabase",
        color: "#46a67c",
        link: "https://supabase.com/",
      },
    ],
    githubLink: "https://github.com/raphaelsanchez0/assignmint",
    liveLink: "https://assignmint.tech/",
  },
  {
    title: "AssignMint",
    description:
      "A full stack task management web app with an integrated calender, an intuitive UI, and user authentication.",
    imageSrc: "/images/assignmint.png",
    skills: [
      {
        name: "React",
        color: "#51aec4",
        link: "https://reactjs.org/",
      },
      {
        name: "TypeScript",
        color: "#3178c6",
        link: "https://www.typescriptlang.org/",
      },
      {
        name: "PostgreSQL",
        color: "#336791",
        link: "https://www.postgresql.org/",
      },
      {
        name: "Supabase",
        color: "#46a67c",
        link: "https://supabase.com/",
      },
    ],
  },
];

export default function Projects() {
  return (
    <div className="w-full py-6">
      <h2 className="lg:text-3xl font-semibold text-center pb-7">
        Selected Projects
      </h2>
      <div className="flex flex-col">
        {projects.map((project, index) => (
          <Project
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            skills={project.skills}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
