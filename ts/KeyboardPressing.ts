class KeyboardPressing {
  private list: Set<string>
  constructor() {
    this.list = new Set()
  }
  private onKeydown(key: string) {
    this.list.add(key)
  }
  private onKeyup(key: string) {
    this.list.delete(key)
  }
  has(key: string) {
    return this.list.has(key)
  }
  addEventListener() {
    window.addEventListener('keydown', e => this.onKeydown(e.key))
    window.addEventListener('keyup', e => this.onKeyup(e.key))
  }
}

const keyboardPressing = new KeyboardPressing()
keyboardPressing.addEventListener()

export { keyboardPressing }
