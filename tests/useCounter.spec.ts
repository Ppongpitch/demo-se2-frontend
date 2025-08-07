import { renderHook, act } from '@testing-library/react';
 import useCounter from '../src/hooks/features/homepage/useCounter';

describe('useCounter Hook', () => {
  test('initial values are correct', () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.count).toBe(0);
    expect(result.current.val).toBe(1);
  });

  test('increment increases count by val', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1); // 0 + val(1)
  });

  test('changing val affects increment', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.setVal(5);
    });

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(5); // 0 + val(5)
  });

  test('multiple increments accumulate correctly', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.increment(); // +1
      result.current.increment(); // +1
    });

    expect(result.current.count).toBe(2);
  });
});
