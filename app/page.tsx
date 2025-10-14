"use client";

import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import { UserButton, useUser } from "@stackframe/stack";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 bg-background p-4 border-b-2 border-slate-200 dark:border-slate-800 flex flex-row justify-between items-center">
        <span>Stack Auth + Convex + Next.js</span>
        <UserButton />
      </header>
      <main className="p-8 flex flex-col gap-16">
        <h1 className="text-4xl font-bold text-center">Stack Auth + Convex + Next.js</h1>
        <Content />
      </main>
    </>
  );
}

function Content() {
  const user = useUser()
  const requiresUser = useMutation(api.myFunctions.requiresUser);

  const handleRequiresUser = async () => {
    try {
      const user = await requiresUser();
      alert(`Success, current user is ${user.primaryEmail}`);
    } catch {
      alert("Error: this route requires a user to be signed in");
    }
  };

  return (
    <div className="flex flex-col gap-8 max-w-xl mx-auto">
      <p>Welcome {user?.primaryEmail ?? "Anonymous"}!</p>
      <p>
        Edit{" "}
        <code className="text-sm font-bold font-mono bg-slate-200 dark:bg-slate-800 px-1 py-0.5 rounded-md">
          convex/myFunctions.ts
        </code>{" "}
        to change your backend
      </p>
      <p>
        Edit{" "}
        <code className="text-sm font-bold font-mono bg-slate-200 dark:bg-slate-800 px-1 py-0.5 rounded-md">
          app/page.tsx
        </code>{" "}
        to change your frontend
      </p>
      <p>
        <button className="bg-foreground text-background px-2 py-1 mr-2 rounded-md" onClick={handleRequiresUser}>Click Here</button>
        to see an example of checking the current user from a convex mutation
      </p>
      <div className="flex flex-col">
        <p className="text-lg font-bold">Resources:</p>
        <div className="grid grid-cols-2 gap-2">
          <ResourceCard
            title="Stack Auth docs"
            description="Read documentation for all Stack Auth features."
            href="https://docs.stack-auth.com"
          />
          <ResourceCard
            title="Discord"
            description="Join our discord server to learn, ask questions, or show off what you've built"
            href="https://discord.stack-auth.com/"
          />
        </div>
      </div>
    </div>
  );
}

function ResourceCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <div className="flex flex-col gap-2 border-slate-300 dark:border-slate-700 border p-4 rounded-md h-28 overflow-auto">
      <a href={href} className="text-sm underline" target="_blank">
        {title}
      </a>
      <p className="text-xs">{description}</p>
    </div>
  );
}
