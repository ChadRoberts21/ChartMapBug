export class Marker {
  constructor(obj) {
    this.name = obj.name;
    this.lat = obj.lat;
    this.long = obj.long;
    this.colour = obj.colour;
    this.interval = obj.interval;
    this.startPoint = obj.startPoint;
    this.data = obj.data;
  }

  get googleLocation() {
    return { lat: this.lat, lng: this.long };
  }
}
