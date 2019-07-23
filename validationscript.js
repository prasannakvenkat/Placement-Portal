
<script>

function validateForm() {
  var sname = document.forms["Parentsportal"]["sname"].value;
  var regnum = document.forms["Parentsportal"]["regnum"].value;
  var fname = document.forms["Parentsportal"]["fname"].value
  var fnum = document.forms["Parentsportal"]["fnum"].value
  var mailid = document.forms["Parentsportal"]["mailid"].value;
      
      
  var sname = document.forms["Parentsportal"]["sname"].value;
  if (sname == "") {
    alert("Hey yo! looks like you didnt enter the necessary field.");
    return false;
  }
  
  var regnum = document.forms["Parentsportal"]["regnum"].value;
  if (regnum == "") {
    alert("Hey yo! looks like you didnt enter the necessary field.");
    return false;
  }
  
  var fname = document.forms["Parentsportal"]["fname"].value;
  if (fname == "") {
    alert("Hey yo! looks like you didnt enter the necessary field.");
    return false;
  }
  
   var hostel = document.forms["Parentsportal"]["hostel"].value;
  if (hostel == "") {
    alert("Hey yo! looks like you didnt enter the necessary field.");
    return false;
  }
  
  var fnum = document.forms["Parentsportal"]["fnum"].value;
  if (fnum == "") {
    alert("Hey yo! looks like you didnt enter the necessary field.");
    return false;
  }
  
  var mailid = document.forms["Parentsportal"]["mailid"].value;
  if (mailid == "") {
    alert("Hey yo! looks like you didnt enter the necessary field.");
    return false;
  }
}


</script>