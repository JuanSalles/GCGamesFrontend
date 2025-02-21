import { Meta, StoryObj } from '@storybook/react'
import Price from '.'

export default {
  title: 'Price',
  component: Price
} as Meta

export const Default: StoryObj = {
  args: {
    value: 100
  }
}
