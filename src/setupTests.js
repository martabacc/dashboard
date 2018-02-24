import { configure } from 'enzyme';
//import {expect} from 'chai';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
