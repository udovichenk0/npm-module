import { sum, MyType } from 'udovichenk0'
import { test, expect } from 'vitest'

test("test", () => {
  const a:MyType = {a: 1, b: 2}
  expect(sum(a)).toBe(3)
})