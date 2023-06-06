import Calculator from './components/Calculator';
import renderer from 'react-test-renderer';

test("Check Calculator Component", () => {
  const cal = renderer.create(
    <Calculator />
  );
  let calTree = cal.toJSON();
  expect(calTree).toMatchSnapshot();
});


