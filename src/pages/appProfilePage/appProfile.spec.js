import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import AppProfilePage from './appProfilePage';


describe('App', () => {
  it('renders first login page', () => {
    render(<AppProfilePage />);
    expect(screen.getByTestId('ProfilePage')).toBeInTheDocument();
  });
});