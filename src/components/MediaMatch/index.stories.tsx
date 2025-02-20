import { Meta, StoryObj } from '@storybook/react'
import MediaMatch from '.'

export default {
  title: 'MediaMatch',
  component: MediaMatch
} as Meta

export const Desktop: StoryObj = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    }
  },
  args: {
    children: 'Only on Desktop',
    greaterThan: 'medium'
  }
}

export const Mobile: StoryObj = {
  parameters: {
    viewport: {
      defaultViewport: 'iphone13pro'
    }
  },
  args: {
    children: 'Only on Mobile',
    lessThan: 'medium'
  }
}
