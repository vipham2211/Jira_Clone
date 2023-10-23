import React, { useState } from 'react'
import { User, StyledAddMember, Name } from './Styles'
import { useDispatch, useSelector } from 'react-redux'
import Avatar from 'components/Avatar'
import InputDebounce from 'components/InputDebounce'
import { FixedSizeList } from 'react-window'
import { useMemo } from 'react'
import { assignUserFromProjectAction } from 'redux/action/projectAction'

export default function AddMember({projectId}) {

  const arrUsers = useSelector(state => state.user.arrUsers)
  const dispatch= useDispatch()
  const [arrResult, setArrResult] = useState([])


  const handleSearchInputWithDebounce = (value) => {

    setArrResult(arrUsers.filter(user => user.name.toLowerCase().includes(value.toLowerCase())))
 
  }

  const calcHeightFixedSizeList = useMemo(() => {

    if (arrResult.length > 10) {
      return 200;
    } else {
      return arrResult.length * 35;
    }
  }, [arrResult.length]);

const handleAddUser=(userId)=>{
   
    const dataRequest = {
      projectId,
      userId,
    }
    dispatch(assignUserFromProjectAction(dataRequest))
}

  const renderResult = () => {
    if (arrResult.length !== arrUsers.length) {
      return (
        <FixedSizeList
          height={calcHeightFixedSizeList}
          itemCount={arrResult.length}
          itemSize={35}
          width={"100%"}
        >
          {({ index, style }) => (
            <User key={arrResult[index].userId} style={style} onClick={()=>handleAddUser(arrResult[index].userId)}>
              <Avatar avatarUrl={arrResult[index].avatar} size={25} />
              <Name>{arrResult[index].name}</Name>
            </User>
          )}
        </FixedSizeList>
      )
    }

  }

  return (
    <StyledAddMember>
      <InputDebounce onChange={handleSearchInputWithDebounce} />
      {renderResult()}
    </StyledAddMember>
  )
}
