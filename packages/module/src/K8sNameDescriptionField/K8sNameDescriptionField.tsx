import * as React from 'react';
import {
  Button,
  FormGroup,
  FormHelperText,
  FormSection,
  HelperText,
  HelperTextItem,
  TextArea,
  TextInput
} from '@patternfly/react-core';
import { UseK8sNameDescriptionFieldData } from './types';
import { ResourceNameDefinitionPopover } from './ResourceNameDefinitionPopover';
import { ResourceNameField } from './ResourceNameField';

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
  /** Flag indicating whether to show the description field */
  showDescription?: boolean;
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
  onDataChange,
  showDescription
}: K8sNameDescriptionFieldProps) => {
  const [showK8sField, setShowK8sField] = React.useState(false);

  const { name, k8sName, description } = data;

  return (
    <FormSection style={{ margin: 0 }}>
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
      {showDescription && (
        <FormGroup label={descriptionLabel} fieldId={`${dataTestId}-description`}>
          <TextArea
            aria-readonly={!onDataChange}
            data-testid={`${dataTestId}-description`}
            id={`${dataTestId}-description`}
            name={`${dataTestId}-description`}
            value={description}
            onChange={(_event, value) => onDataChange?.('description', value)}
            resizeOrientation="vertical"
          />
        </FormGroup>
      )}
    </FormSection>
  );
};
