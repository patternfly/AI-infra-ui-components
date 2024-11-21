import * as React from 'react';
import ErrorState from "@patternfly/react-component-groups/dist/dynamic/ErrorState";
import { EmptyStateProps } from '@patternfly/react-core';
import { PathMissingIcon } from '@patternfly/react-icons';

export type EmptyStateErrorMessageProps = {
  /** Optional content to be rendered at the bottom of the error message. */
  children?: React.ReactNode;
  /** Content to be rendered as the Title of the error message, below the image. */
  title?: string;
  /** Content to be rendered as the description of the error below the title. */
  bodyText?: string;
} & Omit<EmptyStateProps, 'children' | 'titleText'>;

export const EmptyStateErrorMessage: React.FunctionComponent<EmptyStateErrorMessageProps> = ({
  title,
  bodyText,
  children,
  ...props
}: EmptyStateErrorMessageProps) => (
  <ErrorState 
    titleText={title}
    bodyText={bodyText} 
    headingLevel='h2'
    icon={PathMissingIcon}
    status="none"
    customFooter={children || <div></div>}
    {...props}
  />
);