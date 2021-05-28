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
    var totalErr = 0;
    console.log(inputs);
    var valid = true;
    const errBox = document.getElementsByClassName("alert-note");
    inputs.forEach(input => {
        const clsErr = input.parentNode.getElementsByClassName('error');
        if (!input.checkValidity()) {
            //input.parentNode.getElementsByClassName('error')[0].innerHTML = "Error lorem ipsum";
            valid = false;
            clsErr[0].classList.remove("d-none");
            totalErr++;
        } else {
            console.log(input);
            if (clsErr[0]) {
                clsErr[0].classList.add("d-none");
            }
        }
    })
    if (totalErr > 0) {
        errBox[0].classList.remove("d-none");
    } else {
        errBox[0].classList.add("d-none");
    }
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

/**handle buttons */
var draftToggle = new Toggle(".btn-draft",{
    onOn: function(draft) {
        validateForm();
    },
    callback: function(n) {
        draftToggle.triggerOn(n)
    }
});
var previewToggle = new Toggle(".btn-preview",{
    onOn: function(prev) {
        validateForm();
    },
    callback: function(n) {
        previewToggle.triggerOn(n)
    }
});
var saveToggle = new Toggle(".btn-save",{
    onOn: function(s) {
        validateForm();
    },
    callback: function(n) {
        saveToggle.triggerOn(n)
    }
});