import {
  Card,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = async () => {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts: { id: number; title: string; url: string }[]) => posts);

  return (
    <main className="container max-w-[600px] pt-24 text-secondary">
      <h2 className="mb-6 text-3xl">Posts:</h2>
      {posts.map((post) => (
        <Link  key={post.id} href={`/posts/${post.id}`}>
          <Card className="mb-4">
            <CardContent className="flex p-0 items-center">
              <Image className="mr-4" width={100} height={100} src={'https://via.placeholder.com/150/92c952'} alt="Post image"/><p className="hover:underline">{post.title}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </main>
  );
};

export default Page;
