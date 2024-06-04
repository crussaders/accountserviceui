
import React from 'react'
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AccountService from './accountService';

test('testing account service',() => {
    render(<AccountService />)
    const element = screen.getByText(/accountService/i);
    expect(element).toBeInTheDocument();

});