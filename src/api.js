export default {
  getSummary() {
    return Promise.resolve({ data: { credit: 10, debit: 5 } })
  },

  getList() {
    return Promise.resolve([{ id: 1 }, { id: 2 }])
  }
}