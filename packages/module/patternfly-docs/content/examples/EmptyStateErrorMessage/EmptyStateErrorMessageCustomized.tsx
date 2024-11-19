import * as React from 'react';
import { EmptyStateErrorMessage } from "@patternfly/ai-infra-ui-components";
import { DrumstickBiteIcon } from '@patternfly/react-icons';

export const EmptyStateErrorMessageBasic: React.FunctionComponent = () => (
    <EmptyStateErrorMessage
        title="Error loading workloads" 
        bodyText="Check your network connection." 
        icon={DrumstickBiteIcon}
        headingLevel="h3"
        status="info"
    />
);