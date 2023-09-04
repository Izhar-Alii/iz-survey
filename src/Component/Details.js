import React from 'react'

function Details(props) {
  return (
    <div>
        <form className='container w-50 border border-secondary rounded' onSubmit={props.click}>
            <div className="card  mb-3 mt-3">
                <div className="card-body">
                    <div className="mb-3 mt-3">
                        <label htmlFor="name"><b>1. </b> Name</label>
                        <input type="text" className="form-control" name='name' required placeholder="please enter your name"/>
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="email"><b>2. </b> Email address</label>
                        <input type="email" className="form-control" name='email' required placeholder="name@example.com"/>
                    </div>
                    <button type="submit" className="btn btn-primary mb-2">Next</button>
                    <center>
                        <span className='badge badge-pill badge-primary'>1</span>
                        <span className='badge badge-pill'>2</span>
                    </center>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Details