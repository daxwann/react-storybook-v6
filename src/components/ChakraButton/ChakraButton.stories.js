import React from 'react';
import { Button } from '@chakra-ui/react';

export default {
  title: 'Chakra/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' }
  }
}

const Template = args => <Button {...args} />

export const Success = Template.bind({})
Success.args = {
  colorScheme: 'green',
  children: 'Success',
}

export const Danger = Template.bind({})
Danger.args = {
  colorScheme: 'red',
  children: 'Danger',
}

export const Log = Template.bind({})
Log.args = {
  colorScheme: 'blue',
  children: 'Log',
  onClick: () => console.log('Button clicked', process.env.STORYBOOK_THEME)
}

export const Knobs = Template.bind({})
Knobs.args = {
  colorScheme: 'purple',
  disabled: false,
  children: 'Label'
}