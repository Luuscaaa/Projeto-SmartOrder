import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { Login } from '../screens/login/login.tsx';
import { Alert } from 'react-native';
import { router } from 'expo-router'; // Importando o router para usar no teste

jest.mock('expo-router', () => ({
  useRouter: () => ({
    replace: jest.fn(),
  }),
  router: {
    replace: jest.fn(),
  },
}));

jest.spyOn(Alert, 'alert');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Tela de Login', () => {
  it('deve fazer login com credenciais válidas e redirecionar', async () => {
    const { getByText, getByTestId } = render(<Login />);

    // Obtendo os campos de entrada usando testID
    const inputEmail = getByTestId('input-email'); // campo de e-mail
    const inputSenha = getByTestId('input-senha'); // campo de senha
    const botaoEntrar = getByText('Entrar'); // botão de login

    // Simulando a entrada de dados
    fireEvent.changeText(inputEmail, 'lucas@fecaf.com');
    fireEvent.changeText(inputSenha, '123456');

    // Simulando o clique no botão
    fireEvent.press(botaoEntrar);

    // Espera até que o redirecionamento seja feito
    await waitFor(() => {
      expect(router.replace).toHaveBeenCalledWith('/menu');
    });
  });

  it('deve mostrar erro com credenciais inválidas', async () => {
    const { getByText, getByTestId } = render(<Login />);

    const inputEmail = getByTestId('input-email');
    const inputSenha = getByTestId('input-senha');
    const botaoEntrar = getByText('Entrar');

    // Inserindo credenciais inválidas
    fireEvent.changeText(inputEmail, 'email@falso.com');
    fireEvent.changeText(inputSenha, 'senhaerrada');
    
    // Simulando o clique no botão
    fireEvent.press(botaoEntrar);

    // Esperando o alerta ser exibido
    await waitFor(() => {
      expect(Alert.alert).toHaveBeenCalledWith('Erro', 'E-mail ou senha inválidos!');
    });
  });
});
