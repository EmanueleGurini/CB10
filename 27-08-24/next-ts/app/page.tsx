import Card from "@/components/card";

export interface IPost {
  id: string;
  category: string;
  title: string;
  description: string;
  author: IAuthor;
}

export interface IAuthor {
  name: string;
  role: string;
}

const blogpost: IPost = {
  id: "39393",
  category: "pippo",
  title: "pluto",
  description: "topolino",
  author: {
    name: "pippo",
    role: "ciao",
  },
};

export default function Home() {
  return (
    <main>
      <h1>hello, next</h1>

      <Card post={blogpost} />
    </main>
  );
}
