const _env = () => ({
  scope: [{}],
  callStack: [],
  enterScope(s) {
    this.scope.push(s)
  },
  exitScope() {
    this.scope.pop()
  },
  initialize(k, v) {
    scope[scope.length - 1][k] = v
  },
  assign(k, v) {
    var trigger
    scope.reverse.forEach(s =>
      (!trigger && k in s)
        ? (scope[k] = v, trigger = true)
        : null)
  },
  retreive(k) {
    var ret, trigger
    scope.reverse.forEach(s =>
      (!trigger && k in s)
        ? (ret = scope[k], trigger = true) // as problematic as it would be, a "cause caller to return value" operator would be great
        : null)
    return ret
  }
})
