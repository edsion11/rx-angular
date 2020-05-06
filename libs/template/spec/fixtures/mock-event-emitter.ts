export class MockEventEmitter<T> {
  next(value: any) {}
  error(error: any) {}
  complete() {}
  subscribe() {
    // tslint:disable-next-line:no-unused-expression
    unsubscribe: (): void => {};
  }
  constructor(async: boolean) {}
}
