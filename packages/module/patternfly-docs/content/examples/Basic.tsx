import React from 'react';
import { Button, Stack, StackItem } from '@patternfly/react-core';
import { DeleteModal } from '@patternfly/ai-infra-ui-components';

export const DeleteModalBasic: React.FunctionComponent = () => {
  const [isModalRecoverableOpen, setIsModalRecoverableOpen] = React.useState(false);
  const [isModalDestructiveOpen, setIsModalDestructiveOpen] = React.useState(false);
  const [isModalExtraDestructiveOpen, setIsModalExtraDestructiveOpen] = React.useState(false);

  const [isModalMultiExtraDestructiveOpen, setIsModalMultiExtraDestructiveOpen] = React.useState(false);

  const [isModalModelRegistryOpen, setIsModalModelRegistryOpen] = React.useState(false);
  const [isModalPipelineServerOpen, setIsModalPipelineServerOpen] = React.useState(false);

  const handleModalRecoverableToggle = (_event: KeyboardEvent | React.MouseEvent) => {
    setIsModalRecoverableOpen(!isModalRecoverableOpen);
  };

  const handleModalDestructiveToggle = (_event: KeyboardEvent | React.MouseEvent) => {
    setIsModalDestructiveOpen(!isModalDestructiveOpen);
  };

  const handleModalExtraDestructiveToggle = (_event: KeyboardEvent | React.MouseEvent) => {
    setIsModalExtraDestructiveOpen(!isModalExtraDestructiveOpen);
  };

  const handleModalMultiExtraDestructiveToggle = (_event: KeyboardEvent | React.MouseEvent) => {
    setIsModalMultiExtraDestructiveOpen(!isModalMultiExtraDestructiveOpen);
  };

  const handleModalModelRegistryToggle = (_event: KeyboardEvent | React.MouseEvent) => {
    setIsModalModelRegistryOpen(!isModalModelRegistryOpen);
  };

  const handleModalPipelineServerToggle = (_event: KeyboardEvent | React.MouseEvent) => {
    setIsModalPipelineServerOpen(!isModalPipelineServerOpen);
  };

  return (
    <>
      <Stack hasGutter style={{ marginBottom: '2rem' }}>
        <div>Modals with one item to delete</div>
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

      <Stack hasGutter style={{ marginBottom: '2rem' }}>
        <div>Modals with multiple items to delete</div>
        <StackItem>
          <Button variant="primary" onClick={handleModalMultiExtraDestructiveToggle}>
            Show delete modal - multiple items (Extra destructive)
          </Button>
        </StackItem>
      </Stack>

      <Stack hasGutter>
        <div>Modals with custom delete messages</div>
        <StackItem>
          <Button variant="primary" onClick={handleModalModelRegistryToggle}>
            Show delete modal - Model registry
          </Button>
        </StackItem>
        <StackItem>
          <Button variant="primary" onClick={handleModalPipelineServerToggle}>
            Show delete modal - Pipeline server
          </Button>
        </StackItem>
      </Stack>

      <DeleteModal
        deleteVariant="easily-recoverable"
        item="user group"
        itemName="my-team-abc"
        isOpen={isModalRecoverableOpen}
        onClose={handleModalRecoverableToggle}
      />
      <DeleteModal
        deleteVariant="destructive"
        item="pipeline"
        itemName="pipeline_456"
        isOpen={isModalDestructiveOpen}
        onClose={handleModalDestructiveToggle}
      />
      <DeleteModal
        deleteVariant="extra-destructive"
        item="project"
        itemName="super-123-project"
        isOpen={isModalExtraDestructiveOpen}
        onClose={handleModalExtraDestructiveToggle}
      />

      {/* Modals with multiple items to delete */}
      <DeleteModal
        deleteVariant="extra-destructive"
        items="projects"
        itemNames={['random-project-101', 'super-123-project', 'anotherOne']}
        isOpen={isModalMultiExtraDestructiveOpen}
        onClose={handleModalMultiExtraDestructiveToggle}
      />

      {/* Modals with custom delete messages */}
      <DeleteModal
        deleteVariant="extra-destructive"
        item="model registry"
        itemName="registry-123"
        message={{
          toDelete: ', its default group, and any permissions associated with it',
          endNote: 'Data located in the database connected to the registry will be unaffected.'
        }}
        isOpen={isModalModelRegistryOpen}
        onClose={handleModalModelRegistryToggle}
      />
      <DeleteModal
        deleteVariant="extra-destructive"
        item="pipeline server"
        itemName="abc-server"
        message={{
          resourcesToDelete: ', including pipelines and runs,',
          endNote:
            'You will not be able to create new pipelines or pipeline runs until you create a new pipeline server.'
        }}
        isOpen={isModalPipelineServerOpen}
        onClose={handleModalPipelineServerToggle}
      />
    </>
  );
};
