import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DeleteModal } from '../DeleteModal';

test('Renders with confirmation text input by default', () => {
  render(
    <DeleteModal title="Delete project?" deleteName="project-123" onDelete={() => {}} onClose={() => {}}>
      Message
    </DeleteModal>
  );

  expect(screen.getByRole('textbox')).toBeVisible();
});
