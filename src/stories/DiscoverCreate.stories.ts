import type { Meta, StoryObj } from '@storybook/react';
import { DiscoverCreate } from '../cmps/home page/DiscoverCreate';

const meta: Meta<typeof DiscoverCreate> = {
    title: 'Discover Create',
    component: DiscoverCreate,
}

export default meta;

type Story = StoryObj<typeof meta>


export const Base: Story = {
    args: {
        recipe: {
            _id: "65ac055be32accc224258289",
            imgUrl: "https://res.cloudinary.com/du1jrse2t/image/upload/v1703685241/youML/af71231b-0e03-47fe-881d-17c08277b8b3_awcvjy.png",
            likes: 91,
            name: "Space Walking",
            runs: 1100,
            by: {
                imgUrl: "https://res.cloudinary.com/du1jrse2t/image/upload/v1703690065/youML/cba5e98b-2db0-4385-ab4f-3bb2d72aaa07_hnja1y.png",
                name: "Animakid",
                _id: "659a607cc828dc1eea7a5d8a"
            }
        }
    }
}
