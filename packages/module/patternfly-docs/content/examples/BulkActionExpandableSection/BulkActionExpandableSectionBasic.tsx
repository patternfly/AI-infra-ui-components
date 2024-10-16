import React from 'react';
import { ListItem } from '@patternfly/react-core';
import { BulkActionExpandableSection } from '@patternfly/ai-infra-ui-components';

export const BulkActionExpandableSectionBasic: React.FunctionComponent = () => {
  const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ];

  return (
    <>
      <BulkActionExpandableSection title="Items">
        {items.map((item) => (
          <ListItem key={item.id}>{item.name}</ListItem>
        ))}
      </BulkActionExpandableSection>

      <BulkActionExpandableSection title="More items" isInitiallyExpanded={false}>
        {[<ListItem key="item-A">Item A</ListItem>, <ListItem key="item-B">Item B</ListItem>]}
      </BulkActionExpandableSection>
    </>
  );
};
