import React from 'react'
import PropTypes from 'prop-types'

const Student = (props) => {

    let {rno, name, city} = props;

    return (
        <div className="card m-3" style={{width: "18rem"}}>
            <img src="https://images.unsplash.com/photo-1682687982470-8f1b0e79151a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Roll No: {rno}</h5>
                    <h5 className="card-title">Name: {name}</h5>
                    <h5 className="card-title">City: {city}</h5>
                </div>
        </div>
    )
}


Student.propTypes = {
    rno: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired
}

Student.defaultProps = {
    rno: 111111,
    name: 'Enter Name Here',
    city: 'Enter City Here'
}

export default Student
