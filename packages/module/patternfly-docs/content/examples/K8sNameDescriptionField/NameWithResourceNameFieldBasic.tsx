import React from 'react';
import {
  NameWithResourceNameField,
  NameWithResourceNameFieldData,
  UseK8sNameDescriptionFieldData
} from '@patternfly/ai-infra-ui-components';
import { Form } from '@patternfly/react-core';

export const NameWithResourceNameFieldBasic: React.FunctionComponent = () => {
  const [name, setName] = React.useState('');
  const [resourceName, setResourceName] = React.useState<string | null>(null);

  const createResourceName = (name: string) => name.toLowerCase().replaceAll(' ', '-');
  const RESOURCE_NAME_MAX_LENGTH = 30;

  const data: NameWithResourceNameFieldData = {
    name: name,
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
    }
  };

  return (
    <Form>
      <NameWithResourceNameField data={data} dataTestId="example-1" onDataChange={onDataChange} />
    </Form>
  );
};
