import React from 'react';
import {
  Alert,
  Button,
  FormGroup,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalProps,
  Stack,
  StackItem,
  TextInput
} from '@patternfly/react-core';

/** Props specifying either one item or a list of items to delete */
type ItemProps =
  | {
      /** Type of item to delete (e.g. project, pipeline server, model registry) */
      item: string;
      /** Name of the item to delete */
      itemName: string;
      items?: never;
      itemNames?: never;
    }
  | {
      /** Type of items to delete in plural (e.g. projects, pipeline servers, model registries) */
      items: string;
      /** List of names of the items to delete */
      itemNames: string[];
      item?: never;
      itemName?: never;
    };

export type DeleteModalProps = Omit<ModalProps, 'children'> &
  ItemProps & {
    /** Delete variant. Destructive and extra-destructive variants will show a warning icon and danger button. For extra-destructive variant, text input confirmation is needed. */
    deleteVariant?: 'extra-destructive' | 'destructive' | 'easily-recoverable';
    /** Message describing what will deleted */
    message?: {
      toDelete?: string;
      resourcesToDelete?: string;
      endNote?: string;
    };
    /** Callback on clicking the delete button */
    onDelete?: () => void;
    /** Callback on clicking the cancel button */
    onCancel?: () => void;
    /** Error indicating deletion has failed */
    error?: Error;
    /** Modal ref */
    ref: React.RefObject<Modal>;
  };

export const DeleteModal: React.FunctionComponent<DeleteModalProps> = ({
  item,
  items,
  itemName,
  itemNames,
  deleteVariant = 'destructive',
  onDelete,
  onCancel,
  message = {
    resourcesToDelete: '',
    endNote: ''
  },
  error,
  ...props
}: DeleteModalProps) => {
  const isPlural = item === undefined;

  const [confirmationText, setConfirmationText] = React.useState('');
  const expectedConfirmationText = isPlural ? `delete ${itemNames.length} ${items}` : itemName;

  const confirmed = deleteVariant === 'extra-destructive' ? confirmationText === expectedConfirmationText : true;

  const toDeleteMessage = message.toDelete ?? ` and all of ${isPlural ? 'their' : 'its'} resources`;

  const itemToDelete = `${itemNames ? `${itemNames.length} ` : ''}${item ?? items}`;
  const modalHeaderTitle = `Delete ${itemToDelete}?`;

  return (
    <Modal variant="small" {...props}>
      <ModalHeader
        title={modalHeaderTitle}
        titleIconVariant={deleteVariant !== 'easily-recoverable' ? 'warning' : undefined}
      />
      <ModalBody>
        <Stack hasGutter>
          <StackItem>
            The{' '}
            {isPlural ? (
              `following ${items}`
            ) : (
              <>
                <b>{itemName}</b> {item}
              </>
            )}
            {toDeleteMessage}
            {message.resourcesToDelete} will be deleted{isPlural && !message.endNote ? ':' : '.'} {message.endNote}
            {isPlural && (
              <List>
                {itemNames.map((name) => (
                  <ListItem key={name}>
                    <b>{name}</b>
                  </ListItem>
                ))}
              </List>
            )}
          </StackItem>
          {deleteVariant === 'extra-destructive' && (
            <StackItem>
              <FormGroup
                label={
                  <span>
                    Type <b>{expectedConfirmationText}</b> to confirm deletion:
                  </span>
                }
              >
                <TextInput
                  aria-label="Delete modal input"
                  onChange={(_e, value) => setConfirmationText(value)}
                  // validated={confirmed ? 'success' : 'default'}
                />
              </FormGroup>
            </StackItem>
          )}
        </Stack>
      </ModalBody>
      <ModalFooter>
        <Button
          isDisabled={!confirmed}
          variant={deleteVariant !== 'easily-recoverable' ? 'danger' : 'primary'}
          onClick={onDelete}
        >
          Delete
        </Button>
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        {error && (
          <Alert
            data-testid="delete-model-error-message-alert"
            title={`Error deleting ${itemToDelete}`}
            isInline
            variant="danger"
          >
            {error.message}
          </Alert>
        )}
      </ModalFooter>
    </Modal>
  );
};
