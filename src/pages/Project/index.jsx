import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavbarLeft from "./NavbarLeft";
import Sidebar from "./Sidebar";
import Modal from "components/Modal";
import { ProjectPage } from "./Styles";
import ProjectIssueSearch from "./IssueSearch";
import ProjectIssueCreate from "./IssueCreate";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserAction } from "redux/action/userAction";
import {
  fetchPriorityAction,
  fetchStatusAction,
  fetchTaskTypeAction,
} from "redux/action/taskAction";
import {
  fetchAllProjectAction,
  fetchCategoryProjectAction,
} from "redux/action/projectAction";
import PageLoader from "components/PageLoader";
import {
  taskCreateModalAction,
  taskSearchModalAction,
} from "redux/action/modalAction";

export default function Project() {
  const taskCreateModal = useSelector((state) => state.modal.taskCreateModal);
  const taskSearchModal = useSelector((state) => state.modal.taskSearchModal);

  const isLoadingPage = useSelector((state) => state.spinner.loadingPage);

  //
  const dispatch = useDispatch();
  //
  const arrTaskType = useSelector((state) => state.task.arrTaskType);
  const arrPriority = useSelector((state) => state.task.arrPriority);
  const arrStatus = useSelector((state) => state.task.arrStatus);
  const arrProject = useSelector((state)=>state.project.arrProject)
  const arrUsersByProjectId = useSelector((state)=>state.user.arrUsersByProjectId)
  
  

  useEffect(() => {
    dispatch(fetchUserAction());
    dispatch(fetchTaskTypeAction());
    dispatch(fetchPriorityAction());
    dispatch(fetchStatusAction());
    dispatch(fetchAllProjectAction());
    dispatch(fetchCategoryProjectAction());
  }, [dispatch]);

  if (isLoadingPage) return <PageLoader />;

  return (
    <ProjectPage>
      <NavbarLeft />
      <Sidebar />
      {taskSearchModal && (
        <Modal
          onClose={taskSearchModalAction}
          variant={"aside"}
          width={600}
          renderContent={() => <ProjectIssueSearch />}
        />
      )}
      {taskCreateModal && (
        <Modal
          onClose={taskCreateModalAction}
          width={800}
          renderContent={() => (
            <ProjectIssueCreate
              arrUsersByProjectId={arrUsersByProjectId}
              arrTaskType={arrTaskType}
              arrPriority={arrPriority}
              arrStatus={arrStatus}
              arrProject={arrProject}
            />
          )}
        />
      )}

      <Outlet />
    </ProjectPage>
  );
}
