import get from './get';

const obj = {
  a: {
    b: {
      c: 'd'
    },
    e: 'f',
    g: {
      h: {
        i: 'g'
      }
    }
  },
  k: 'l',
  m: {
    n: 'o',
    p: {
      q: 'r'
    }
  }
}

describe('get', () => {
  it('should return property by provided path', () => {
    expect(get(obj, 'a.b.c')).toEqual('d');
    expect(get(obj, 'a.e')).toEqual('f');
    expect(get(obj, 'k')).toEqual('l');
    expect(get(obj, 'm.n')).toEqual('o');
    expect(get(obj, 'm.p.q')).toEqual('r');
    expect(get(obj, 'a.g.h.i')).toEqual('g');
  });
  it('should return `null` if property by provided path is not existing', () => {
    expect(get(obj, 'a.z')).toEqual(null);
    expect(get(obj, 'a.x.z')).toEqual(null);
  });
})