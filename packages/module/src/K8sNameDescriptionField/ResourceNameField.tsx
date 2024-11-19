import * as React from 'react';
import { FormGroup, HelperText, TextInput, ValidatedOptions } from '@patternfly/react-core';
import { ResourceNameDefinitionPopover } from './ResourceNameDefinitionPopover';
import { HelperTextItemMaxLength, HelperTextItemValidCharacters } from './HelperTextItemVariants';
import { K8sNameDescriptionFieldData, K8sNameDescriptionFieldUpdateFunction } from './types';

type ResourceNameFieldProps = {
  allowEdit: boolean;
  dataTestId: string;
  k8sName: K8sNameDescriptionFieldData['k8sName'];
  onDataChange?: K8sNameDescriptionFieldUpdateFunction;
};

/** Sub-resource; not for public consumption */
export const ResourceNameField: React.FC<ResourceNameFieldProps> = ({
  allowEdit,
  dataTestId,
  k8sName,
  onDataChange
}) => {
  const formGroupProps: React.ComponentProps<typeof FormGroup> = {
    label: 'Resource name',
    labelHelp: <ResourceNameDefinitionPopover />,
    fieldId: `${dataTestId}-resourceName`
  };

  if (k8sName.state.immutable) {
    return <FormGroup {...formGroupProps}>{k8sName.value}</FormGroup>;
  }

  if (!allowEdit) {
    return null;
  }

  let validated: ValidatedOptions = ValidatedOptions.default;
  if (k8sName.state.invalidLength || k8sName.state.invalidCharacters) {
    validated = ValidatedOptions.error;
  } else if (k8sName.value.length > 0) {
    validated = ValidatedOptions.success;
  }

  return (
    <FormGroup {...formGroupProps} isRequired>
      <TextInput
        data-testid={`${dataTestId}-resourceName`}
        name={`${dataTestId}-resourceName`}
        id={`${dataTestId}-resourceName`}
        isRequired
        value={k8sName.value}
        onChange={(_event, value) => onDataChange?.('k8sName', value)}
        validated={validated}
      />
      <HelperText>
        <HelperTextItemMaxLength k8sName={k8sName} />
        <HelperTextItemValidCharacters k8sName={k8sName} />
      </HelperText>
    </FormGroup>
  );
};
