import express from 'express';
import {getAllUsers,saveUsers,deleteUser, updateUser} from '../controller/user-controller.js'

const router = express.Router();

router.get('/',getAllUsers);
router.post('/save',saveUsers);
router.delete('/delete/:username',deleteUser);
router.put('/update/:username',updateUser);

export default router;