import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe('App', () => {
  it('renders first login page', () => {
    render(<App />);
    expect(screen.getByTestId('LoginPage')).toBeInTheDocument();
  });
  describe('when clicked on new user', () => {
    it('open the correctly page', () => {
        const { getByText } = render(<App />);
        fireEvent.click(getByText('Регистрация'));
        expect(screen.getByTestId('RegisterPage')).toBeInTheDocument();
        fireEvent.click(getByText('Войти'));
        expect(screen.getByTestId('LoginPage')).toBeInTheDocument();
    });
  });
});