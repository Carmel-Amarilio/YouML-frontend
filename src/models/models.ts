interface By {
    _id: string;
    name: string;
    imgUrl: string;
}

export interface Recipe {
    _id?: string;
    runs: number;
    name: string;
    likes: number;
    imgUrl: string;
    by?: By;
}

export interface User{
    _id?: string;
    name: string;
    imgUrl: string;
    runs: number;
    bio: string;
    backImgUrl: string;
}