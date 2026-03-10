import { useState } from "react";

export function TodoList() {
  interface todo {
    id: number;
    text: string;
    finished: boolean;
  }

  const [todo, setTodo] = useState<Todo[]>([]);
}
