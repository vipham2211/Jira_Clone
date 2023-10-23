import React from "react";
import {
  FieldCont,
  ModalContent,
  ModalTitle,
  StyledTrackingModal,
  Actions,
} from "./Styles";
import TrackingWidget from "components/TrackingWidget";
import Form from "components/Form";
import Button from "components/Button";
import { useDispatch } from "react-redux";
import { timeTrackingModalAction } from "redux/action/modalAction";

export default function TrackingModal({
  timeSpent,
  timeRemaining,
  estimate,
  setTimeSpent,
  setTimeRemaining,
  $timeRemainingRef,
  $spentTimeRef,
  ...props
}) {
  const dispatch = useDispatch();

  return (
    <StyledTrackingModal>
      <ModalTitle>Time tracking</ModalTitle>
      <TrackingWidget
        timeSpent={timeSpent}
        timeRemaining={timeRemaining}
        estimate={estimate}
      />
      <ModalContent>
        <FieldCont>
          <Form.Field
            name="timeTrackingSpent"
            label="Time spent (hours)"
            debounce
            isNumberValue
            filter={/^\d{0,6}$/}
            setValueState={setTimeSpent}
            $ref={$spentTimeRef}
          />
        </FieldCont>

        <FieldCont>
          <Form.Field
            name="timeTrackingRemaining"
            label="Time remaining (hours) "
            debounce
            isNumberValue
            filter={/^\d{0,6}$/}
            setValueState={setTimeRemaining}
            $ref={$timeRemainingRef}
          />
        </FieldCont>
      </ModalContent>
      <Actions>
        <Button
          type="button"
          variant="primary"
          onClick={() => dispatch(timeTrackingModalAction(false))}
        >
          Done
        </Button>
      </Actions>
    </StyledTrackingModal>
  );
}
