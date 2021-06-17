import flattenObj from '../flattenObj';
import { isEqual } from 'lodash';

describe(`flatten`, () => {
  it('should return given object flattened', () => {
    const obj = {
      a: 1,
      b: 2,
      c: {
        d: 3
      },
      e: {
        f: {
          g: 4,
          h: 5
        }
      }
    };
    const flattenedObj = {
      a: 1,
      b: 2,
      'c:d': 3,
      'e:f:g': 4,
      'e:f:h': 5
    };
    expect(isEqual(flattenObj(obj), flattenedObj)).toBeTruthy();
  });
});
