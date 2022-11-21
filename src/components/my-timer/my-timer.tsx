import {
  Component, Host, h, State,
} from '@stencil/core';

@Component({
  tag: 'my-timer',
  styleUrl: 'my-timer.css',
  // shadow: true,
})
export class MyTimer {
  timer: number;

  @State() currentTime: number = Date.now();

  connectedCallback() {
    this.timer = window.setInterval(() => {
      // the assignment to `this.currentTime`
      // will trigger a re-render
      this.currentTime = Date.now();
    }, 1000);
  }

  disconnectedCallback() {
    window.clearInterval(this.timer);
  }

  render() {
    const time = new Date(this.currentTime).toLocaleTimeString();

    return (
      <Host>
        <p class={'p-8 bg-gray-100 shadow'}>{time}</p>
      </Host>
    );
  }
}
