// import '@testing-library/jest-dom/extend-expect';
import Enzyme from 'enzyme';
// this allow enzyme to be used with th ealtest version of React
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
