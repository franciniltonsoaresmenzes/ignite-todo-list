import { randomUUID } from 'node:crypto'
import fs from 'node:fs/promises'

const databasePath = new URL('../db.json', import.meta.url)

export class Database {
  #repository = []

  constructor() {
    fs.readFile(databasePath, 'utf8')
      .then(data => this.#repository = JSON.parse(data))
      .catch(() => this.#persist())
  }

  #persist() {
    fs.writeFile(databasePath, JSON.stringify(this.#repository))
  }

  create({ title, description  }, id) {
    this.#repository.push({ 
      id: id ?? randomUUID(), 
      title, 
      description, 
      created_at: new Date(),  
      completed_at: null, 
      updated_at: null 
    }) 
    this.#persist()
  }
  select(search) {
    let data = this.#repository ?? []

     if (search) {
      data = data.filter(row => {
        return Object.entries(search).some(([key, value]) => {
          return row[key].toLowerCase().includes(value.toLowerCase())
        })
      })
    }

    return data
  }

  update(data, id) {
    const rowIndex = this.#repository.findIndex(row => row.id === id)

    if (rowIndex > -1) {
      this.#repository[rowIndex] = { id, updated_at: new Date(), ...data }
      this.#persist()
    }
  }

  delete(id) {
    const rowIndex = this.#repository.findIndex(row => row.id === id)
    if (rowIndex > -1) {
      this.#repository.splice(rowIndex, 1)
      this.#persist()
    }
  }

  doneTask(id) {
    const rowIndex = this.#repository.findIndex(row => row.id === id)

    if (rowIndex > -1) {
      const data = this.#repository[rowIndex]  
      data.completed_at = data.completed_at === null ? new Date() : null
      data.updated_at = new Date()
      this.#persist()
    }
  }

}
