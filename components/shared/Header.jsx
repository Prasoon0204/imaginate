import React from 'react'

const Header = ({title, subTitle}) => {
  return (
    <div>
        <h2 className='h2-bold text-dark-600'>{title}</h2>
        {subTitle&&<p className='p-16-regular mt-4'>{subTitle}</p>}
    </div>
  )
}

export default Header