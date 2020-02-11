import { Box } from '../../src/components/Box.js'
import React from 'react'
import "../../Styles/Box.css";
import Timer from "../../src/components/Timer";
import Instructions from "../../src/components/Instructions";
import StageCompleted from "../../src/components/StageCompleted";
describe('Box Component', () => {
  it('works', () => {
    // mount the component under test
    cy.mount(<Box />)
    // start testing!
    cy.contains(<Instructions />)
    // mounted component can be selected via its name, function, or JSX
    // e.g. '@HelloState', HelloState, or <HelloState />
  })
})