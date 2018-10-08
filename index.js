export default class Bus {
  constructor() {
    this.bus = {}
  }

  on(name, cb) {
    if (!this.bus[name]) {
      this.bus[name] = []
    }

    this.bus[name].push(cb)
  }

  un(name, cb) {
    if (!this.bus[name]) {
      this.bus[name] = []
    }

    this.bus[name].remove(cb)
  }

  clear(name) {
    this.bus[name] = []
  }

  emit(name, ...params) {
    if (!this.bus[name]) {
      this.bus[name] = []
    }

    this.bus[name].forEach(cb => {
      cb(...params)
    })
  }
}
