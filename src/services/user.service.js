import { storageService } from './async-storage.service'
import { httpService } from './http.service'
import { utilService } from './util.service'

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'
const USERS_KEY = 'usersDB'

export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    save,
    getUsers,
    getUserById,
    remove,
    update,
    changeScore,
    updateLocalUserFields
}

window.userService = userService


function getUsers() {
    // return storageService.query(USERS_KEY)
    return httpService.get(`user`)
}



async function getUserById(userId) {
    // return await storageService.get(USERS_KEY, userId)
    return await httpService.get(`user/${userId}`)
}

function remove(userId) {
    // return storageService.remove(USERS_KEY, userId)
    return httpService.delete(`user/${userId}`)
}

async function update({ _id, score }) {
    // const user = await storageService.get(USERS_KEY, _id)
    // user.score = score
    // await storageService.put(USERS_KEY, user)

    const user = await httpService.put(`user/${_id}`, { _id, score })
    // Handle case in which admin updates other user's details
    if (getLoggedinUser()._id === user._id) saveLocalUser(user)
    return user
}

async function login(userCred) {
    // const users = await storageService.query(USERS_KEY)
    // const user = users.find(user => user.username === userCred.username)
    const user = await httpService.post('auth/login', userCred)
    if (user) {
        return saveLocalUser(user)
    }
}
async function signup(userCred) {
    // userCred.score = 10000
    // if (!userCred.imgUrl) userCred.imgUrl = 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'
    // const user = await storageService.post(USERS_KEY, userCred)
    const user = await httpService.post('auth/signup', userCred)
    return saveLocalUser(user)
}
async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    return httpService.post('auth/logout')
}

async function changeScore(by) {
    const user = getLoggedinUser()
    if (!user) throw new Error('Not loggedin')
    user.score = user.score + by || by
    await update(user)
    return user.score
}


function save(user) {
    if (user._id) return storageService.put(USERS_KEY, user)
    else return storageService.post(USERS_KEY, user)
}




function updateLocalUserFields(user) {
    const currUser = getLoggedinUser()
    const userToSave = { ...currUser, ...user }
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(userToSave))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}



// try {
//     const users = await getUsers()
//     if (!users.length) _addUsers()
// } catch (error) {
//     console.log(error);
// }

function _addUsers() {
    const users = [
        _addUser('Keepitreal', 1300, 'The internets friendliest designer kid.', 'https://res.cloudinary.com/du1jrse2t/image/upload/v1703685194/youML/1b166739-accc-417c-b695-0dfd1432c6b4_zxouqd.png', 'https://res.cloudinary.com/du1jrse2t/image/upload/v1704205213/youML/Image_PlaceHolder_1_ya9pr6.png'),
        _addUser('DigiLab', 1300, 'The internets friendliest designer kid.', 'https://res.cloudinary.com/du1jrse2t/image/upload/v1703685204/youML/f9d2c07e-8580-4334-bc06-e2a505df89a9_k88zbs.png', 'https://res.cloudinary.com/du1jrse2t/image/upload/v1704205213/youML/Image_PlaceHolder_1_ya9pr6.png'),
        _addUser('GravityOne', 1300, 'The internets friendliest designer kid.', 'https://res.cloudinary.com/du1jrse2t/image/upload/v1703685211/youML/5c5b3d43-b814-4874-9111-2b813c34ee3b_h6qsyg.png', 'https://res.cloudinary.com/du1jrse2t/image/upload/v1704205213/youML/Image_PlaceHolder_1_ya9pr6.png'),
        _addUser('Juanie', 1300, 'The internets friendliest designer kid.', 'https://res.cloudinary.com/du1jrse2t/image/upload/v1703750712/youML/efadab25-afe6-43d4-b36b-97889714b811_zgvlwb.png', 'https://res.cloudinary.com/du1jrse2t/image/upload/v1704205213/youML/Image_PlaceHolder_1_ya9pr6.png'),
        _addUser('BlueWhale', 1300, 'The internets friendliest designer kid.', 'https://res.cloudinary.com/du1jrse2t/image/upload/v1703750715/youML/f59bbf1d-bc75-4d89-8308-a6f07f2a0c71_x5u5ud.png', 'https://res.cloudinary.com/du1jrse2t/image/upload/v1704205213/youML/Image_PlaceHolder_1_ya9pr6.png'),
        _addUser('Mr fox', 1300, 'The internets friendliest designer kid.', 'https://res.cloudinary.com/du1jrse2t/image/upload/v1703750718/youML/6396859e-09bf-46ea-b335-bf4aa3d1638d_yo3v5v.png', 'https://res.cloudinary.com/du1jrse2t/image/upload/v1704205213/youML/Image_PlaceHolder_1_ya9pr6.png'),
        _addUser('Shroomie', 1300, 'The internets friendliest designer kid.', 'https://res.cloudinary.com/du1jrse2t/image/upload/v1703750721/youML/a96ebe81-d7f2-4874-8d86-256575bd06a6_zxzgms.png', 'https://res.cloudinary.com/du1jrse2t/image/upload/v1704205213/youML/Image_PlaceHolder_1_ya9pr6.png'),
        _addUser('Robotica', 1300, 'The internets friendliest designer kid.', 'https://res.cloudinary.com/du1jrse2t/image/upload/v1703750725/youML/777e07e2-367d-44ee-a7e1-c3fc46cedbab_bz8tg2.png', 'https://res.cloudinary.com/du1jrse2t/image/upload/v1704205213/youML/Image_PlaceHolder_1_ya9pr6.png'),
        _addUser('RustyRobot', 1300, 'The internets friendliest designer kid.', 'https://res.cloudinary.com/du1jrse2t/image/upload/v1703750735/youML/3a17c5ee-cf6e-4dff-b2fb-add943c17bfa_qcbnve.png', 'https://res.cloudinary.com/du1jrse2t/image/upload/v1704205213/youML/Image_PlaceHolder_1_ya9pr6.png'),
        _addUser('Animakid', 1300, 'The internets friendliest designer kid.', 'https://res.cloudinary.com/du1jrse2t/image/upload/v1703690065/youML/cba5e98b-2db0-4385-ab4f-3bb2d72aaa07_hnja1y.png', 'https://res.cloudinary.com/du1jrse2t/image/upload/v1704205213/youML/Image_PlaceHolder_1_ya9pr6.png'),
        _addUser('Dotgu', 1300, 'The internets friendliest designer kid.', 'https://res.cloudinary.com/du1jrse2t/image/upload/v1703750741/youML/be6772cb-fa1f-4d9c-a0f7-279829d98bad_wrkjdx.png', 'https://res.cloudinary.com/du1jrse2t/image/upload/v1704205213/youML/Image_PlaceHolder_1_ya9pr6.png'),
        _addUser('Ghiblier', 1300, 'The internets friendliest designer kid.', 'https://res.cloudinary.com/du1jrse2t/image/upload/v1703750745/youML/cadf4157-b8e5-4b92-ba62-502fd8ab6396_neha6a.png', 'https://res.cloudinary.com/du1jrse2t/image/upload/v1704205213/youML/Image_PlaceHolder_1_ya9pr6.png'),
    ]
    users.forEach(user => save(user))
    save(users)
}

function _addUser(name, runs, bio, imgUrl, backImgUrl) {
    return {
        _id: utilService.makeId(),
        name,
        bio,
        imgUrl,
        runs,
        backImgUrl
    }

}

