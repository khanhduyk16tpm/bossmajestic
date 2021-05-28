const copySkill = new Copy({
    addBtn: '#addBenefit',
    removeBtn: '.remove-benefit',
    target: '.copy-benefit-row',
    max: 20
});
function check(form) {
    //console.log(form);
    //validateForm();
    return false;
}
function validateForm() {
    var form = post_job;
    var inputs = form.querySelectorAll('input,select,textarea');
    console.log(inputs);
    var valid = true;
    inputs.forEach(input => {
        if (!input.checkValidity()) {
            //document.getElementById("error-title").innerHTML = "Error lorem ipsum";
            input.parentNode.getElementsByClassName('error')[0].innerHTML = "Error lorem ipsum";
            valid = false;
        }
    })
    return valid;
}
function getDataForm() {
    var form = post_job;
    //var inputs = form.getElementsByTagName("input");
    var inputs = form.querySelectorAll('input,select,textarea');
    console.log(inputs);

    var data = {};
    for (var i = 0; i < inputs.length; i++) {
        switch (inputs[i].type) {
            case 'checkbox':
           // case 'radio':
                      data[inputs[i].name] = inputs[i].checked;
                      break;
            default:
                      data[inputs[i].name] = inputs[i].value;            
        }
    }
}