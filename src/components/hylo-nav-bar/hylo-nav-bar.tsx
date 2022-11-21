import {
  Component, Host, h, Prop, Watch,
} from '@stencil/core';

export type MyService = {
  id: number;
};

@Component({
  tag: 'hylo-nav-bar',
  styleUrl: 'hylo-nav-bar.css',
  // shadow: true,
})
export class HyloNavBar {
  /*
  Props are exposed to the host element as attributes.
  Props instruct the compiler to listen for changes to the attribute in the DOM
  */
  @Prop() isComplete: boolean;

  // A reflected prop is rendered to the dom as an attribute
  @Prop({ reflect: true }) myText: string;

  // compiler never exposes prop of type Object as an attribute to the Host element
  // Since DOM attributes can only be strings, it does not make sense to have
  // an associated DOM attribute called "my-service".
  @Prop({ reflect: true }) myService: MyService;

  private validateMyText(value: string) {
    if (value && value.length > 3) {
      throw new Error('myText must be less than 3 characters');
    }
  }

  connectedCallback() {
    console.log(this.isComplete);
    console.log(this.myText);
    console.log(this.myService);
  }

  componentWillLoad() {
    this.validateMyText(this.myText);
  }

  @Watch('myText')
  watchHandler(newValue: string) {
    this.validateMyText(newValue);
  }

  render() {
    return (
      <Host>
        {/* <nav class={'p-4 bg-teal-300'}>
          <ul class={'flex'}>
            <li class={'mx-2'}>Home</li>
            <li class={'mx-2'}>Explore</li>
            <li class={'mx-2'}>Notifications</li>
          </ul>
        </nav> */}
        <p>{typeof this.isComplete}</p>
      </Host>
    );
  }
}
