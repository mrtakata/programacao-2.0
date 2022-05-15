import React, { useState } from 'react';
import Select from 'react-select'

interface OptionProps {
  value: string
  label: string
} 

interface DropdownProps {
  options: OptionProps[]
}

const customStyles = {
  option: (provided, { isSelected, isFocused }) => ({
    ...provided,
    color: "black",
    backgroundColor: isFocused || isSelected ? "lightgrey" : " white"
  })
}

const Dropdown: React.FC<DropdownProps> = ({ options }: DropdownProps) => {

  const [_, setSelectedOption] = useState()

  const handleChange = (option) => {
    setSelectedOption(option)
    console.log(option)
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

