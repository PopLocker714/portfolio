export function merge<O extends object>(obj: O) {
  return <k extends object>(obj2: k) => ({
    ...obj,
    ...obj2
  })
}