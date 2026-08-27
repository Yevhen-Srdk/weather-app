export function debounce<T extends unknown[]>(
  callback: (...args: T) => void,
  delay: number,
) {
  let timerId: ReturnType<typeof setTimeout>;

  return (...args: T) => {
    if (timerId) {
      clearTimeout(timerId); 
    }

    timerId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}
