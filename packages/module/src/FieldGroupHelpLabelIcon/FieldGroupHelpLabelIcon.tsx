import * as React from 'react';
import { Popover, FormGroupLabelHelp } from '@patternfly/react-core';

export type FieldGroupHelpLabelIconProps = {
  /** Body content of the popover. Should provide additional context for a form field.
   *  If you want to close the popover after an action within the body content, you can provide a function which will receive a callback as an argument to hide the popover, i.e. bodyContent={hide => <Button onClick={() => hide()}>Close} */
  content: React.ComponentProps<typeof Popover>['bodyContent'];
};

/**
 * A help icon with a popover. Should be used in FormGroup in a labelHelp prop to provide additional context for a form field.
 */
export const FieldGroupHelpLabelIcon: React.FC<FieldGroupHelpLabelIconProps> = ({
  content
}: FieldGroupHelpLabelIconProps) => (
  <Popover bodyContent={content}>
    <FormGroupLabelHelp aria-label="More info" />
  </Popover>
);
