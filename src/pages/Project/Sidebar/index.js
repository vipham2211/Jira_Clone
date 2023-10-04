import Icon from "components/Icon";
import ProjectAvatar from "components/ProjectAvatar";
import React from "react";
import { NavLink, useParams } from "react-router-dom";
import {
  Divider,
  LinkItem,
  LinkText,
  NotImplemented,
  ProjectCategory,
  ProjectInfo,
  ProjectName,
  ProjectTexts,
  Sidebar,
} from "./Styles";
import { useSelector } from "react-redux";

export default function ProjectSidebar() {
  const param = useParams();
  const projectDetail = useSelector((state)=> state.project.arrProjectDetail)
  
  if (param.projectId) {
    localStorage.setItem("projectId", param.projectId);
  }
  const projectId = localStorage.getItem("projectId");

  const renderLinkItem = (text, iconType, path, isChosen) => {
    const isImplemented = !!path;
    const linkItemProps = isImplemented
      ? { as: NavLink, to: `${path}` }
      : { as: "div" };
    return (
      <LinkItem {...linkItemProps}>
        <Icon type={iconType} top={1} />
        <LinkText>{text}</LinkText>
        {!isImplemented && (
          <NotImplemented>
            {isChosen ? "Choose a Project !" : "Not Implemented"}
          </NotImplemented>
        )}
      </LinkItem>
    );
  };

  return (
    <Sidebar>
      <ProjectInfo>
        <ProjectAvatar />
        <ProjectTexts>
          <ProjectName>{projectDetail.projectName || 'Untitled' } </ProjectName>
          <ProjectCategory>{projectDetail.length ===0 ?'Untitled': projectDetail.projectCategory.name  } </ProjectCategory>
        </ProjectTexts>
      </ProjectInfo>
      {projectId
        ? renderLinkItem(
            "Kanban Board",
            "board",
            `board/projectDetail/${projectId}`
          )
        : renderLinkItem("Kanban Board", "board", null, true)}

      {renderLinkItem("Project Management", "management", "management")}
      {renderLinkItem("Project Create", "plus", "create")}

      <Divider />
      {renderLinkItem("Releases", "shipping")}
      {renderLinkItem("Issues and filters", "issues")}
      {renderLinkItem("Pages", "page")}
      {renderLinkItem("Reports", "reports")}
      {renderLinkItem("Components", "component")}
    </Sidebar>
  );
}
