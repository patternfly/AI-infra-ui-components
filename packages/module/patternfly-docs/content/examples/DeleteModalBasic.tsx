import React from 'react';
import { Button, Stack, StackItem } from '@patternfly/react-core';
import { DeleteModal } from '@patternfly/ai-infra-ui-components';

export const DeleteModalBasic: React.FunctionComponent = () => {
  const [isModalRecoverableOpen, setIsModalRecoverableOpen] = React.useState(false);
  const [isModalDestructiveOpen, setIsModalDestructiveOpen] = React.useState(false);
  const [isModalExtraDestructiveOpen, setIsModalExtraDestructiveOpen] = React.useState(false);

  return (
    <>
      <Stack hasGutter style={{ marginBottom: '2rem' }}>
        <StackItem>
          <Button variant="primary" onClick={() => setIsModalRecoverableOpen(true)}>
            Show delete modal (Easily recoverable)
          </Button>
        </StackItem>
        <StackItem>
          <Button variant="primary" onClick={() => setIsModalDestructiveOpen(true)}>
            Show delete modal (Destructive)
          </Button>
        </StackItem>
        <StackItem>
          <Button variant="primary" onClick={() => setIsModalExtraDestructiveOpen(true)}>
            Show delete modal (Extra destructive)
          </Button>
        </StackItem>
      </Stack>

      {isModalRecoverableOpen && (
        <DeleteModal
          title="Delete [item]?"
          deleteName="item-name"
          onDelete={() => {}}
          deleteVariant="easily-recoverable"
          onClose={() => setIsModalRecoverableOpen(false)}
        >
          The <strong>item-name</strong> item will be deleted.
        </DeleteModal>
      )}

      {isModalDestructiveOpen && (
        <DeleteModal
          title="Delete [item]?"
          deleteName="item-name"
          onDelete={() => {}}
          deleteVariant="destructive"
          onClose={() => setIsModalDestructiveOpen(false)}
        >
          The <strong>item-name</strong> item will be deleted. [Brief sentence describing consequence of action].
        </DeleteModal>
      )}

      {isModalExtraDestructiveOpen && (
        <DeleteModal
          title="Delete [item]?"
          deleteName="item-name"
          onDelete={() => {}}
          deleteVariant="extra-destructive"
          onClose={() => setIsModalExtraDestructiveOpen(false)}
        >
          The <strong>item-name</strong> item will be deleted. [Brief sentence describing consequence of action].
        </DeleteModal>
      )}
    </>
  );
};
