/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
export function compose<U>(...fns: Function[]) {
  return (initialValue: any):U =>
    fns.reduceRight((previousValue, fn) => fn(previousValue), initialValue) 
}

export function pipe<U>(...fns: Function[]) {
  return (initialValue: any):U =>
    fns.reduce((previousValue, fn) => fn(previousValue), initialValue) 
}

export function pick<K extends string>(prop: K) {
  return <O extends Record<K, any>>(obj:O) => obj[prop]
}

export function isEqual<T>(left: T) {
  return <E extends T>(right: E) => left === right
}

export function cond(b:boolean) {
  return !b
}
