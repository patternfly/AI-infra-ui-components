import React from 'react';
import {
  K8sNameDescriptionField,
  K8sNameDescriptionFieldData,
  UseK8sNameDescriptionFieldData
} from '@patternfly/ai-infra-ui-components';
import { Checkbox, Form } from '@patternfly/react-core';

export const K8sNameDescriptionFieldBasic: React.FunctionComponent = () => {
  const [name, setName] = React.useState('');
  const [resourceName, setResourceName] = React.useState<string | null>(null);
  const [description, setDescription] = React.useState('');
  const [showDescription, setShowDescription] = React.useState(true);

  const createResourceName = (name: string) => name.toLowerCase().replaceAll(' ', '-');
  const RESOURCE_NAME_MAX_LENGTH = 30;

  const data: K8sNameDescriptionFieldData = {
    name: name,
    description: description,
    k8sName: {
      value: resourceName ?? createResourceName(name),
      state: {
        immutable: false,
        invalidCharacters: resourceName !== null && resourceName.includes(' '),
        invalidLength: resourceName !== null && resourceName.length > RESOURCE_NAME_MAX_LENGTH,
        safePrefix: undefined,
        maxLength: RESOURCE_NAME_MAX_LENGTH,
        touched: false
      }
    }
  };

  const onDataChange: UseK8sNameDescriptionFieldData['onDataChange'] = (key, value) => {
    if (key === 'name') {
      setName(value);
    } else if (key === 'k8sName') {
      setResourceName(value);
    } else if (key === 'description') {
      setDescription(value);
    }
  };

  return (
    <>
      <Checkbox
        id="checkbox-1"
        onClick={() => setShowDescription((checked) => !checked)}
        checked={showDescription}
        label="Show description"
      />
      <Form>
        <K8sNameDescriptionField
          showDescription={showDescription}
          data={data}
          dataTestId="example-0"
          onDataChange={onDataChange}
        />
      </Form>
    </>
  );
};
