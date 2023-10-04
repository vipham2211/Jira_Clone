import React from "react";
import { Link } from "react-router-dom";
import {
  InputElement,
  Issue,
  IssueData,
  IssueSearch,
  IssueTitle,
  IssueTypeId,
  SearchIcon,
  SearchInputCont,
  SectionTitle,
} from "./Styles";
import IssueTypeIcon from "components/TaskTypeIcon";

export default function ProjectIssueSearch() {
  return (
    <IssueSearch>
      <SearchInputCont>
        <InputElement placeholder="Search issues by summary, description..." />
        <SearchIcon type="search" size={22} />
      </SearchInputCont>

      <SectionTitle>Recent Issues</SectionTitle>

      <Link>
        <Issue>
          <IssueTypeIcon type="2" size={25} color="task" />
          <IssueData>
            <IssueTitle>
              You can track how many hours were spent working on an issue, and
              how many hours remain.
            </IssueTitle>
            <IssueTypeId>task-844151</IssueTypeId>
          </IssueData>
        </Issue>
      </Link>
      <Link>
        <Issue>
          <IssueTypeIcon type="1" size={25} color="bug" />
          <IssueData>
            <IssueTitle>
              Each issue has a single reporter but can have multiple assignees.
            </IssueTitle>
            <IssueTypeId>bug-844150</IssueTypeId>
          </IssueData>
        </Issue>
      </Link>
    </IssueSearch>
  );
}
