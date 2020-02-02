export class ImageUrl {
  constructor(private id: string) { }

  toJSON = () => {
    return `https://drive.google.com/uc?export=view&id=${this.id}`;
  }

  getId = () => {
    return this.id;
  }
}