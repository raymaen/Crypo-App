const sum = (a,b) => a+b

test('server', () => {
    expect(sum(1, 2)).toBe(3);
  });