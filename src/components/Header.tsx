import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/Avatar";
import { Badge } from "~/components/ui/Badge";
import { Button } from "~/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/Card";
import Link from "next/link";
import React from "react";

import avatar from "~/assets/img/avatar.png";

const cardContents: Array<{ icon: React.ReactNode; text: string }> = [
  {
    icon: <i className="i-fa6-solid-comment-dots" />,
    text: "He/Him",
  },
  {
    icon: <i className="i-fa6-solid-mars" />,
    text: "Male",
  },
  {
    icon: <i className="i-fa6-solid-venus-mars" />,
    text: "Hetero",
  },
  {
    icon: <i className="i-fa6-solid-cake-candles" />,
    text: (new Date().getFullYear() - 2007).toString(),
  },
  {
    icon: <i className="i-fa6-solid-earth-asia" />,
    text: "Vietnam",
  },
  {
    icon: <i className="i-fa6-solid-language" />,
    text: "VI + EN",
  },
];

export function Header() {
  return (
    <header className="grid h-screen w-full place-items-center">
      <Card className="w-11/12 border border-white bg-black sm:w-4/5 md:w-8/12 lg:w-1/2 xl:w-2/5">
        <CardHeader>
          <CardTitle className="text-white">
            <p className="text-center text-4xl">Hi, {"I'm"} DefinedEntity</p>
            <p className="text-center text-xl text-violet-500">
              {"<Web developer & Minecraft mod developer>"}
            </p>
          </CardTitle>
          <CardDescription className="mx-auto">
            <Avatar className="h-36 w-36">
              <AvatarImage
                src={avatar.src}
                alt="avatar"
                className="object-cover"
              />
              <AvatarFallback>DE</AvatarFallback>
            </Avatar>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap items-center justify-center gap-2">
          {cardContents.map(({ icon, text }, index) => (
            <Badge key={index} className="flex cursor-pointer gap-1">
              {icon}
              {text}
            </Badge>
          ))}
        </CardContent>
        <CardFooter className="flex flex-wrap items-center justify-center gap-2">
          <Button variant="outline" asChild>
            <Link href="https://github.com/definedentity" target="_blank">
              <i className="i-fa6-brands-github"></i>GitHub
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="https://www.youtube.com/@DrDefined">
              <i className="i-fa6-brands-youtube text-red-600"></i>
              YouTube
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="mailto:hello@definedentity.dev" target="_blank">
              <i className="i-fa6-solid-envelope"></i>Email
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </header>
  );
}
