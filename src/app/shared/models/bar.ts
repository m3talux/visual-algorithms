export class Bar {
  value: number;
  current: boolean;
  selected: boolean;
  checked: boolean;

  constructor(value: number, current: boolean, selected: boolean, checked: boolean) {
    this.value = value;
    this.current = current;
    this.selected = selected;
    this.checked = checked;
  }
}
