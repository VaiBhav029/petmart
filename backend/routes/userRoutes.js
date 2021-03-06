import express from 'express'
const router = express.Router()
import {authUser,getUserProfile,registerUser,updateUserProfile,getUsers, deleteUser} from '../controller/userController.js'
import {admin, protect} from '../middleware/authMiddleware.js'

router.route('/').post(registerUser).get(protect,admin,getUsers)
router.post('/login',authUser)
router.route('/profile').get(protect,getUserProfile).put(protect,updateUserProfile)
router.route('/:id').delete(protect,admin,deleteUser)


export default router