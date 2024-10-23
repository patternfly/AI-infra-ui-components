import * as React from 'react';
import { Button, FormGroup, FormHelperText, HelperText, HelperTextItem, TextInput } from '@patternfly/react-core';
import { ResourceNameDefinitionPopover } from './ResourceNameDefinitionPopover';
import { ResourceNameField } from './ResourceNameField';
import { NameWithResourceNameFieldData, UseK8sNameDescriptionFieldData } from './types';

export type NameWithResourceNameFieldProps = {
  /** Flag to indicate if the initial focus should be in the name text input */
  autoFocusName?: boolean;
  /** Initial data */
  data: NameWithResourceNameFieldData;
  /** Test id */
  dataTestId: string;
  /** Label of the name field */
  nameLabel?: string;
  /** Callback function on text input changes. Accepts 2 arguments.
   * First is a key determining which text input we handle (name | k8sName | description), second is the updated value. */
  onDataChange?: UseK8sNameDescriptionFieldData['onDataChange'];
};

export const NameWithResourceNameField: React.FC<NameWithResourceNameFieldProps> = ({
  autoFocusName,
  data,
  dataTestId,
  nameLabel = 'Name',
  onDataChange
}: NameWithResourceNameFieldProps) => {
  const [showK8sField, setShowK8sField] = React.useState(false);

  const { name, k8sName } = data;

  return (
    <>
      <FormGroup label={nameLabel} isRequired fieldId={`${dataTestId}-name`}>
        <TextInput
          aria-readonly={!onDataChange}
          data-testid={`${dataTestId}-name`}
          id={`${dataTestId}-name`}
          name={`${dataTestId}-name`}
          autoFocus={autoFocusName}
          isRequired
          value={name}
          onChange={(_event, value) => onDataChange?.('name', value)}
        />
        {!showK8sField && !k8sName.state.immutable && (
          <FormHelperText>
            {k8sName.value && (
              <HelperText>
                <HelperTextItem>
                  The resource name will be <b>{k8sName.value}</b>.
                </HelperTextItem>
              </HelperText>
            )}
            <HelperText>
              <HelperTextItem>
                <Button
                  data-testid={`${dataTestId}-editResourceLink`}
                  variant="link"
                  isInline
                  onClick={() => setShowK8sField(true)}
                  style={{ marginRight: 'var(--pf-t--global--spacer--xs)' }}
                >
                  Edit resource name
                </Button>{' '}
                <ResourceNameDefinitionPopover />
              </HelperTextItem>
            </HelperText>
          </FormHelperText>
        )}
      </FormGroup>
      <ResourceNameField
        allowEdit={showK8sField}
        dataTestId={dataTestId}
        k8sName={k8sName}
        onDataChange={onDataChange}
      />
    </>
  );
};
