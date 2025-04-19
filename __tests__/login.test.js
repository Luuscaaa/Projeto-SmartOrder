// tests/Login.test.tsx

import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { useRouter } from 'expo-router';
import { Login } from '../src/screens/Login'; // ajuste o caminho conforme necessário

// Mock do router do expo-router
jest.mock('expo-router', () => ({
  router: {
    replace: jest.fn(),
  },
  useRouter: () => ({
    replace: jest.fn(),
  }),
}));

describe('Login', () => {
  it('deve redirecionar para /menu com login válido', async () => {
    const { getByText, getAllByA11yRole } = render(<Login />);

    const inputs = getAllByA11yRole('textbox'); // pega todos os TextInputs
    const emailInput = inputs[0];
    const senhaInput = inputs[1];

    fireEvent.changeText(emailInput, 'lucas@fecaf.com');
    fireEvent.changeText(senhaInput, '123456');

    const entrarButton = getByText('Entrar');
    fireEvent.press(entrarButton);

    await waitFor(() => {
      expect(require('expo-router').router.replace).toHaveBeenCalledWith('/menu');
    });
  });

  it('deve exibir alerta com login inválido', async () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    const { getByText, getAllByA11yRole } = render(<Login />);

    const inputs = getAllByA11yRole('textbox');
    const emailInput = inputs[0];
    const senhaInput = inputs[1];

    fireEvent.changeText(emailInput, 'email@errado.com');
    fireEvent.changeText(senhaInput, 'senhaerrada');

    const entrarButton = getByText('Entrar');
    fireEvent.press(entrarButton);

    await waitFor(() => {
      expect(alertMock).toHaveBeenCalledWith('Erro: E-mail ou senha inválidos!');
    });

    alertMock.mockRestore();
  });
});