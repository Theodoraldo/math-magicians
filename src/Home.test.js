import renderer from 'react-test-renderer';
import Home from './components/Home';

test('Check Home Component', () => {
  const home = renderer.create(
    <Home />,
  );
  const homeTree = home.toJSON();
  expect(homeTree).toMatchSnapshot();
});
