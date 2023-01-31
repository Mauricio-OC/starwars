import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import testData from '../../cypress/mocks/testData';
import App from '../App';
import renderWithContext from './renderWithContext';

afterEach(() => jest.clearAllMocks());

describe('Testes do projeto Star Wars', () => {
  it('testa planetas', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(testData),
    });
    await act(async () => {
      renderWithContext(<App />);
    });
    const eleven = 11
    const filter = screen.getByTestId('column-filter');
    const comparison = screen.getByTestId('comparison-filter');
    const number = screen.getByTestId('value-filter');
    waitFor(() => expect(screen.getAllByRole('row')).toHaveLength(eleven));
    userEvent.selectOptions(filter, ['orbital_period']);
    userEvent.selectOptions(comparison, ['maior que']);
    userEvent.type(number, '1000');
    userEvent.selectOptions(filter, ['rotation_period']);
    userEvent.selectOptions(comparison, ['maior que']);
    userEvent.selectOptions(comparison, ['igual a']);
    userEvent.selectOptions(comparison, ['menor que']);
    userEvent.type(number, '20');

    const planetBespin = screen.findByRole('cell', { name: /bespin/i });
    expect(planetBespin).toBeDefined();
  });
  test('Verifica api', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(testData),
    }));

    await act(async () => {
      renderWithContext(<App />);
    });
    expect(global.fetch).toHaveBeenCalled();
    const name = screen.getByTestId(/name-filter/i);
    const column = screen.getByTestId(/column-filter/i);
    expect(name).toBeInTheDocument;
    expect(column).toBeInTheDocument;
    userEvent.type(name, 'tato');
  });
});
