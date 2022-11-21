import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hylo-test-cmp',
  styleUrl: 'hylo-test-cmp.css',
  // shadow: true,
})
export class HyloTestCmp {
  foo = { id: 33 };

  render() {
    return (
      <Host>
        <article class={'bg-indigo-100'}>
          <h2 class={'text-xl'}>Wrapper</h2>
          <hylo-nav-bar isComplete myText='wra' myService={this.foo}></hylo-nav-bar>
        </article>
      </Host>
    );
  }
}
