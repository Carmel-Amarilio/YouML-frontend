import { User } from '../models/models'
import { storageService } from './async-storage.service'
import { httpService } from './http.service'
import { utilService } from './util.service'

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'
const USERS_KEY = 'usersDB'

export const userService = {
    // login,
    // logout,
    // signup,
    getLoggedinUser,
    save,
    getUsers,
    getUserById,
    remove,
    // update,
    updateLocalUserFields
};

(window as any).userService = userService;

function getUsers(): Promise<User[]> {
    return httpService.get('user');
}

async function getUserById(userId: string): Promise<User> {
    return await httpService.get(`user/${userId}`);
}

function remove(userId: string): Promise<void> {
    return httpService.delete(`user/${userId}`);
}

// async function update({ _id, score }: { _id: string; score: number }): Promise<User> {
//     const user = await httpService.put<User>(`user/${_id}`, { _id, score });
//     if (getLoggedinUser()._id === user._id) saveLocalUser(user);
//     return user;
// }

// async function login(userCred: { username: string; password: string }): Promise<User> {
//     const user = await httpService.post<User>('auth/login', userCred);
//     if (user) {
//         return saveLocalUser(user);
//     }
// }

// async function signup(userCred: { username: string; password: string }): Promise<User> {
//     const user = await httpService.post<User>('auth/signup', userCred);
//     return saveLocalUser(user);
// }

// async function logout(): Promise<void> {
//     sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER);
//     return httpService.post('auth/logout');
// }


function save(user: User): Promise<void> {
    if (user._id) return storageService.put(USERS_KEY, user);
    else return storageService.post(USERS_KEY, user);
}

function updateLocalUserFields(user: Partial<User>): User {
    const currUser = getLoggedinUser();
    const userToSave = { ...currUser, ...user };
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(userToSave));
    return userToSave as User;
}

function getLoggedinUser(): User {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER) || '{}') as User;
}

// try {
//     const users = await getUsers()
//     if (!users.length) _addUsers()
// } catch (error) {
//     console.log(error);
// }

// function _addUsers() {
//     const users: User[] = [
//         _addUser('Keepitreal', 1300, 'The internet\'s friendliest designer kid.', 'https://res.cloudinary.com/du1jrse2t/image/upload/v1703685194/youML/1b166739-accc-417c-b695-0dfd1432c6b4_zxouqd.png', 'https://res.cloudinary.com/du1jrse2t/image/upload/v1704205213/youML/Image_PlaceHolder_1_ya9pr6.png'),
//         // ... other users ...
//     ];
//     users.forEach(user => save(user));
//     save(users);
// }

function _addUser(name: string, runs: number, bio: string, imgUrl: string, backImgUrl: string): User {
    return {
        _id: utilService.makeId(),
        name,
        bio,
        imgUrl,
        runs,
        backImgUrl
    };
}
