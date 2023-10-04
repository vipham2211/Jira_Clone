import axios from "axios";
import Button from "components/Button";
import ConfirmModal from "components/ConfirmModal";
import { DOMAIN } from "constants/settingSystem";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteTaskModalAction } from "redux/action/modalAction";
import { fetchProjectDetailAction } from "redux/action/projectAction";
import { LoadingSpinnerAction } from "redux/action/spinnerAction";

export default function TaskDetailDelete({ taskDetail }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deleteTaskModal = useSelector((state) => state.modal.deleteTaskModal);
  const isSpinnerLoading = useSelector(
    (state) => state.spinner.isSpinnerLoading
  );

  const handleIssueDelete = async () => {
    dispatch(LoadingSpinnerAction(true));

    setTimeout(async function () {
      // Added setTimeout for waiting 500ms
      try {
        const token = localStorage.getItem("TOKEN");
        const reqInstance = axios.create({
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const { status } = await reqInstance.delete(
          `${DOMAIN}/Project/removeTask?taskId=${taskDetail.taskId}`
        );

        if (status === 200) {
          toast.success("Remove Task Success !", {
            position: "top-right",
            autoClose: 3000,
          });
          dispatch(fetchProjectDetailAction(taskDetail.projectId));
          dispatch(deleteTaskModalAction(false));
          navigate(-1);
        }
        dispatch(LoadingSpinnerAction(false));
      } catch (err) {
        toast.error(`${err.response.data.message} !`, {
          position: "top-right",
          autoClose: 3000,
        });
        dispatch(LoadingSpinnerAction(false));
      }
    }, 500);
  };

  return (
    <Fragment>
      {deleteTaskModal && (
        <ConfirmModal
          title="Are you sure you want to delete this issue?"
          message="Once you delete, it's gone for good."
          confirmText="Delete task"
          onConfirm={handleIssueDelete}
          setIsOpen={deleteTaskModalAction}
          isLoading={isSpinnerLoading}
        />
      )}
      <Button
        icon="trash"
        iconSize={19}
        variant="empty"
        onClick={() => dispatch(deleteTaskModalAction(true))}
      />
    </Fragment>
  );
}
