import * as React from 'react';
import {
  EmptyState,
  EmptyStateBody,
  Stack,
  StackItem,
  EmptyStateFooter,
} from '@patternfly/react-core';
import { PathMissingIcon } from '@patternfly/react-icons';

export type EmptyStateErrorMessageProps = {
  /** Optional content to be rendered at the bottom of the error message. */
  children?: React.ReactNode;
  /** Content to be rendered as the Title of the error message, below the image. */
  title: string;
  /** Content to be rendered as the description of the error below the title.*/
  bodyText: string;
};

export const EmptyStateErrorMessage: React.FunctionComponent<EmptyStateErrorMessageProps> = ({
  title,
  bodyText,
  children,
}: EmptyStateErrorMessageProps) => (
  <EmptyState headingLevel="h2" icon={PathMissingIcon} titleText={title}>
    <EmptyStateFooter>
      <Stack hasGutter>
        <StackItem>
          <EmptyStateBody>{bodyText}</EmptyStateBody>
        </StackItem>
        {children && <StackItem>{children}</StackItem>}
      </Stack>
    </EmptyStateFooter>
  </EmptyState>
);