import { Meta, StoryObj } from '@storybook/react'
import WishListButton from '.'

export default {
  title: 'WishListButton',
  component: WishListButton
} as Meta

export const Default: StoryObj = {
  args: {
    onWishList: false
  }
}

export const OnWishList: StoryObj = {
  args: {
    onWishList: true
  }
}

export const WithoutText: StoryObj = {
  args: {
    onWishList: false,
    withText: false
  }
}
