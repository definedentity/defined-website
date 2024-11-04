import { addQuotes } from "~/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/Card";

export function AboutMe() {
  return (
    <section className="h-full w-full">
      <p className="py-6 text-center text-3xl text-white">About Me</p>
      <div>
        <Card className="mx-auto h-full w-11/12 border border-white bg-black text-white">
          <CardHeader>
            <CardTitle>About Me</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{`- I'm Toby, my full name is ${addQuotes("Nguyen Minh Tho")}, known online as ${addQuotes("DefinedEntity")} or ${addQuotes("defined")}. I'm a self-taught web developer and Minecraft mod developer.`}</p>
            <p>{`- I'm currently studying at hight school (the final year).`}</p>
            <p>{`- I like gaming, anime, and watching films. My favourite games are Minecraft, Satisfactory, and Subnautica. For shows, I like How I Met Your Mother and Hannibal. Music-wise, I${"’"}m a fan of YOASOBI and J-Pop.`}</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
