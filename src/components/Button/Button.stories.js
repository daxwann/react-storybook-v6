import React from 'react';
import Button from './Button';

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Button'
  },
  // decorators: [story => <Center>{story()}</Center>]
}

export const Primary = () => <Button variant='primary'>Primary</Button>
export const Secondary = () => <Button variant='secondary'>Secondary</Button>
export const Success = () => <Button variant='success'>Success</Button>
export const Danger = () => <Button variant='danger'>Danger</Button>

// Templating to extend props
const Template = args => <Button {...args} />

export const PrimaryA = Template.bind({})
PrimaryA.args = {
  variant: 'primary',
  children: 'Primary Args'
}

export const LongPrimaryA = Template.bind({})
LongPrimaryA.args = {
  ...PrimaryA.args,
  children: 'Long Primary Args'
}

export const SecondaryA = Template.bind({})
SecondaryA.args = {
  variant: 'secondary',
  children: 'Secondary Args'
}

export const SuccessA = Template.bind({})
SuccessA.args = {
  variant: 'success',
  children: 'Success Args'
}

export const DangerA = Template.bind({})
DangerA.args = {
  variant: 'danger',
  // children: 'Danger Args'
}