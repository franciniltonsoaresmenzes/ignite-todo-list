import { randomUUID } from 'node:crypto'

export class InMemoryTaskRepository {
  #repository = []

  create({ title, description  }, id) {
    this.#repository.push({ 
      id: id ?? randomUUID(), 
      title, 
      description, 
      created_at: new Date(),  
      completed_at: null, 
      updated_at: null 
    }) 
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

  update(data, id) {
    const rowIndex = this.#repository.findIndex(row => row.id === id)

    if (rowIndex > -1) {
      this.#repository[rowIndex] = { id, ...data }
    }
  }

  delete(id) {
    const rowIndex = this.#repository.findIndex(row => row.id === id)
    if (rowIndex > -1) {
      this.#repository.splice(rowIndex, 1)
    }
  }
}
