/* eslint-disable no-console */
// @flow

export default function defaultExport(): string {
  return 'default export/import works';
}

export function nonDefaultExport(): string {
  return 'non-default export/import works';
}

export function sum(a: number, b: number): number {
  return a + b;
}

export class Aclass {
  initValue: number;

  static createCount: number = 0;

  static incrementCreateCount() {
    Aclass.createCount += 1;
  }

  static returnCreateCount(): number {
    return Aclass.createCount;
  }

  constructor(initValue: number) {
    this.initValue = initValue;

    Aclass.incrementCreateCount();

    console.log(`An Aclass instance with initValue ${this.initValue} was created`);
  }

  methodA(anArgument: string): string {
    return `An Aclass method called with: ${anArgument}, initValue: ${this.initValue}`;
  }

  // eslint-disable-next-line class-methods-use-this
  get createCount(): number {
    return Aclass.createCount;
  }
}
