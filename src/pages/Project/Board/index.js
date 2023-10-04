import Breadcrumbs from "components/Breadcrumbs";
import Header from "components/Header";
import React, { useEffect, useState } from "react";
import Lists from "./Lists";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProjectDetailAction } from "redux/action/projectAction";
import Filters from "./Filters";

export default function Board() {
  const arrProjectDetail = useSelector(
    (state) => state.project.arrProjectDetail
  );
  const [filtersListTask, setFilterListTask] = useState([]);
  const {members}= useSelector(state => state.project.arrProjectDetail)

  const param = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjectDetailAction(param.projectId));
  }, [param, dispatch]);

  useEffect(() => {
    setFilterListTask(arrProjectDetail.lstTask);
  }, [arrProjectDetail]);

  const renderList = useMemo(() => {
    return <Lists lstTask={filtersListTask} />;
  }, [filtersListTask]);

  return (
    <div>
      <Breadcrumbs
        items={["Projects", arrProjectDetail.projectName ? arrProjectDetail.projectName : "", "Kanban Board"]}  
      />
      <Header boardName="Kanban board" />
      <Filters members={members} lstTask={arrProjectDetail.lstTask}  setFilterListTask={setFilterListTask} />
      {renderList}
      <Outlet />
    </div>
  );
}
