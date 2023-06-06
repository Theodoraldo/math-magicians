import Home from './components/Home';
import renderer from 'react-test-renderer';

test("Check Home Component", () => {
  const home = renderer.create(
    <Home />
  );
  let homeTree = home.toJSON();
  expect(homeTree).toMatchSnapshot();
});

