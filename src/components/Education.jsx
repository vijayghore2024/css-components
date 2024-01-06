import React from 'react'

const Education = () => {
  return (
    <div>
      <h1 className='m-4 text-danger text-center'>EDUCATION COMPONENT</h1>

      <div className="container">
      <table class="table table-info">
        <thead>
          <tr>
            <th scope="col">Qualification</th>
            <th scope="col">College</th>
            <th scope="col">Percentage</th>
            <th scope="col">Passout Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">SSC</th>
            <td>ABc</td>
            <td>66.26</td>
            <td>2012</td>
          </tr>
          <tr>
            <th scope="row">HSC</th>
            <td>def</td>
            <td>65.32</td>
            <td>2014</td>
          </tr>
          <tr>
            <th scope="row">BCA</th>
            <td>pqr</td>
            <td>75.75</td>
            <td>2017</td>
          </tr>
          <tr>
            <th scope="row">MCA</th>
            <td>xyz</td>
            <td>77.77</td>
            <td>2021</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default Education
