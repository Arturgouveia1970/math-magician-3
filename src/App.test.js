import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import Calculator from './components/calculator';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Quotes from './components/Quote';
import calculate from './logic/calculate';
import operate from './logic/operate';

describe('Functions test', () => {
  test('calculate.js test', () => {
    const initialItems = {
      total: 0,
      next: null,
      operation: null,
    };
    const buttonName = '=';
    if (buttonName === '.') {
      expect(calculate(initialItems, buttonName)).toEqual(
        { total: 0, next: null, operation: null },
      );
    } else if (buttonName === '.') {
      expect(calculate(initialItems, buttonName)).toEqual(
        { total: 0.0, next: null, operation: null },
      );
    } else if (buttonName === '1') {
      expect(calculate(initialItems, buttonName)).toEqual(
        { total: null, next: '1' },
      );
    } else if (buttonName === '=') {
      expect(calculate(initialItems, buttonName)).toEqual({});
    }
  });

  test('operate.js addition test', () => {
    const numOne = '1';
    const numTwo = '2';
    const oper = '+';

    expect(operate(numOne, numTwo, oper)).toBe('3');
  });

  test('operate.js subtraction test', () => {
    const numOne = '1';
    const numTwo = '2';
    const oper = '-';

    expect(operate(numOne, numTwo, oper)).toBe('-1');
  });

  test('operate.js multiplication test', () => {
    const numOne = '1';
    const numTwo = '2';
    const oper = 'x';

    expect(operate(numOne, numTwo, oper)).toBe('2');
  });

  test('operate.js division test', () => {
    const numOne = '1';
    const numTwo = '2';
    const oper = '÷';

    expect(operate(numOne, numTwo, oper)).toBe('0.5');
  });

  test('operate.js division by 0 test', () => {
    const numOne = '1';
    const numTwo = '0';
    const oper = '÷';

    expect(operate(numOne, numTwo, oper)).toEqual("Can't divide by 0.");
  });

  test('operate.js remainder test', () => {
    const numOne = '5';
    const numTwo = '2';
    const oper = '%';

    expect(operate(numOne, numTwo, oper)).toEqual('1');
  });

  test('operate.js remainder by 0 test', () => {
    const numOne = '1';
    const numTwo = '0';
    const oper = '%';

    expect(operate(numOne, numTwo, oper)).toEqual("Can't divide by 0.");
  });
});

describe('component test', () => {
  it('Calculator component should perform the calculus correctly on initial run', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Quote component should perform the calculus correctly on initial run', () => {
    const tree = renderer.create(<Quotes />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('NavBar component should perform the calculus correctly on initial run', () => {
    const tree = renderer.create(<Router><NavBar /></Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Home component should perform the calculus correctly on initial run', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Simulation of user clicking button 8 twice', () => {
    render(<Calculator />);
    const buttonE1 = screen.getByText(/8/i);
    userEvent.click(buttonE1);
    userEvent.click(buttonE1);
    expect(screen.getByText(/88/i)).toBeInTheDocument();
  });
});
