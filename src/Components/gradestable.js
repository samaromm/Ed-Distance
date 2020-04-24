import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

const BasicTable = () => {
  return (
    <MDBTable bordered>
      <MDBTableHead color="elegant-color" textWhite>
        <tr>
          <th></th>
          <th>Your grade</th>
          <th>Letter</th>
          <th>Average</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>1st Midterm</td>
          <td>100</td>
          <td>AA</td>
          <td>100</td>
        </tr>
        <tr>
          <td>2nd Midterm</td>
          <td>100</td>
          <td>AA</td>
          <td>100</td>
        </tr>
        <tr>
          <td>Assignments</td>
          <td>100</td>
          <td>AA</td>
          <td>100</td>
        </tr>
        <tr>
          <td>Final</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
}

export default BasicTable;