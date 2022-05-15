import React, { useState, useContext } from 'react';
import Select from 'react-select'

import { GameContext } from '../../context/gameContext'

import { DropdownProps } from './types'

const customStyles = {
  option: (provided,) => ({
    ...provided,
    color: "black",
  })
}

const Dropdown: React.FC<DropdownProps> = ({ options, player }: DropdownProps) => {
  const { setPlayerAI } = useContext(GameContext)
  
  const handleChange = (option) => {
    setPlayerAI(player, option)
    console.log('option')
  }
  
  return (
    <Select
      options={options}
      styles={customStyles}
      placeholder="Select an AI"
      onChange={handleChange}
    />
  )
}

export default Dropdown
