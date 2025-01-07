import React from 'react';
import { EmptyDetailsView } from '@patternfly/ai-infra-ui-components';
import { Button, EmptyStateActions } from '@patternfly/react-core';
import clusterImage from './empty-state-cluster-storage.svg';

export const EmptyDetailsViewBasic: React.FunctionComponent = () => (
  <EmptyDetailsView
    title="Start by adding cluster storage"
    description="Cluster storage saves your project’s data on a selected cluster. You can optionally connect cluster storage to a workbench."
    iconImage={clusterImage}
    imageSize="320px"
    createButton={<Button>Add cluster storage</Button>}
    footerExtraChildren={
      <EmptyStateActions>
        <Button variant="link">Some secondary action</Button>
        <Button variant="link">Another action</Button>
      </EmptyStateActions>
    }
  />
);
