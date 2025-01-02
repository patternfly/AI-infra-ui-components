import * as React from 'react';
import {
  EmptyState,
  EmptyStateBody,
  EmptyStateActions,
  EmptyStateFooter,
  EmptyStateProps
} from '@patternfly/react-core';

export interface EmptyDetailsViewProps extends Omit<EmptyStateProps, 'children' | 'titleText'> {
  /** Empty state title text. */
  title?: string;
  /** Empty state description - will be rendered inside EmptyStateBody. */
  description?: React.ReactNode;
  /** Source path to an icon image. */
  iconImage?: string;
  /** Alternative text for icon image if image can't load. */
  imageAlt?: string;
  /** Height of an icon image. */
  imageSize?: string;
  /** Flag indicating that creation is allowed. */
  allowCreate?: boolean;
  /** Button which initiates the creation. */
  createButton?: React.ReactNode;
  /** Extra children to render inside EmptyStateFooter. */
  footerExtraChildren?: React.ReactNode;
}

export const EmptyDetailsView: React.FunctionComponent<EmptyDetailsViewProps> = ({
  title,
  description,
  iconImage,
  imageAlt = '',
  allowCreate = true,
  createButton,
  footerExtraChildren = null,
  imageSize = '320px',
  ...props
}: EmptyDetailsViewProps) => (
  <EmptyState
    headingLevel="h3"
    titleText={title}
    variant="lg"
    icon={iconImage ? () => <img style={{ height: imageSize }} src={iconImage} alt={imageAlt} /> : undefined}
    {...props}
  >
    <EmptyStateBody>{description}</EmptyStateBody>
    {allowCreate && createButton ? (
      <EmptyStateFooter>
        <EmptyStateActions>{createButton}</EmptyStateActions>
        {footerExtraChildren}
      </EmptyStateFooter>
    ) : null}
  </EmptyState>
);
