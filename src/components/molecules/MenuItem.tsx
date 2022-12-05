import React, { useState } from 'react';
import { IconType } from 'react-icons/lib';
import styled from 'styled-components';

type MenuItemProps = {
  children: React.ReactNode,
  icon?: IconType,
  title: string,
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export default function MenuItem({children, title}: MenuItemProps) {
  return(
    <ItemText className='p-3'>
      <>  
        <span style={{marginRight: '15px'}}>{children}</span>   
        <span>{title}</span>
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