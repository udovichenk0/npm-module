import { log } from "./another-func"
import { MyType } from "./types/index"
export { MyType }

export const sum = (p: MyType) => {
  const result = p.a + p.b
  log(result)
  return result
}