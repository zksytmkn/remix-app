import { useState } from "react";
import type { MetaFunction } from "@remix-run/node";
import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { DeleteIcon } from "~/DeleteIcon";

export const meta: MetaFunction = () => {
  return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

export default function Index() {
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([
    "todo1",
    "todo2",
    "todo3",
    "todo4",
    "todo5",
    "todo6",
    "todo7",
    "todo8",
    "todo9",
    "todo10",
  ]);

  const changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const addTodos = () => {
    if (text === "") return;
    const newTodos = [...todos];
    newTodos.push(text);
    setTodos(newTodos);
    setText("");
  };
  const deleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="flex flex-col items-center">
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }} className="flex items-center gap-1 mt-10">
        <Input
          label="todo"
          type="text"
          value={text}
          onChange={changeText}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTodos();
            }
          }}
        />
        <Button isIconOnly color="warning" variant="faded" aria-label="add todo" onClick={addTodos}>
          +
        </Button>
      </div>
      <Table hideHeader aria-label="todo table" className="mt-10 max-w-xs text-center">
        <TableHeader>
          <TableColumn>todo</TableColumn>
          <TableColumn>delete</TableColumn>
        </TableHeader>
        <TableBody>
          {todos.map((todo, index) => (
            <TableRow key={index}>
              <TableCell>{todo}</TableCell>
              <TableCell>
                <DeleteIcon fill="#FF0080" size={20} height={20} width={20} onClick={() => deleteTodo(index)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
