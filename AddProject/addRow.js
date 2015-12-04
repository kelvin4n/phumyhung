
  var rowCount1 = 0;
  var rowCount2 = 0;
  var rowCount3 = 0;

  function addMoreRows(frm, a, b, c, d) {

  var aa = $("#" + a).val();
  var bb = $("#" + b).val();

	  if(d == 1)
	  {
	  	rowCount1 ++;
	  	var recRow = '<tr id="rowCount1'+rowCount1+'"><td>'+rowCount1+'</td><td><input name="" type="text" value="'+ aa +'"/></td><td><input name="" type="text"  value="'+ bb +'"/></td><td class="delete"> <a href="javascript:void(0);" onclick="removeRow('+rowCount1+',1);">Delete</a></td></tr>';
		jQuery('#' + c).append(recRow);
		$("#" + c).show();
	  }
	  else if (d == 2)
	  {
	  	rowCount2 ++;
	  	var recRow = '<tr id="rowCount2'+rowCount2+'"><td>'+rowCount2+'</td><td><input name="" type="text" value="'+ aa +'"/></td><td><input name="" type="text"  value="'+ bb +'"/></td><td class="delete"> <a href="javascript:void(0);" onclick="removeRow('+rowCount2+',2);">Delete</a></td></tr>';
		jQuery('#' + c).append(recRow);
		$("#" + c).show();
	  }
	  else if (d == 3)
	  {
	  	rowCount3 ++;
	  	var recRow = '<tr id="rowCount3'+rowCount3+'"><td>'+rowCount3+'</td><td><input name="" type="text" value="'+ aa +'"/></td><td><input name="" type="text"  value="'+ bb +'"/></td><td class="delete"> <a href="javascript:void(0);" onclick="removeRow('+rowCount3+',3);">Delete</a></td></tr>';
		jQuery('#' + c).append(recRow);
		$("#" + c).show();
	  }
  }

  function removeRow(removeNum, d) {

  	  if(d == 1)
	  {
	  	jQuery('#rowCount1'+removeNum).remove();
	  }
	  else if (d == 2)
	  {
	  	jQuery('#rowCount2'+removeNum).remove();
	  }
  	  else if (d == 3)
	  {
	  	jQuery('#rowCount3'+removeNum).remove();
	  }

  }