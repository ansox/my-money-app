export default {
  getSummary() {
    return Promise.resolve({ data: { credit: 10, debit: 5 } })
  }
}