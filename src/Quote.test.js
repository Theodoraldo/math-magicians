import renderer from 'react-test-renderer';
import Quotes from './components/Quotes';

test('Check Home Component', () => {
  const quotes = renderer.create(
    <Quotes />,
  );
  const quoteTree = quotes.toJSON();
  expect(quoteTree).toMatchSnapshot();
});
