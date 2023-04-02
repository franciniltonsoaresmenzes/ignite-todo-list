import { randomUUID } from 'node:crypto'

export class InMemoryTaskRepository {
  #repository = []

  create({ title, description }) {
    const id = randomUUID()
    const created_at = new Date()
    const completed_at = null
    const updated_at = null
    this.#repository.push({ id, title, description, created_at,  completed_at, updated_at }) 
  }
  select(search) {
    let data = this.#repository ?? []

    if (search) {
      data.filter(row => {
        return Object.entries(search).some(([ key, value ]) => {
          return row[key].toLowerCase().includes(value.toLowerCase());
        })
      })
    }
    return data
  }
}
