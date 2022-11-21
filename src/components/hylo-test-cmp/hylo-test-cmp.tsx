import {
  Component, Host, h, State, Watch,
} from '@stencil/core';
import { Todo } from '../my-todo-list/my-todo-list';

@Component({
  tag: 'hylo-test-cmp',
  styleUrl: 'hylo-test-cmp.css',
  shadow: true,
})
export class HyloTestCmp {
  foo = { id: 33 };

  timer: number;

  @State() count = 0;

  connectedCallback() {
    this.timer = window.setInterval(() => {
      // the assignment to `this.currentTime`
      // will trigger a re-render
      this.count += 1;
    }, 1000);
  }

  disconnectedCallback() {
    window.clearInterval(this.timer);
  }

  render() {
    return (
      <Host class={this.count % 2 === 0 ? 'bg-gray-100' : 'bg-red-100'}>
        <article class={'bg-indigo-100'}>
          <h2 class={'text-xl'}>Wrapper</h2>
          <hylo-nav-bar isComplete myText='wra' myService={this.foo}></hylo-nav-bar>
          {/* {this.count % 2 !== 0
            ? <my-counter initialCount={2}></my-counter>
            : <my-counter initialCount={3}></my-counter>
          } */}
          {/* without a key, the comonents internal state will not change */}
          <my-counter initialCount={this.count % 2 !== 0 ? 2 : 5} />

        </article>
        <article class={'bg-blue-100'}>
          <my-todo-list onTodoCompleted={(ev: CustomEvent<Todo>) => console.log(ev.detail.text)}>

          </my-todo-list>
        </article>
      </Host>
    );
  }
}
