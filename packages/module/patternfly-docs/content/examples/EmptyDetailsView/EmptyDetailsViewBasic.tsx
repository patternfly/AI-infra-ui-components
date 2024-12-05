import React from 'react';
import { EmptyDetailsView } from '@patternfly/ai-infra-ui-components';
import { Button } from '@patternfly/react-core';
import clusterImage from './empty-state-cluster-storage.svg';

export const EmptyDetailsViewBasic: React.FunctionComponent = () => (
  <EmptyDetailsView
    title="Start by adding cluster storage"
    description="Cluster storage saves your project’s data on a selected cluster. You can optionally connect cluster storage to a workbench."
    iconImage={clusterImage}
    imageSize="240px"
    imageAlt="add cluster storage"
    createButton={<Button>Add cluster storage</Button>}
  />
);
