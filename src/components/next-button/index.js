import React from 'react'
import './index.css'

const NextButton = (props) => {

let { setPageNum } = props;
let { pageNum } = props;

const handlePageChange = () => {
  if (pageNum < 4) {
    setPageNum(pageNum+1)
  }
}

  return (
    <div id='button' onClick={() => {handlePageChange()}}><h3>Next &gt;</h3></div>
  )
}

export default NextButton