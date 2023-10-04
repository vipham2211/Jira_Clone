import ErrorPage from "pages/ErrorPage";
import Project from "pages/Project";
import Board from "pages/Project/Board";
import ProjectManagement from "pages/Project/ProjectManagement";
import ProjectCreate from "pages/Project/ProjectCreate";
import { createBrowserRouter, Navigate } from "react-router-dom";
import TaskDetail from "pages/Project/Board/TaskDetail";
import Modal from "components/Modal";
import Login from "pages/Login";






function RequireAuth({children}) {
   
  const TOKEN = localStorage.getItem('TOKEN')

    if(!TOKEN){
     return  <Navigate to={'/login'} replace/>
     
    }
    else{
      return children
    }
}
const Root = () => {
  const isTokenExist = Boolean(localStorage.getItem('TOKEN'));

  return <Navigate to={isTokenExist ? '/project' : '/login'} replace />;
};

 const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement:<ErrorPage/>
    },
    {
      path:"project",
      element:
      <RequireAuth>
      <Project />
     </RequireAuth>,
      children:[
      {index:true,element:  <Navigate to={'/project/management'}   replace/>},
      
      {
      path: "board/projectDetail/:projectId",
      element:
      <RequireAuth>
      <Board />
     </RequireAuth>,
      children:[
      {path:"task/:taskId",
        element: <Modal width={1040} navigate isCloseIcon={false}  renderContent={()=> <TaskDetail/>} />
      }
      ]
      },
     
      {path:'create',element:<ProjectCreate/>},
      {path:'management',
      element:
      <RequireAuth>
      <ProjectManagement/>
      </RequireAuth>
    }

      ]
    },
    {
      path:'login',
      element:<Login/>
    }
  ]);

  export default router