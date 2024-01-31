import type { Meta, StoryObj } from '@storybook/react';
import { UsersList } from '../cmps/home page/UsersList';

const meta: Meta<typeof UsersList> = {
    title: 'Users List',
    component: UsersList,
}

export default meta;

type Story = StoryObj<typeof meta>


export const Base: Story = {
    args: {
        users:[{
            _id: '65abfd31e32accc224258288',
            name: "DigiLab",
            bio: "The internets friendliest designer kid.",
            imgUrl: "https://res.cloudinary.com/du1jrse2t/image/upload/v1703685204/youML/f9d2c07e-8580-4334-bc06-e2a505df89a9_k88zbs.png",
            runs: 1300,
            backImgUrl: "https://res.cloudinary.com/du1jrse2t/image/upload/v1704205213/youML/Image_PlaceHolder_1_ya9pr6.png"
        }]
    }
}
export const longName: Story = {
    args: {
        users:[{
            _id: '65abfd31e32accc224258288', 
            name: "DigiLablodingobangodobogobolo",
            bio: "The internets friendliest designer kid.",
            imgUrl: "https://res.cloudinary.com/du1jrse2t/image/upload/v1703685204/youML/f9d2c07e-8580-4334-bc06-e2a505df89a9_k88zbs.png",
            runs: 1300000,
            backImgUrl: "https://res.cloudinary.com/du1jrse2t/image/upload/v1704205213/youML/Image_PlaceHolder_1_ya9pr6.png"
        }]
    }
}
export const noImage: Story = {
    args: {
        users:[{
            _id: '65abfd31e32accc224258288',
            name: "DigiLab",
            bio: "The internets friendliest designer kid.",
            imgUrl: "",
            runs: 0,
            backImgUrl: "https://res.cloudinary.com/du1jrse2t/image/upload/v1704205213/youML/Image_PlaceHolder_1_ya9pr6.png"
        }]
    }
}
