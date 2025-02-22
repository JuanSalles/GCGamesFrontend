import { Meta, StoryObj } from '@storybook/react'
import CardDetails from '.'

export default {
  title: 'CardDetails',
  component: CardDetails
} as Meta

export const Mobile: StoryObj = {
  args: {
    title: 'Borderlands 3',
    price: 215,
    children:
      'Experience the epic space strategy games that redefined the RTS genre. Control your fleet and build an armada across more than 30 single-player missions.'
  },
  parameters: {
    viewport: {
      defaultViewport: 'iphone13pro'
    }
  }
}

export const Desktop: StoryObj = {
  args: {
    title: 'Borderlands 3',
    price: 215,
    children:
      'Experience the epic space strategy games that redefined the RTS genre. Control your fleet and build an armada across more than 30 single-player missions.'
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    }
  }
}
