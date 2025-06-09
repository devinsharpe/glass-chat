import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="flex h-dvh items-stretch gap-4 p-4">
      <section className="h-full border max-w-xs w-full grow rounded-lg shrink-0 p-4">
        <h3>Navigation</h3>
      </section>
      <section className="h-full w-full grow relative border rounded-lg">
        <div className="p-4 absolute inset-0 z-10 overflow-y-auto">
          <h3>Chat</h3>
        </div>
        <div className="border-t absolute inset-x-0 bottom-0 p-4 z-20">
          <h3>Message Box</h3>
        </div>
      </section>
    </div>
  );
}
