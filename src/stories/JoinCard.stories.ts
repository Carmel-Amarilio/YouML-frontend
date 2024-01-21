import type { Meta, StoryObj } from '@storybook/react';
import { JoinCard } from '../cmps/home page/JoinCard';

const meta: Meta<typeof JoinCard> ={
    title: 'Join Card',
    component: JoinCard,
}

export default meta;

type Story = StoryObj<typeof meta>

export const Base: Story = {

}

