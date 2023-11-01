import { render } from 'preact';
import './style.css';
import TodoList from './components/TodoList';

export function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold underline text-center text-red-600">
        Your Todo List
      </h1>
      <TodoList />
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
