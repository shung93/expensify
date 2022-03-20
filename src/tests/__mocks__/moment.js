// if we import like we usually do, then it'll keep calling itself (since this is a mock file)
// hence we need the following to call the ACTUAL moment library
// this mock will be called automagically by the test
// and then it will set the MOMENT timestamp if no argument has been provided
const moment = require.requireActual('moment')

export default (timestamp = 0) => {
    return moment(timestamp); 
};