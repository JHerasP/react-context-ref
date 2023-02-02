export default function shadyCounter() {
  let counter = 0;
  const count = () => {
    return counter++;
  };

  return count;
}
