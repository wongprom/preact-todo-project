import { render } from 'preact';
import './style.css';

export function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className=" text-4xl font-bold underline text-red-600">Todo List</h1>
      <section className="todos">
        <h2 className="text-3xl">Todos</h2>
        <div>{/* map all todos with table */}</div>
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
