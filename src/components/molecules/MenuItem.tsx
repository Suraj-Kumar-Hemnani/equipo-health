import React, { useState } from 'react';
import { IconType } from 'react-icons/lib';
import { selectMenuStatus } from 'reducers/MenuStateSlice';
import { useAppSelector } from 'store/hooks';
import styled from 'styled-components';

type MenuItemProps = {
  children: React.ReactNode,
  icon?: IconType,
  title: string,
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export default function MenuItem({children, title}: MenuItemProps) {
  const menuStatus = useAppSelector(selectMenuStatus);
  
  return(
    <ItemText className='px-3 py-2' title={title}>
      <>  
        <span style={{marginRight: '15px'}}>{children}</span>   
        {menuStatus.status === 'opened' && <span>{title}</span>}
      </>
    </ItemText>
  )
}

const ItemText = styled.div`
  text-align: left;
  color: var(--white);
  cursor: pointer;

  &:hover{
    background-color: var(--white);
    color: var(--black);
  }
`;