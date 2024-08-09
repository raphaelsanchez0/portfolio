import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { ProjectInterface, Skill } from "@/utils/types";
import { badgeVariants } from "@/components/ui/badge";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { Dialog, DialogHeader } from "../ui/dialog";
import {
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Project({
  title,
  description,
  imageSrc,
  skills,
  githubLink,
  liveLink,
}: ProjectInterface) {
  return (
    <Card className="project-card">
      <div className="overflow-hidden rounded-lg w-full flex justify-center">
        <Image
          src={imageSrc}
          alt="AssignMint"
          width={1000}
          height={1000}
          quality={100}
        />
      </div>
      <div className="flex gap-1 py-4">
        {skills.map((skill, index) => (
          <a
            href={skill.link}
            className={`${badgeVariants({ variant: "default" })} border-none`}
            target="_blank"
            style={{ backgroundColor: skill.color }}
          >
            {skill.name}
          </a>
        ))}
      </div>
      <CardHeader className="project-card-header">
        <CardTitle>
          <div className="flex gap-2">
            {title}
            {liveLink && (
              <a href={liveLink} target="_blank">
                <ExternalLink size={20} color="white" />
              </a>
            )}
            {githubLink ? (
              <a href={githubLink} target="_blank">
                <Github size={20} color="white" />
              </a>
            ) : (
              <Dialog>
                <DialogTrigger asChild>
                  <button>
                    <Github size={20} color="white" />
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Sorry, this project is private</DialogTitle>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
