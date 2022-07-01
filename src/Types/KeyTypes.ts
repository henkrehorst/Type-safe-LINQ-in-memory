export type IncludeKeys<T> = { [K in keyof T]: T[K] extends Array<object> ? K : never }[keyof T];
export type OrderByKeys<T> = { [K in keyof T]: T[K] extends string | number | boolean ? K : never }[keyof T];
export type getArrayType<T> = T extends Array<object> ? T[number] : never