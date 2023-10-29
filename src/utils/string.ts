export function snakeToCamelCase(instr: string): string {
  const spl = instr.split("_")
  if (spl.length === 1) return instr
  const first = spl[0]
  const uppers = spl.slice(1,).map(str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`)
  return [first, ...uppers].join("")
}