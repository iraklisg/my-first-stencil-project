import {
  Component, Host, h, State, Prop,
} from '@stencil/core';

@Component({
  tag: 'my-counter',
  styleUrl: 'my-counter.css',
  // shadow: true,
})
export class MyCounter {
  timer: number;

  @Prop() initialCount = 0;

  @State() count = this.initialCount;

  // @Watch('initialCount')
  // onFooChange() {
  //   this.count = this.initialCount;
  // }

  // connectedCallback() {
  //   console.log('connectedCallback', this.initialCount, this.count);
  // }

  // componentWillUpdate() {
  //   console.log('componentWillUpdate', this.initialCount, this.count);
  // }

  // componentWillLoad() {
  //   console.log('componentWillLoad', this.initialCount, this.count);
  // }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
