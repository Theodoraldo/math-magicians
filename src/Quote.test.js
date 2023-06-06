import Quotes from './components/Quotes';
import renderer from 'react-test-renderer';

test("Check Home Component", () => {
  const quotes = renderer.create(
    <Quotes />
  );
  let quoteTree = quotes.toJSON();
  expect(quoteTree).toMatchSnapshot();
});
