import { action, computed, makeObservable, observable, runInAction } from "mobx";

import { userService } from "../services/user.service";
import { User } from "../models/models";



class UsersStore {
    users: User[] = [];
    user?: User;

    constructor() {
        makeObservable(this, {
            users: observable,
            getUsers: action,
            getUser: action,
            total: computed,
        });
    }

    getUsers = async () => {
        try {
            const newUsers = await userService.getUsers();
            runInAction(() => {
                this.users = newUsers;
            });
        } catch (err) {
            console.log('UserActions: err in loadUsers', err);
        }
    };

    getUser = async (id: string) => {
        try {
            const fetchedUser = await userService.getUserById(id);
            runInAction(() => {
                this.user = fetchedUser;
            });
        } catch (err) {
            console.log('UserActions: err in loadUsers', err);
        }
    };

    get total() {
        return this.users.length;
    }
}

export const usersStore = new UsersStore();
