import React from 'react'
import Spinner from './Spinner.gif'

export default () => {
    return (
      <div>
        <img
        src={Spinner}
        alt="Loading...."
        style={{width: '200px', margin:'auto', display: 'block'}}
        />
      </div>
    )
  }

