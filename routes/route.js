const Router = require("express").Router()
const sampleDataController = require("./../controllers/sampleDataController")
const {createAccount, getAccountOfIndividual} = require("./../controllers/accountController")
const transferController = require("./../controllers/transferController")
const getAllAccountsController = require("./../controllers/getAllAccountsController")
const {getAllTransaction, getTransactionOfAccount} = require("./../controllers/transaction")
const depositMoney = require("./../controllers/depositMoney")
const withdrawalMoney = require("./../controllers/withdrawalMoney")

Router.get("/createSampleData", sampleDataController)
Router.post("/createAccount", createAccount)
Router.post("/transfer", transferController)
Router.get("/accounts", getAllAccountsController)
Router.get("/transactions", getAllTransaction)
Router.post("/deposit", depositMoney)
Router.post("/withdrawal", withdrawalMoney)
Router.post("/withdrawal", withdrawalMoney)
Router.post("/getAccountDetails", getAccountOfIndividual)
Router.post("/getTransactionOfAccount", getTransactionOfAccount)

module.exports = Router