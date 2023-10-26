import { render } from 'preact';
import './style.css';
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

export function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold underline text-center text-red-600">
        Your Todo List
      </h1>
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
              <TableRow className="p-2">
                <Checkbox />
                <TableCell className="font-medium">Shopping</TableCell>
              </TableRow>
              <TableRow className="p-2">
                <Checkbox />
                <TableCell className="font-medium">Clean CoCo</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="complitedTodos">
        <h2 className="text-3xl">Complited Todos</h2>
        <div>{/* map all complited todos with table */}</div>
      </section>
      <section className="addNewTodo">
        <h2 className="text-3xl">Add New Todo</h2>
        <div>{/* set up form with one input  */}</div>
      </section>
    </div>
  );
}

render(<App />, document.getElementById('app'));
