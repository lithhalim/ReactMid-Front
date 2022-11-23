import React from 'react'

function CatagoryColumn({params}) {
  return (
    <div className='catagory-container'>
        {params.row.role}
    </div>
)
}

export default CatagoryColumn