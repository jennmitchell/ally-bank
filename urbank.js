$(document).ready(function(){
  $("#newstab").click(function(){  
    $("#newstab").removeClass("sideheader_behind").addClass("sideheader_top");
	$("#archtab").removeClass("sideheader_top").addClass("sideheader_behind");
	$("#archive").hide();
	$("#news").show();
  });

  $("#archtab").click(function(){
    $("#archtab").removeClass("sideheader_behind").addClass("sideheader_top");
	$("#newstab").removeClass("sideheader_top").addClass("sideheader_behind");
	$("#news").hide();
	$("#archive").show();
  });

  var lastindex=window.location.pathname.lastIndexOf("/");
  var path=window.location.pathname.substring(lastindex+1);
  $(".topnav li a").each(function() {
    if ($(this).attr("href") == path) {$(this).parent().addClass("current");}
  });

  var lastindex=window.location.pathname.lastIndexOf("/");
  var path=window.location.pathname.substring(lastindex+1);
  $(".bottomnav li a").each(function() {
    if ($(this).attr("href") == path) {$(this).parent().addClass("current");}
  });

  $.getJSON("code-test.json", function(result){
  var tablestring="";
  
  //sort by earnings
  result.sort(function(a, b) {
    return parseFloat(b.earnings) - parseFloat(a.earnings);
  });
  $.each(result, function(a,object){
	  tablestring += "<tr>";
	  $.each(object, function(a,field){
        tablestring += "<td>";
		if(a=="apy"){
          tablestring += field + " %";
		}
		else if(a=="earnings"){
		  tablestring += "$"+field.toFixed(2);
		}
		else {tablestring += field;}
		tablestring += "</td>";
	  });
	  tablestring += "</tr>";
    });
      $("#ratestable").append(tablestring);
  });

  $("#login_button").click(function(){
    $("#overlay").css("display","block");
    $("#login").css("display","block");
  });

  $("#closelogin").click(function(){
    $("#overlay").css("display","none");
    $("#login").css("display","none");
  });
});
