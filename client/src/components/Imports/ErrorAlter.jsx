import React from 'react'

export default function Error(props) {
  return (
    <div className="btn btn-danger text-light">
        <div onClick={props.clearError}>{props.errorMessage}<i className="" role="alert"></i></div>
    </div>
  )
}
