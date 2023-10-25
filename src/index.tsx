import { render } from 'preact';
import { Button } from '@/components/ui/button';
import './style.css';

export function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-red-600">
        Hello world!
      </h1>
      <div className="flex items-center ">
        <Button size="lg">Click me</Button>
      </div>
    </div>
  );
}

// function Resource(props) {
//   return (
//     <a href={props.href} target="_blank" class="resource">
//       <h2>{props.title}</h2>
//       <p>{props.description}</p>
//     </a>
//   );
// }

render(<App />, document.getElementById('app'));
