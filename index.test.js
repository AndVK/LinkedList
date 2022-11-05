const { LinkedList } = require('./index');

function init() {
  const list = new LinkedList();

  list
    .append('a')
    .append('b')
    .append('c')
    .append('d')
    .append('e')
    .append('f')
    .append('g')
    .append('q');

  return list;
}

describe('Linked list', () => {
  test('Append', () => {
    let list = init();
    expect(list.append('x').toString()).toBe('a,b,c,d,e,f,g,q,x');
    expect(list.head.value).toBe('a');
    expect(list.tail.value).toBe('x');
  });

  test('Prepend', () => {
    let list = init();
    expect(list.prepend('x').toString()).toBe('x,a,b,c,d,e,f,g,q');
    expect(list.head.value).toBe('x');
    expect(list.tail.value).toBe('q');
  });

  test('Prepend in empty LinkedList', () => {
    const list = new LinkedList();

    expect(list.prepend('x').toString()).toBe('x');
    expect(list.head.value).toBe('x');
    expect(list.tail.value).toBe('x');
  });

  test('Find element', () => {
    let list = init();
    expect(list.find('d').toString()).toBe('d');
    expect(list.find('x')).toBe(null);
  });

  test('Delete element', () => {
    let list = init();
    expect(list.delete('b').toString()).toBe('b');
    expect(list.toString()).toBe('a,c,d,e,f,g,q');
    list.delete('a');
    expect(list.toString()).toBe('c,d,e,f,g,q');
    expect(list.head.value).toBe('c');
    list.delete('d');
    expect(list.toString()).toBe('c,e,f,g,q');
    expect(list.head.value).toBe('c');
    expect(list.tail.value).toBe('q');
  });

  test('Delete multiple', () => {
    let list = init();

    list.append('a');
    expect(list.delete('a').toString()).toBe('a');

    expect(list.toString()).toBe('b,c,d,e,f,g,q');
    expect(list.head.value).toBe('b');
    expect(list.tail.value).toBe('q');
  });

  test('Insert int the middle', () => {
    let list = init();

    let prev = list.find('b');

    list.insertAfter('x', prev);

    expect(list.toString()).toBe('a,b,x,c,d,e,f,g,q');
  });

  test('Insert in the end', () => {
    let list = init();

    let prev = list.find('q');

    list.insertAfter('x', prev);

    expect(list.toString()).toBe('a,b,c,d,e,f,g,q,x');
    expect(list.tail.value).toBe('x');
  });
});
