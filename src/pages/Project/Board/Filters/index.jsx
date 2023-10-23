import React, { useEffect, useRef, useState } from "react";
import {
  AvatarIsActiveBorder,
  Avatars,
  ClearAll,
  Filters,
  SearchInput,
  StyledAvatar,
  StyledButton,
} from "./Styles";

export default function ProjectBoardFilters({
  members,
  lstTask,
  setFilterListTask,
}) {
  const [activeUsers, setActiveUsers] = useState([]);
  const [activeOnly, setActiveOnly] = useState(false);
  const [filterMyTask, setFilterMyTask] = useState([]);
  const [searchTerm,setSearchTerm]= useState('')
  const [tasks, setTasks] = useState([]);
  const [check, setCheck] = useState(false);
  const [filterSearchList, setFilterSearchList] = useState([]);
  const [filterUserList, setFilterUserList] = useState([]);
  const userLogin = JSON.parse(localStorage.getItem("userLogin"));

  const areFiltersCleared = searchTerm||activeOnly || activeUsers.length > 0;

  useEffect(() => {
    const taskObj = {};
    tasks.forEach((task) => {
      if (taskObj[task.statusId]) {
        // this task ID already exists
        // only add if lstTaskDeTail is longer than previous one
        taskObj[task.statusId] =
          task.lstTaskDeTail.length >
          taskObj[task.statusId].lstTaskDeTail.length
            ? task
            : taskObj[task.statusId];
      } else {
        taskObj[task.statusId] = task; // add task if ID is not in object
      }
    });
    const uniqueTasks = Object.values(taskObj);

    setFilterListTask(uniqueTasks);
  }, [setFilterListTask, tasks]);

  useEffect(() => {
    if (filterSearchList.length > 0 && check) {
      setFilterListTask(filterSearchList);
    }
  }, [filterSearchList, setFilterListTask, check]);
  useEffect(() => {
    if (filterMyTask.length > 0 && check) {
      setFilterListTask(filterMyTask);
    }
  }, [filterMyTask, setFilterListTask, check]);
  useEffect(() => {
    if (filterUserList.length > 0 && check) {
      setFilterListTask(filterUserList);
    }
  }, [filterUserList, setFilterListTask, check]);

  const handleChange = (value) => {
    const listTask = JSON.parse(localStorage.getItem("listTask"))
      ? JSON.parse(localStorage.getItem("listTask"))
      : lstTask;
    if (value) {
      setSearchTerm(value)
      const filteredList = listTask.map((item) => ({
        ...item,
        lstTaskDeTail: item.lstTaskDeTail.filter((task) =>
          task.taskName.toLowerCase().includes(value.toLowerCase())
        ),
      }));
      if (filterMyTask.length === 0 && filterUserList.length === 0) {
        setFilterSearchList(filteredList);
        setCheck(true);
      } else {
        setCheck(false);
        setFilterSearchList(filteredList);
        setTasks([...filterMyTask, ...filteredList, ...filterUserList]);
      }
    } else {
      setSearchTerm('')
      if (filterMyTask.length === 0 && filterUserList.length === 0) {
        setFilterListTask(listTask);
        setFilterSearchList([]);
        setCheck(false);
      } else {
        setTasks([...filterMyTask, ...filterUserList]);
        setFilterSearchList([]);
        setCheck(false);
      }
    }
  };

  const toggleActive = (userId) => {
    activeUsers.includes(userId)
      ? setActiveUsers(activeUsers.filter((id) => id !== userId))
      : setActiveUsers([...activeUsers, userId]);
  };
  const userIds = useRef([]);

  const handleFilterUserClick = (userId) => {
    const listTask = JSON.parse(localStorage.getItem("listTask"))
      ? JSON.parse(localStorage.getItem("listTask"))
      : lstTask;
    toggleActive(userId);

    userIds.current = userIds.current.includes(userId)
      ? userIds.current.filter((id) => id !== userId)
      : [...userIds.current, userId];
    if (userIds.current.length > 0) {
    
      const filteredUserList = listTask.map((item) => ({
        ...item,
        lstTaskDeTail: item.lstTaskDeTail.filter((task) =>
          task.assigness.some((user) => userIds.current.includes(user.id))
        ),
      }));
      if (filterSearchList.length === 0 && filterMyTask.length === 0) {
        setFilterUserList(filteredUserList);
        setCheck(true);
      } else {
        setFilterUserList(filteredUserList);
        setTasks([...filteredUserList, ...filterSearchList, ...filterMyTask]);
        setCheck(false);
      }
    } else {
      if (filterSearchList.length === 0 && filterMyTask.length === 0) {
        setFilterListTask(listTask);
        setFilterUserList([]);
        setCheck(false);
      } else {
        setTasks([...filterSearchList, ...filterMyTask]);
        setFilterUserList([]);
        setCheck(false);
      }
    }
  };

  const handleFilterMyTaskClick = () => {
    const listTask = JSON.parse(localStorage.getItem("listTask"))
      ? JSON.parse(localStorage.getItem("listTask"))
      : lstTask;
    setActiveOnly(!activeOnly);

    if (!activeOnly) {
      const filteredMyTaskList = listTask.map((item) => ({
        ...item,
        lstTaskDeTail: item.lstTaskDeTail.filter((task) =>
          task.assigness.some((user) => user.id === userLogin.id)
        ),
      }));
      if (filterSearchList.length === 0 && filterUserList.length === 0) {
        setFilterMyTask(filteredMyTaskList);
        setCheck(true);
      } else {
        setCheck(false);
        setFilterMyTask(filteredMyTaskList);
        setTasks([
          ...filteredMyTaskList,
          ...filterSearchList,
          ...filterUserList,
        ]);
        
      }
    } else {
      if (filterSearchList.length === 0 && filterUserList.length === 0) {
        setCheck(false);
        setFilterListTask(listTask);
        setFilterMyTask([]);
      } else {
        setCheck(false);
        setTasks([...filterSearchList, ...filterUserList]);
        setFilterMyTask([]);
      }
    }
  };

  const handleClearAll = () => {
    const listTask = JSON.parse(localStorage.getItem("listTask"))
      ? JSON.parse(localStorage.getItem("listTask"))
      : lstTask;
    setFilterListTask(listTask);
    setActiveUsers([]);
    setActiveOnly(false);
    setSearchTerm('')
    userIds.current = []
 
  };

  return (
    <Filters>
      <SearchInput icon="search" value={searchTerm}  onChange={handleChange} />
      <Avatars>
        {members &&
          members.map((user) => {
            const isActive = activeUsers.includes(user.userId);
            return (
              <AvatarIsActiveBorder key={user.userId} isActive={isActive}>
                <StyledAvatar
                  avatarUrl={user.avatar}
                  name={user.name}
                  size={32}
                  onClick={() => handleFilterUserClick(user.userId)}
                />
              </AvatarIsActiveBorder>
            );
          })}
      </Avatars>
      <StyledButton
        variant="empty"
        onClick={handleFilterMyTaskClick}
        isActive={activeOnly}
      >
        Only My Task
      </StyledButton>

      {areFiltersCleared && (
        <ClearAll onClick={handleClearAll}>Clear all</ClearAll>
      )}
    </Filters>
  );
}
