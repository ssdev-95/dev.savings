const Modal = {
  open() {
    document.querySelector(".modal-overlay").classList.add("active");
  },
  close() {
    document.querySelector(".modal-overlay").classList.remove("active");
  }
}

const Storage = {
  get() {
    return JSON.parse(localStorage.getItem("dev.finances:transactions")) || []
  },
  set(transactions) {
    localStorage.setItem("dev.finances:transactions",JSON.stringify(transactions))
  }
}

const Transaction = {
  all: Storage.get(),
  add(transaction) {
      Transaction.all.push(transaction)
      App.reload()
  },
  remove(index) {
      Transaction.all.splice(index, 1)

      App.reload()
  },
  incomes() {
      let value = 0
      for(transaction of Transaction.all) {
          if (transaction.amount > 0) {
              value += transaction.amount
          }
      }
      return value
  },
  expenses() {
      let value = 0
      for(transaction of Transaction.all) {
          if (transaction.amount < 0) {
              value += transaction.amount
          }
      }
      return value
  },
  totals() {
      return Transaction.incomes() + Transaction.expenses()
  }
}

const DOM = {
  transactionContainer: document.querySelector('.data-table'), //fazer similar nos cards
  addTransaction(transaction, index) {
      const tr = document.createElement('tr')
      tr.innerHTML = DOM.innerHTMLTransaction(transaction, index)
      tr.dataset.index = index
      DOM.transactionContainer.appendChild(tr)
  },
  innerHTMLTransaction(transaction, index) {
      const CSSclass = transaction.amount > 0 ? "income" : "expense"
      const amount = Utils.formatCurrency(transaction.amount)
      const html = `        
      <td class="description">${transaction.description}</td>
      <td class=${CSSclass}>${amount}</td>
      <td class="date">${transaction.date}</td>
      <td><img onclick="Transaction.remove(${index})" class="button delete" src="./images/minus.svg" alt="Image minus"/></td>
      `

      return html
  },
  updateBalance() {
      document.querySelector('.incomes-show').innerHTML = Utils.formatCurrency(Transaction.incomes())
      document.querySelector('.expenses-show').innerHTML = Utils.formatCurrency(Transaction.expenses())
      document.querySelector('.total-show').innerHTML = Utils.formatCurrency(Transaction.totals())
  },
  clearTransactions() {
      DOM.transactionContainer.innerHTML = ""
  }
}

const Utils = {
  formatCurrency(value) {
      const signal = Number(value) < 0 ? "-" : ""
      value = String(value).replace(/\D/g, "")

      value = Number(value)/100

      value = value.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL"
      })

      return signal + value
  },
  formatAmount(value) {
      let numb = Number(value) * 100
      return numb
  },
  formatDate(value) {
      const splittedDate = value.split("-")
      date = `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`
  }
}

const Form = {
  description: document.querySelector('#description'),
  amount: document.querySelector('#amount'),
  date: document.querySelector('#date'),
  getValues() {
      return {
          description:Form.description.value,
          amount:Form.amount.value,
          date:Form.date.value
      }
  },
  validateFields() {
      const { description, amount, date } = Form.getValues()
      if (description.trim() == "" || amount.trim() == "" || date.trim() == "") {
          throw new Error("kisamaaaa!")
      }
  },
  formatData() {
      let { description, amount, date } = Form.getValues()

      amount = Utils.formatAmount(amount)
      date = Utils.formatDate(date)

      return {
          description,
          amount,
          date
      }
  },
  saveTransaction(transaction) {
      Transaction.add(transaction)
  },
  removeTransaction() {
  },
  clearFields() {
      Form.description.value = ""
      Form.amount.value = ""
      Form.date.value = ""
  },
  submit(event) {
      event.preventDefault()

      try {

          Form.validateFields()
          const transaction = Form.formatData()
          Form.saveTransaction(transaction)
          Form.clearFields()
          Modal.close()
          App.reload()

      } catch (error) {
          alert(error.message)
        }
  }
}

const App = {
  init() {
      /*for(transaction of Transaction.all) {
          DOM.addTransaction(transaction)
      }*/
      Transaction.all.forEach((transaction, index) => {
          DOM.addTransaction(transaction, index)
      })
      Storage.set(Transaction.all)
      DOM.updateBalance()
    },
    reload() {
      DOM.clearTransactions()
      App.init()
  }
}


App.init()

/*Transaction.add({
  id: 4,
  description: 'skins lol',
  amount: -10000,
  date: "10/05/2018"
})

Transaction.remove(0)*/