import React from 'react';
import { Button } from '@chakra-ui/react';

export default {
  title: 'Chakra/Button',
  component: Button
}

export const Success = () => <Button colorScheme="green">Success Button</Button>
export const Danger = () => <Button colorScheme="red">Fail Button</Button>