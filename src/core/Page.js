export class Page {
  constructor(params) {
    this.params = params;
  }
  getRoot() {
    throw new Error("Method hetRoot Should be implemented");
  }
  afterRender() {}
  destroy() {}
}
