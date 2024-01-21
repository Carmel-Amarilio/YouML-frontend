import type { Meta, StoryObj } from '@storybook/react';
import { MainHeader } from '../cmps/MainHeader';

const meta: Meta<typeof MainHeader> ={
    title: 'Main Header',
    component: MainHeader,
}

export default meta;

type Story = StoryObj<typeof meta>

export const Base: Story = {

}

