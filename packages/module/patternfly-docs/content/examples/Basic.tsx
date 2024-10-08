import React from 'react';
import { Button, Stack, StackItem } from '@patternfly/react-core';
import { DeleteModal } from '@patternfly/ai-infra-ui-components';

export const DeleteModalBasic: React.FunctionComponent = () => {
  const [isModalRecoverableOpen, setIsModalRecoverableOpen] = React.useState(false);
  const [isModalDestructiveOpen, setIsModalDestructiveOpen] = React.useState(false);
  const [isModalExtraDestructiveOpen, setIsModalExtraDestructiveOpen] = React.useState(false);

  const handleModalRecoverableToggle = (_event: KeyboardEvent | React.MouseEvent | undefined) => {
    setIsModalRecoverableOpen(!isModalRecoverableOpen);
  };

  const handleModalDestructiveToggle = (_event: KeyboardEvent | React.MouseEvent | undefined) => {
    setIsModalDestructiveOpen(!isModalDestructiveOpen);
  };

  const handleModalExtraDestructiveToggle = (_event: KeyboardEvent | React.MouseEvent | undefined) => {
    setIsModalExtraDestructiveOpen(!isModalExtraDestructiveOpen);
  };

  return (
    <>
      <Stack hasGutter style={{ marginBottom: '2rem' }}>
        <StackItem>
          <Button variant="primary" onClick={handleModalRecoverableToggle}>
            Show delete modal (Easily recoverable)
          </Button>
        </StackItem>
        <StackItem>
          <Button variant="primary" onClick={handleModalDestructiveToggle}>
            Show delete modal (Destructive)
          </Button>
        </StackItem>
        <StackItem>
          <Button variant="primary" onClick={handleModalExtraDestructiveToggle}>
            Show delete modal (Extra destructive)
          </Button>
        </StackItem>
      </Stack>

      <DeleteModal
        title="Delete [item]?"
        deleteName="item-name"
        onDelete={() => handleModalRecoverableToggle(undefined)}
        deleteVariant="easily-recoverable"
        isOpen={isModalRecoverableOpen}
        onClose={handleModalRecoverableToggle}
      >
        The <strong>item-name</strong> item will be deleted.
      </DeleteModal>
      <DeleteModal
        title="Delete [item]?"
        deleteName="item-name"
        onDelete={() => handleModalDestructiveToggle(undefined)}
        deleteVariant="destructive"
        isOpen={isModalDestructiveOpen}
        onClose={handleModalDestructiveToggle}
      >
        The <strong>item-name</strong> item will be deleted. [Brief sentence describing consequence of action].
      </DeleteModal>
      <DeleteModal
        title="Delete [item]?"
        deleteName="item-name"
        onDelete={() => handleModalExtraDestructiveToggle(undefined)}
        deleteVariant="extra-destructive"
        isOpen={isModalExtraDestructiveOpen}
        onClose={handleModalExtraDestructiveToggle}
      >
        The <strong>item-name</strong> item will be deleted. [Brief sentence describing consequence of action].
      </DeleteModal>
    </>
  );
};
