import { Meta, StoryObj } from '@storybook/react'
import Button from '.'

export default {
  title: 'Button',
  component: Button
} as Meta

export const WithIcon: StoryObj = {
  args: {
    children: 'Buy now',
    hasCartIcon: true
  }
}
export const Default: StoryObj = {
  args: {
    children: 'Clicke here'
  }
}
