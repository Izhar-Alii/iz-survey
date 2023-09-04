import React from 'react'

function Question(props) {
  return (
    <div>
        <form className='container w-50 border border-secondary rounded' onSubmit={props.save}>
            <div className="card  mb-3 mt-3">
                <div className="card-body">
                    <div>
                        <label className="card-title"><b>3. </b>What are you currently woking?</label>
                        <div>
                            <input type="radio" name="q1" value="Andiod"/> <label htmlFor="">Andriod</label>{" "}
                            <input type="radio" name="q1" value="Web"/> <label htmlFor="">Web</label> {" "}
                            <input type="radio" name="q1" value="Cyber"/> <label htmlFor="">Cyber</label>{" "}
                            <input type="radio" name="q1" value="Flutter"/> <label htmlFor="">Flutter</label>{" "}
                        </div>
                        <input className="w-100  inputClass" type="text" name='other' placeholder='type here if not listed'/>
                    </div>

                    <div className='mt-3'>
                        <label className="card-title"><b>4. </b>Please rate one University?</label>
                        <div>
                            <input type="radio" name="q2" value="muet"/> <label htmlFor="">muet</label>{" "}
                            <input type="radio" name="q2" value="quest"/> <label htmlFor="">quest</label>{" "}
                            <input type="radio" name="q2" value="NED"/> <label htmlFor="">NED</label>{" "}
                            <input type="radio" name="q2" value="NUST"/> <label htmlFor="">NUST</label>{" "}
                        </div>
                    </div>
                    
                    <label><b>5. </b>Write your review here</label>
                    <div>
                        <textarea className='w-100' name="q3" cols="30" rows="5"></textarea>
                    </div>
                    <button type="sumbit" className="btn btn-primary mb-2 w-20">Save</button>
                    <center>
                        <span className='badge badge-pill'>1</span>
                        <span className='badge badge-pill badge-primary'>2</span>
                    </center>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Question;
