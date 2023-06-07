import renderer from 'react-test-renderer';
import Calculator from './components/Calculator';

test('Check Calculator Component', () => {
  const cal = renderer.create(
    <Calculator />,
  );
  const calTree = cal.toJSON();
  expect(calTree).toMatchSnapshot();
});
