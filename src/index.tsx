import { render } from 'preact';
import './style.css';
import TodoList from './components/TodoList';
import CompletedTodoList from './components/CompletedTodoList';
import { type } from 'os';

export type Todo = {
  id: number;
  item: string;
  isComplete: boolean;
};
export function App() {
  const todos: Todo[] = [
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
      isComplete: false,
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold underline text-center text-red-600">
        Your Todo List
      </h1>
      <div className="flex gap-4">
        <TodoList allTodos={todos} />
        <CompletedTodoList allTodos={todos} />
      </div>
      <section className="addNewTodo">
        <h2 className="text-3xl">Add New Todo</h2>
        <div>{/* set up form with one input  */}</div>
      </section>
    </div>
  );
}

render(<App />, document.getElementById('app'));
