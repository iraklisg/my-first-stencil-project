import {
  Component, Host, h, Element, State, Prop,
} from '@stencil/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  tag: 'my-google-map',
  // styleUrl: 'my-google-map.css',
  // shadow: true,
})
export class MyGoogleMap {
  @Prop({ attribute: 'api-key' }) apiKey = 'AIzaSyDpOONOTEl9Op7Yb9zHA-kbSWONi7EPkx0';

  @Element() el: HTMLElement;

  @State() google: typeof google;

  @State() map: google.maps.Map;

  @State() toggleBg = false;

  async initMap(): Promise<void> {
    const uluru = { lat: -25.344, lng: 131.036 };
    const loader = new Loader({
      apiKey: this.apiKey,
      version: 'weekly',
      libraries: ['places'],
    });
    this.google = await loader.load();
    this.map = new google.maps.Map(this.el.querySelector('#map') as HTMLElement, {
      center: uluru,
      zoom: 4,
    });
    const marker = new google.maps.Marker({
      position: uluru,
      map: this.map,
    });
  }

  componentWillLoad() {
    this.initMap();
  }

  render() {
    return (
      <Host class={{ 'bg-indigo-200': this.toggleBg }}>
        <div class={'w-full h-full rounded shadow'} id="map"></div>
        <button
          class={ { 'bg-indigo-200': this.toggleBg } }
          onClick={() => { this.toggleBg = !this.toggleBg; }}
        >
          Change bg
        </button>
      </Host>
    );
  }
}
