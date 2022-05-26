declare namespace jest {
  interface Matchers<R> {
    toMatchImage(image: any, options: any): R;
  }
}
