import React from 'react'
import Search from './Search'
import Sort from './Sort'

const Control = () => {
  return (
    <div className="row">
    {/* Search */}
        <Search/>
    {/* --End Serach-- */}

    {/* Sort */}
        <Sort/>
    {/* --End Sort-- */}


    <div className="col-4"></div>
  </div>
)
}

export default Control