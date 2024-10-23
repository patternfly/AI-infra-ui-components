import * as React from 'react';
import { FormGroup, FormSection, TextArea } from '@patternfly/react-core';
import { UseK8sNameDescriptionFieldData } from './types';
import { NameWithResourceNameField } from './NameWithResourceNameField';

export type K8sNameDescriptionFieldProps = {
  /** Flag to indicate if the initial focus should be in the name text input */
  autoFocusName?: boolean;
  /** Initial data */
  data: UseK8sNameDescriptionFieldData['data'];
  /** Test id */
  dataTestId: string;
  /** Label of the description field */
  descriptionLabel?: string;
  /** Label of the name field */
  nameLabel?: string;
  /** Callback function on text input changes. Accepts 2 arguments.
   * First is a key determining which text input we handle (name | k8sName | description), second is the updated value. */
  onDataChange?: UseK8sNameDescriptionFieldData['onDataChange'];
};

/**
 * Use in place of any K8s Resource creation / edit.
 * @see useK8sNameDescriptionFieldData
 */
export const K8sNameDescriptionField: React.FC<K8sNameDescriptionFieldProps> = ({
  autoFocusName,
  data,
  dataTestId,
  descriptionLabel = 'Description',
  nameLabel = 'Name',
  onDataChange
}: K8sNameDescriptionFieldProps) => (
  <FormSection style={{ margin: 0 }}>
    <NameWithResourceNameField
      autoFocusName={autoFocusName}
      data={data}
      dataTestId={dataTestId}
      nameLabel={nameLabel}
      onDataChange={onDataChange}
    />
    <FormGroup label={descriptionLabel} fieldId={`${dataTestId}-description`}>
      <TextArea
        aria-readonly={!onDataChange}
        data-testid={`${dataTestId}-description`}
        id={`${dataTestId}-description`}
        name={`${dataTestId}-description`}
        value={data.description}
        onChange={(_event, value) => onDataChange?.('description', value)}
        resizeOrientation="vertical"
      />
    </FormGroup>
  </FormSection>
);
