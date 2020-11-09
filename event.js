function hideMe() {
    var x = document.getElementById('txthide')
    console.log(x)
    x.classList
}

function Validation () {

    var err = '';

    var name = document.getElementById('student-name').value;
    var fname = document.getElementById('student-fname').value;
    var email = document.getElementById('student-email').value;

    if (name == '') {
        //err += 'Student Name cannot be empty<br>';
        document.getElementById('student-name-err').innerHTML = 'Student Name cannot be empty';
    }
    
    if (fname == '') {
        //err += 'Father Name cannot be empty<br>';
        document.getElementById('student-fname-err').innerHTML = 'Student Father name cannot be empty';
    }
    
    if (email == '') {
        //err += 'Student Email cannot be empty<br>';
        document.getElementById('student-email-err').innerHTML = 'Student Email cannot be empty';
    }

    if (err == '') {
        // Do submit
    } else {
        // Show Error
        //alert (err);
        document.getElementById('error').innerHTML = err;
    }

    

}