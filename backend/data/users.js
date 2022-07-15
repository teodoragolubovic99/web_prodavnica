import bcrypt from 'bcryptjs'
const Users = [
    {
        name : 'Teodora Golubovic',
        email : 'golubovic@gmail.com',
        password : bcrypt.hashSync('123123',12),
        isAdmin : true
    },
    {
        name : 'Djordje Djekic',
        email : 'djekic@gmail.com.com',
        password : bcrypt.hashSync('123123',12),
        isAdmin : true
    } 
]
export default Users