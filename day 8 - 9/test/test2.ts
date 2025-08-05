console.log("This is test2.ts file");

class NamedValue<T> {
  private _value: T | undefined;

  constructor(private name: string) {}

  public setValue(value: T) {
    this._value = value;
  }

  public getValue(): T | undefined {
    return this._value;
  }

  public toString(): string {
    return `${this.name}: ${this._value}`;
  }
}
      
const value = new NamedValue<number>('myNumber');

value.setValue(10);

console.log(value.toString()); // myNumber: 10


const value2 = new NamedValue<String>('myNumber');

value2.setValue("20");

console.log(value2.toString()); // myNumber: 10