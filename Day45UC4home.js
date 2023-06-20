window.addEventListener('DOMContentLoaded', () => {
  createInnerHtml();
});

const createInnerHtml = () => {
  const headerHtml = `<tr>
  <th></th>
  <th>Name</th>
  <th>Gender</th>
  <th>Department</th>
  <th>Salary</th>
  <th>Start Date</th>
  <th>Actions</th>
  </tr>`;
  
  const innerHtml = `${headerHtml}
      <tr>
          <td><img class="profile" alt="" src="../assets/profile-images/Ellipse -1.png"></td>
          <td>Prasad</td>
          <td>Male</td>
          <td>
              <div class="dept-label">Sales</div>
              <div class="dept-label">Finance</div>
          </td>
          <td>350000</td>
          <td>1 Jan 2020</td>
          <td>
              <img name="1" onclick="remove()" alt="delete" src="./delete-black-18dp.svg">
              <img name="1" onclick="update()" alt="edit" src="./create-black-18dp.svg">
          </td>
  </tr>`;
  document.querySelector('#table-display').innerHTML = innerHtml;
}