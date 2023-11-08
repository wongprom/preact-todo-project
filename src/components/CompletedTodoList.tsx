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

type Props = {
  todos: Todo[];
};
const CompletedTodoList = ({ todos }: Props) => {
  return (
    <section className="completedTodos m-3 p-3 bg-green-100">
      <h2 className="text-3xl text-center">Completed Todos</h2>
      <div>
        <Table>
          <TableCaption>A list of all your Completed Todos.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="max-w-[200px]">
                Your Completed Todos
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {todos.map((todo: Todo) => {
              if (!todo.isComplete) return;
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

export default CompletedTodoList;
