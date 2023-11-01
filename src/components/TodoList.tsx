import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
const todos = [
  {
    id: 1,
    item: 'Shopping',
    isComplete: false,
  },
  {
    id: 2,
    item: 'Clean CoCo',
    isComplete: false,
  },
  {
    id: 3,
    item: 'Pack camping things',
    isComplete: true,
  },
  {
    id: 4,
    item: 'Code',
    isComplete: true,
  },
  {
    id: 5,
    item: 'Write Diary',
    isComplete: true,
  },
  {
    id: 6,
    item: 'Read book',
    isComplete: true,
  },
];

const TodoList = () => {
  return (
    <section className="todos m-3 p-3 bg-gray-300">
      <h2 className="text-3xl text-center">Todos</h2>
      <div>
        <Table>
          <TableCaption>A list of all your Todos.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="max-w-[200px]">Your Todos</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {todos.map((todo) => {
              if (todo.isComplete) return;
              return (
                <TableRow key={todo.id} className="p-2">
                  <Checkbox />
                  <TableCell className="font-medium">{todo.item}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default TodoList;
