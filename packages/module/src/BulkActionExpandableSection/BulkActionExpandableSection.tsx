import React from 'react';
import { ExpandableSection, Flex, FlexItem, Label, List, ListItemProps } from '@patternfly/react-core';

export type BulkActionExpandableSectionProps = {
  /** Title text that appears in the toggle. */
  title: string;
  /** List of ListItem elements that can be expanded/hidden by the toggle. */
  children: React.ReactElement<ListItemProps>[];
  /** Flag indicating if the children list is initially expanded. */
  isInitiallyExpanded?: boolean;
};

export const BulkActionExpandableSection: React.FunctionComponent<BulkActionExpandableSectionProps> = ({
  title,
  children,
  isInitiallyExpanded = true
}: BulkActionExpandableSectionProps) => {
  const [isExpanded, setIsExpanded] = React.useState(isInitiallyExpanded);

  return (
    <ExpandableSection
      isExpanded={isExpanded}
      onToggle={(_e, expanded) => setIsExpanded(expanded)}
      toggleContent={
        <Flex alignItems={{ default: 'alignItemsCenter' }} spaceItems={{ default: 'spaceItemsSm' }}>
          <FlexItem>{title}</FlexItem>

          <Label color="blue" isCompact>
            {children.length}
          </Label>
        </Flex>
      }
      isIndented
    >
      <List>{children}</List>
    </ExpandableSection>
  );
};
