import React, { Fragment } from "react";
import Avatar from "components/Avatar";
import { SectionTitle, SelectItemLabel } from "../Styles";
import Select from "components/Select";

export default function AssigneesReporter({
  taskDetail,
  genOptions,
  renderItem,
  members,
  updateField,
}) {
  const userOptions = genOptions(members, "userId", "name");
  const renderMember = renderItem(
    members,
    "userId",
    Avatar,
    SelectItemLabel,
    "name",
    20
  );

  const preserveValueType = () => {
    if (taskDetail.assigness && taskDetail.assigness.length > 0) {
      return taskDetail.assigness.map((item) => item["id"]);
    }
    return [];
  };

  return (
    <Fragment>
      <SectionTitle>Assignees</SectionTitle>
      <Select
        isMulti
        dropdownWidth={343}
        withClearValue={true}
        name="assignees"
        value={preserveValueType()}
        onChange={(value) => updateField("listUserAsign", value)}
        placeholder="Unassigned"
        options={userOptions}
        renderValue={renderMember}
        renderOption={renderMember}
      />
    </Fragment>
  );
}
