"use client";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/Card";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/Avatar";
import { Button } from "~/components/ui/Button";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export interface ProjectItemProps {
  name: string;
  description: string;
  link: string;
  image: string;
}

export function ProjectItem({
  name,
  description,
  link,
  image,
}: ProjectItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
    >
      <Card className="w-full bg-black">
        <CardHeader>
          <CardTitle className="text-primary-foreground">
            <Avatar className="h-12 w-12">
              <AvatarImage src={image} alt={name} />
              <AvatarFallback>{name}</AvatarFallback>
            </Avatar>
            {name}
          </CardTitle>
          <CardDescription className="text-slate-300">
            {description}
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button asChild>
            <Link href={link} target="_blank">
              <i className="i-fa6-brands-github" />
              GitHub
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
