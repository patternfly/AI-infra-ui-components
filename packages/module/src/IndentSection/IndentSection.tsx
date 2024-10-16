import * as React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';

export type IndentSectionProps = {
  /** Content rendered inside the IndentSection. */
  children: React.ReactNode;
};

export const IndentSection: React.FunctionComponent<IndentSectionProps> = ({ children }: IndentSectionProps) => (
  <Flex>
    <FlexItem spacer={{ default: 'spacerLg' }} />
    <FlexItem flex={{ default: 'flex_1' }}>{children}</FlexItem>
  </Flex>
);
