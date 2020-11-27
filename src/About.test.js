import {render} from '@testing-library/react';
import About from './About';

test('renders about', () => {
    const {getByText} = render(<About />)
    const linkElement = getByText(/Hello About/i);
    expect(linkElement).toBeInTheDocument();
})