import { Meta, StoryObj } from '@storybook/react'
import Badge from '.'

export default {
  title: 'Badge',
  component: Badge
} as Meta

export const Default: StoryObj = {
  args: {
    children: 'Promotion'
  }
}
export const WithPrice: StoryObj = {
  args: {
    priceValue: 100
  }
}
