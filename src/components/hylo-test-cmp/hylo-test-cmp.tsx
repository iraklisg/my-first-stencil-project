import {
  Component, Host, h, State,
} from '@stencil/core';

@Component({
  tag: 'hylo-test-cmp',
  styleUrl: 'hylo-test-cmp.css',
  // shadow: true,
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
      <Host>
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
      </Host>
    );
  }
}