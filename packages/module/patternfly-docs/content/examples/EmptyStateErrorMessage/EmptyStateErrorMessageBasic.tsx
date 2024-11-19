import * as React from 'react';
import { EmptyStateErrorMessage } from "@patternfly/ai-infra-ui-components";

export const EmptyStateErrorMessageBasic: React.FunctionComponent = () => (
    <EmptyStateErrorMessage
        title="Error loading workloads" 
        bodyText="Check your network connection." 
    >
        Reach out for more assistance.
    </EmptyStateErrorMessage>
);