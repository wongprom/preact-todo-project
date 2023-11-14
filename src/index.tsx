import { render } from 'preact';
import './style.css';
import TodoList from './components/TodoList';
import { signal } from '@preact/signals';
import { Button } from '@/components/ui/button';
import { v4 as uuidv4 } from 'uuid';
import { Input } from './components/ui/input';

const todosInitData = [
  {
    id: '1',
    item: 'Shopping',
    isComplete: false,
  },
  {
    id: '2',
    item: 'Clean CoCo',
    isComplete: false,
  },
  {
    id: '3',
    item: 'Pack camping things',
    isComplete: true,
  },
  {
    id: '4',
    item: 'Code',
    isComplete: true,
  },
  {
    id: '5',
    item: 'Write Diary',
    isComplete: true,
  },
  {
    id: '6',
    item: 'Read book',
    isComplete: false,
  },
];
const todosSignal = signal(todosInitData);
const newItem = signal('');
const addTodo = () => {
  if (newItem.value === '') return;
  todosSignal.value = [
    ...todosSignal.value,
    { id: uuidv4(), item: newItem.value, isComplete: false },
  ];
  newItem.value = '';
};
const removeTodo = (todoId: string) => {
  todosSignal.value = todosSignal.value.filter((t) => t.id !== todoId);
};
export function App() {
  const onInput = (event: React.ChangeEvent<HTMLInputElement>) =>
    (newItem.value = event.currentTarget.value);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold underline text-center">
        Your Todo List
      </h1>
      <section className="addNewTodo">
        <h2 className="text-3xl">Add New Todo</h2>
        <div className="flex">
          {/* 
// @ts-ignore */}
          <Input value={newItem.value} onInput={onInput} />
          <Button onClick={addTodo} variant="secondary">
            Add todo
          </Button>
        </div>
      </section>
      <div className="flex gap-4">
        <TodoList todos={todosSignal} removeTodo={removeTodo} />
      </div>
    </div>
  );
}

render(<App />, document.getElementById('app'));
