import React from 'react';
import { FieldGroupHelpLabelIcon } from '@patternfly/ai-infra-ui-components';
import { Form, FormGroup, TextInput } from '@patternfly/react-core';

export const FieldGroupHelpLabelIconBasic: React.FunctionComponent = () => {
  const [name, setName] = React.useState('');

  const handleNameChange = (_event, name: string) => {
    setName(name);
  };

  return (
    <Form>
      <FormGroup
        label="Full name"
        labelHelp={<FieldGroupHelpLabelIcon content="The name of a person" />}
        isRequired
        fieldId="simple-form-name"
      >
        <TextInput type="text" id="simple-form-name" name="simple-form-name" value={name} onChange={handleNameChange} />
      </FormGroup>
    </Form>
  );
};
