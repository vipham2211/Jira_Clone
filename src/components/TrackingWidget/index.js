import React from 'react'
import { Bar, BarCont, Right, StyledTrackingWidget, Values, WatchIcon } from './Styles'

export default function TrackingWidget({ timeSpent , timeRemaining  , estimate  }) {



  const width = timeRemaining  || timeRemaining===0  ? (Number(timeSpent) / (Number(timeSpent) + Number(timeRemaining))) * 100 : (Number(timeSpent) / (Number(estimate)+Number(timeSpent))) * 100


  return (
    <StyledTrackingWidget  >
      <WatchIcon type="stopwatch" size={26} top={-1} />
      <Right>
        <BarCont>
          <Bar width={(width ? width : 0)} />
        </BarCont>
        <Values>
          <div> {timeSpent ? timeSpent + 'h logged' : 'No time logged'} </div>
          <div> {timeRemaining   || timeRemaining===0    ? timeRemaining + 'h remaining' : estimate + 'h estimate'} </div>
        </Values>
      </Right>
    </StyledTrackingWidget>
  )
}