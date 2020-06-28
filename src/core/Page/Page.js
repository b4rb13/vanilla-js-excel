export class Page {
  constructor(params) {
    this.params = params || Date.now().toString();
  }
  getRoot() {
    throw new Error("Method hetRoot Should be implemented");
  }
  afterRender() {}
  destroy() {}
}
