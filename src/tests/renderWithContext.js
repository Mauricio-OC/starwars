import React from 'react';
import { render } from '@testing-library/react';
import DataProvider from '../Context/DataProvider';

export default function renderWithContext(children) {
  return (
    render(
      <DataProvider>
        { children }
      </DataProvider>,
    )
  );
}
