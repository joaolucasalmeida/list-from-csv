import { Router } from 'express'
import { UserController } from '../Controllers/UsersController'
import multer from 'multer';

const routesUsers = Router()

const upload = multer({ dest: './src/uploads/' });

routesUsers.post('/api/files', upload.single('file'), new UserController().create)

routesUsers.get('/api/users', new UserController().find)

export default routesUsers