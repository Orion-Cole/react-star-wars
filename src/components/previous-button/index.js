import React from 'react'
import './index.css'

const PreviousButton = (props) => {

let { setPageNum } = props;
let { pageNum } = props;

const handlePageChange = () => {
  if (pageNum > 1) {
    setPageNum(pageNum-1)
  }
}

  return (
    <div id='button' onClick={() => {handlePageChange()}}><h3>&lt; Previous</h3></div>
  )
}

export default PreviousButton