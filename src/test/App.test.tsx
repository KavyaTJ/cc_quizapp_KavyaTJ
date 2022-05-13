import { act, render } from '@testing-library/react';
import App from '../App';


describe('Test App Router', () => {
  
    test("snapshot testing", () => {
        const InputProps = {
          onChange: jest.fn(),
          className: "inputField",
          placeHolder: "name",
        };
        const { container } = render(<input {...InputProps} />);
        expect(container.firstChild).toMatchSnapshot();
      });
   
});
