
  var rowCount = 0;

  function addMoreRows(frm, a, b, c) {

  rowCount ++;

  var aa = $("#" + a).val();
  var bb = $("#" + b).val();

  var recRow = '<tr id="rowCount'+rowCount+'"><td>'+rowCount+'</td><td><input name="" type="text" value="'+ aa +'"/></td><td><input name="" type="text"  value="'+ bb +'"/></td><td class="delete"> <a href="javascript:void(0);" onclick="removeRow('+rowCount+');">Delete</a></td></tr>';
  jQuery('#' + c).append(recRow);
  $("#" + c).show();
  }

  function removeRow(removeNum) {
  jQuery('#rowCount'+removeNum).remove();
  }