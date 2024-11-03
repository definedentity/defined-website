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
  return (
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
  );
}
