import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import AppLoginPage from './appLoginPage';

describe('AppLoginPage', () => {
  it('renders login page not error class', () => {
    const { getByLabelText } = render(<AppLoginPage />);
    expect(getByLabelText('Email')).not.toHaveAttribute('style', 'color: red');
    expect(getByLabelText('Пароль')).not.toHaveAttribute('style', 'color: red');
  });
});
