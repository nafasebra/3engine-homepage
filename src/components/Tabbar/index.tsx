'use client';

import React, { useState } from 'react'

import { tabType } from './type'
import TabbarButtons from './TabbarButtons';
import TabbarBody from './TabbarBody';

function Tabbar() {
  const [ stateTab, setStateTab ] = useState<tabType>('join');

  const handleSubmitJoin = (value: any) => { }
  const handleSubmitLeaderborad = (value: any) => { }
  const handleSubmitFriends = (value: any) => { }

  const changeState = (value: tabType) => {
    setStateTab(value);
  }

  return (
    <div>
      <TabbarButtons handleChange={changeState} state={stateTab} />
      <TabbarBody />
    </div>
  )
}

export default Tabbar