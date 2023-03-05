import './style.css';
import { of, map, Observable } from 'rxjs';
import { timer, interval } from 'rxjs';

of('World')
  .pipe(map((name) => `Hello, ${name}!`))
  .subscribe(console.log);

// Open the console in the bottom right to see results...

//Simple Clock:
const output = document.createElement('output');
document.body.prepend(output);

timer(0,1000)
  .pipe(map(() => new Date().toLocaleTimeString()))
  .subscribe((time) => (output.textContent = time));

