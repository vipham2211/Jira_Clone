import React, {   useEffect, useMemo,  useState } from "react";
import { useSelector } from "react-redux";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS
import {
  AddMore,
  FieldButton,
  LinkItem,
  LinkText,
  MembersContainer,
  GridOverlay,
  StyledProjectManagement,
  Top,
} from "./Styles";
import Avatar from "components/Avatar";
import Icon from "components/Icon";
import Button from "components/Button";
import Tooltip from "components/Tooltip";
import RemoveMember from "./RemoveMember";
import AddMember from "./AddMember";
import Modal from "components/Modal";
import UpdateProject from "./UpdateProject";
import DeleteProject from "./DeleteProject";
import Breadcrumbs from "components/Breadcrumbs";
import Header from "components/Header";
import { updateModalAction } from "redux/action/modalAction";
import { useDispatch } from "react-redux";
import PageLoader from "components/PageLoader";





export default function ProjectManagement() {
  const arrProject = useSelector((state) => state.project.arrProject);
  const updateModal = useSelector((state) => state.modal.updateModal);

  const [dataProject, setDataProject] = useState([]);
  const [loading, setLoading] = useState(true)
  


  const dispatch = useDispatch();



  const renderMembers = (props) => {
    return (
      <MembersContainer>
        {props.value.map((member, index) => (
          <Tooltip
            key={index}
            placement={"top"}
            renderContent={() => (
              <RemoveMember member={member} projectId={props.data.id} />
            )}
          >
            <Avatar avatarUrl={member.avatar} size={25} />
          </Tooltip>
        ))}
        <Tooltip
          type={"click"}
          placement={"right"}
          renderContent={() => <AddMember projectId={props.data.id} />}
        >
          <AddMore>
            <Icon type="plus" />
            add
          </AddMore>
        </Tooltip>
      </MembersContainer>
    );
  };

  const renderButtons = ({ data }) => {
    return (
      <FieldButton>
        <Button
          variant={"primary"}
          type={"button"}
          size="sm"
          icon={"settings"}
          onClick={() => {
            dispatch(updateModalAction(true));
            setDataProject(data);
          }}
        />

        <Tooltip
          type={"click"}
          placement={"top"}
          renderContent={() => <DeleteProject projectId={data.id} />}
        >
          <Button variant={"danger"} type={"button"} size="sm" icon={"trash"} />
        </Tooltip>
      </FieldButton>
    );
  };
  const renderProjectName = ({ data }) => {
    return (
      <LinkItem
        to={`/project/board/projectDetail/${data.id}`}
        onClick={() => 
         { 
          localStorage.removeItem("listTask")
        }
        }
      >
        <LinkText>{data.projectName}</LinkText>
      </LinkItem>
    );
  };

  const defaultColDef = useMemo(() => {
    return {
      filter: true,
      sortable: true,
      floatingFilter: true,
      suppressMenu: true,
      resizable: true,
    };
  }, []);

  const columnDefs = [
    { headerName: "Id", field: "id", filter: "agNumberColumnFilter",width:200, },
    {
      headerName: "Project Name",
      field: "projectName",
      flex:1,
      cellRenderer: renderProjectName,
    },
    { headerName: "Category Name", field: "categoryName", flex:1, },
    { headerName: "Creator", field: "creator.name" ,flex:1, },
    {
      headerName: "Members",
      filter: false,
      floatingFilter: false,
      field: "members",
      flex:1,
      cellRenderer: renderMembers,
    },
    {
      headerName: "Actions",
      filter: false,
      floatingFilter: false,
      sortable: false,
      width:150,
      cellRenderer: renderButtons,
    },
  ];


 useEffect(() => {
    setTimeout(() => setLoading(false), 500)
  }, [])
 
  
 

  return (
    <StyledProjectManagement className="ag-theme-alpine">
      <Top>
        <Breadcrumbs items={["Projects", "Project Management"]} />
        <Header boardName="Project Management" />
      </Top>

      <GridOverlay>
      <AgGridReact
        rowData={arrProject}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        pagination={true}
        paginationPageSize={14}
      />
      {loading && <PageLoader/>}
      </GridOverlay>
      
    
      {updateModal && (
        <Modal
          onClose={updateModalAction}
          variant={"right"}
          width={600}
          renderContent={() => <UpdateProject project={dataProject} />}
        />
      )}
    </StyledProjectManagement>
  );
}
