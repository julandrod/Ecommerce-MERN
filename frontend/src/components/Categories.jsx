import React from 'react'
import { categories } from '../dummyData'
import Wrapper from '../styles/Categories'
import CategoryItem from './CategoryItem'

const Categories = () => {
  return (
    <Wrapper>
      {categories.map(item => (
        <CategoryItem key={item.id} item={item}/>
      ))}
    </Wrapper>
  )
}

export default Categories