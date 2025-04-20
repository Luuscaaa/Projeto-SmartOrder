import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { Login } from './login';
import { router } from 'expo-router';

// Mock da função replace do router
jest.mock('expo-router', () => ({
  router: {
    replace: jest.fn(),
  }
}));

describe('Login', () => {

  it('deve redirecionar para a tela menu quando o login for válido', async () => {
    const { getByTestId } = render(<Login />);

    // Preenche os campos de login
    fireEvent.changeText(getByTestId('input-email'), 'lucas@fecaf.com');
    fireEvent.changeText(getByTestId('input-senha'), '123456');

    // Simula o clique no botão de login
    fireEvent.press(getByTestId('button-entrar'));

    // Espera que a navegação tenha ocorrido para a tela '/menu'
    await waitFor(() => expect(router.replace).toHaveBeenCalledWith('/menu'));
  });

  it('não deve redirecionar quando o login for inválido', async () => {
    const { getByTestId } = render(<Login />);

    // Preenche os campos de login com dados inválidos
    fireEvent.changeText(getByTestId('input-email'), 'invalido@dominio.com');
    fireEvent.changeText(getByTestId('input-senha'), 'senhaerrada');

    // Simula o clique no botão de login
    fireEvent.press(getByTestId('button-entrar'));

    // Espera que a navegação NÃO tenha ocorrido
    await waitFor(() => expect(router.replace).not.toHaveBeenCalled());
  });
});
