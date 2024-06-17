function getEmployeeInfo(employeeName) {
    
    const employeeNames = ['Andre', 'Dima', 'Vadim', 'Lena', 'Olga'];
        const employeeSalaries = [50000, 60000, 55000, 70000, 65000];
    
    const index = employeeNames.indexOf(employeeName);
    
    if (index === -1) {
      return null;
    }
    
    const employeeInfo = [];
    
    employeeInfo.push(employeeNames[index]);
    employeeInfo.push(employeeSalaries[index]);
    return employeeInfo;
  }
  
  console.log(getEmployeeInfo('Andre'));  // [ 'Andre', 50000 ]
  console.log(getEmployeeInfo('Lena'));  // [ 'Lena', 70000 ]
  console.log(getEmployeeInfo('Liza'));   //  null
  
