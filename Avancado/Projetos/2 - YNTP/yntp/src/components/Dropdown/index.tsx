import React from 'react';
import Select from 'react-select'

interface OptionProps {
  value: string
  label: string
} 

interface DropdownProps {
  options: OptionProps[]
}

const Dropdown: React.FC<DropdownProps> = ({ options }: DropdownProps) => {
  return (
    <Select options={options} />
  )
}

export default Dropdown

