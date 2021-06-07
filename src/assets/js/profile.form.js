//let $dob = new Datepicker('#dob', {yearRange: 60});

const copyLanguage = new Copy({
    addBtn: '#addLang',
    removeBtn: '.remove-lang',
    target: '.copy-lang-row',
    max: 5
});

const copySkill = new Copy({
    addBtn: '#addSkill',
    removeBtn: '.remove-skill',
    target: '.copy-skill-row',
    max: 20
});

const copyEducation = new Copy({
    addBtn: '#addEdu',
    removeBtn: '.remove-edu',
    target: '.copy-edu-row',
    max: 3,
    prepend: true
});

const workingHere = (node) => {
    const w = node.querySelector('.working-here')
    if (w) {
        const nodes = node.querySelectorAll('.to-month,.to-year');
        nodes.forEach(node => {
            node.disabled = w.checked;
        });
        w.addEventListener('change', function (e) {
            nodes.forEach(node => {
                node.disabled = e.currentTarget.checked;
            });
        })
    }
}

const expNodes = document.querySelectorAll('.copy-exp-row');
expNodes.forEach(node => {
    workingHere(node);
});

const copyExperience = new Copy({
    addBtn: '#addExp',
    removeBtn: '.remove-exp',
    target: '.copy-exp-row',
    max: 30,
    prepend: true,
    afterAdd: workingHere
});
function validateForm() {
    var form = account_setting;
    var inputs = form.querySelectorAll('input,select, file');
    var totalErr = 0;
    var valid = true;
    inputs.forEach(input => {
        const clsErr = input.parentNode.getElementsByClassName('error');
        if (!input.checkValidity()) {
            valid = false;
            clsErr[0].classList.remove("d-none");
            totalErr++;
        } else {
            if (clsErr[0]) {
                clsErr[0].classList.add("d-none");
            }
        }
    })
}
var updateToggle = new Toggle(".btn-update-account",{
    onOn: function (s) {
        validateForm();
    },
    callback: function(n) {
        updateToggle.triggerOn(n)
    }
});