
var clearCheckbox = new NoCallbackToggle(".clear-all",{
    onOn: function(n) {
      var checkboxs = document.getElementsByClassName(n.getAttribute('data-chk-class'));
      for (var i = 0; i < checkboxs.length; i++) {
       checkboxs.item(i).checked = false;
      }
    }
});


var toggleMoreLess = new NoCallbackToggle(".show-more",{
    onOn: function(n) {
      var listCheckbox = document.getElementById(n.getAttribute('data-id'));
      var moreLessBtn = document.getElementById(n.getAttribute('data-button-id'));
      moreLessBtn.innerHTML = '<i class="bi bi-chevron-up"></i> Less';
        listCheckbox.classList.remove("d-none");
        listCheckbox.classList.add("d-inline");
    },
    onOff: function(n) {
        var listCheckbox = document.getElementById(n.getAttribute('data-id'));
        var moreLessBtn = document.getElementById(n.getAttribute('data-button-id'));
        moreLessBtn.innerHTML = '<i class="bi bi-chevron-down"></i> More';
        listCheckbox.classList.remove("d-inline");
        listCheckbox.classList.add("d-none");
        
    },
    success: function() {
        return !0
    }
});

