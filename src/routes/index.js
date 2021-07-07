const { Router } = require("express");

// Controller
const {getHousesTwoParam,getHousesParam,updateHouse,getHouses,getHouse,createHouse,deleteHouse} = require("../controllers/houses")
const { register, signin } = require('../controllers/auth')
const { users, myProfile, updateUser,deleteUser } = require('../controllers/user')
const { createTransaction,updateTransaction,getTransaction,getAllTransaction } = require('../controllers/transaction')


// Middleware 
// const { auth } = require('../middlewares/auth')
const { auth } = require('../middlewares/auth')
const { uploadFile } = require('../middlewares/uploadFile')


const router = Router();

router.post('/signup', register)
router.post('/signin', signin)

// router.get('/users', auth, users) // dengan token
router.get('/users', users)
router.get('/my-profile', auth, myProfile)
router.patch('/user', auth, uploadFile("imageFile"), updateUser)
router.delete('/user/:id',deleteUser)

// getHousesTwoParam
router.get("/houses", getHousesTwoParam)
router.get("/houses", getHousesParam)
router.get("/houses", getHouses)
router.get("/house/:id", getHouse)
router.post("/house", createHouse, uploadFile("imageFile"))
router.delete("/house/:id", deleteHouse)

// router.put("/house/:id", updateHouse, uploadFile("imageFile"))
router.patch("/house/:id", uploadFile("imageFile"), updateHouse)

router.post("/transaction", auth, createTransaction)
router.patch("/updatetransaction/:id", auth,uploadFile("imageFile"), updateTransaction)
// updateTransaction
router.get("/transaction/:id", getTransaction)
router.get("/transactions", getAllTransaction)


module.exports = router;
