const x: number = 1;

function f(x: number, ...r: number[]): number {
  if (r) {
    return r[0];
  }

  return x;
}

f(2, 1, 3, 4);
