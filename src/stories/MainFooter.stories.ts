import type { Meta, StoryObj } from '@storybook/react';
import { MainFooter } from '../cmps/MainFooter';

const meta: Meta<typeof MainFooter> ={
    title: 'Main Footer',
    component: MainFooter,
}

export default meta;

type Story = StoryObj<typeof meta>

export const Base: Story = {

}

