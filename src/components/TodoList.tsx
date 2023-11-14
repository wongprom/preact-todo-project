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
import { Todo } from 'types';
import { Button } from './ui/button';

type Props = {
  todos: {
    value: Todo[];
  };
  removeTodo: (id: string) => void;
};

const TodoList = ({ todos, removeTodo }: Props) => {
  return (
    <section className="m-3 p-3">
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
            {todos.value.map((todo: Todo) => {
              return (
                <TableRow key={todo.id} className="p-2">
                  <Checkbox
                    checked={todo.isComplete}
                    onClick={() => {
                      todo.isComplete = !todo.isComplete;
                      todos.value = [...todos.value];
                    }}
                  />
                  <TableCell className="font-medium">
                    {' '}
                    {todo.isComplete ? <s>{todo.item}</s> : todo.item}
                  </TableCell>
                  <Button
                    className="ml-auto"
                    variant="destructive"
                    onClick={() => removeTodo(todo.id)}
                  >
                    X
                  </Button>
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
