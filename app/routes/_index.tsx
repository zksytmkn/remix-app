import type { MetaFunction } from "@remix-run/node";
import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";

export const meta: MetaFunction = () => {
  return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

export default function Index() {
  return (
    <div
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}
      className="flex justify-center items-center gap-1 mt-10"
    >
      <Input label="todo" className="max-w-xs" />
      <Button isIconOnly color="warning" variant="faded" aria-label="add todo">
        +
      </Button>
    </div>
  );
}
