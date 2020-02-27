export class Bar {
  value: number;
  current: boolean;
  selected: boolean;
  visited: boolean;

  constructor(value: number, current: boolean, selected: boolean, visited: boolean) {
    this.value = value;
    this.current = current;
    this.selected = selected;
    this.visited = visited;
  }
}
