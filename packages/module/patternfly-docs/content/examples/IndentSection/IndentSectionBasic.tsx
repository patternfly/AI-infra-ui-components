import React from 'react';
import { Stack, StackItem } from '@patternfly/react-core';
import { IndentSection } from '@patternfly/ai-infra-ui-components';

export const IndentSectionBasic: React.FunctionComponent = () => {
  return (
    <Stack hasGutter>
      <StackItem>This text is not indented</StackItem>
      <StackItem>
        <IndentSection>
          This text is wrapped in an IndentSection and thus it is indented
        </IndentSection>
      </StackItem>
    </Stack>
  );
};
