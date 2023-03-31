import React from 'react'
import { Button } from '.'

describe('<Stepper />', () => {
  it('renders', () => {
    cy.mount(<Button/>)
  })
  it("Should Include 'Click Me' Text", () => {
    cy.mount(<Button/>)
    cy.contains('Click Me')
  })
})
