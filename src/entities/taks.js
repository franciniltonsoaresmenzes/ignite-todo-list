export class Task {
  value = {}

  create({ title, description }) {
    if (this.validation({ title, description })) {
      return this.value = { title, description }
    }
  }

  validation({ title, description }) {
    if (title.lenght < 5 && description.lenght < 5) {
      return false
    }

    return true
  }
}
