import React, { Fragment, useRef } from "react";
import { TitleTextarea } from "./Styles";
import { KeyCodes } from "constants/keyCode";

export default function TaskDetailTitle({ taskDetail, updateField }) {
  const $titleInputRef = useRef();

  const handleTitleChange = () => {
    const taskName = $titleInputRef.current.value;
    if (taskName === taskDetail.taskName) return;

    updateField("taskName", taskName);
  };
  return (
    <Fragment>
      <TitleTextarea
        minRows={1}
        placeholder="Short summary"
        defaultValue={taskDetail.taskName}
        ref={$titleInputRef}
        onBlur={handleTitleChange}
        onKeyDown={(event) => {
          if (event.keyCode === KeyCodes.ENTER) {
            event.target.blur();
          }
        }}
      />
    </Fragment>
  );
}
