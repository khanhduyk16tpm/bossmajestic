const copySkill = new Copy({
    addBtn: '#addBenefit',
    removeBtn: '.remove-benefit',
    target: '.copy-benefit-row',
    max: 20
});
function check(form) {
    console.log(form);
    validateForm();
    return false;
}
function validateForm() {
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
    console.log(data);

    var valid = true;
    var title = form.job_title.value;
    var category = form.job_category.value;
    var level = form.education_level.value;
    var exp = form.working_experience.value;
    var work_from = form.work_from.value;
    var work_to = form.work_to.value;
    var work_indefinite = form.work_indefinite.value;
    var min_salary = form.min_salary.value;
    var max_salary = form.max_salary.value;
    var location = form.location.value;
    var scope = form.job_scope.value;
    var requirement = form.requirements.value;
    if (title == "") {
        document.getElementById("error-title").innerHTML = "Error lorem ipsum";
    }
    return false;
}
function getDataForm() {

}