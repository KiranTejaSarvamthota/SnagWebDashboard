$(document).ready(function(){
	$(document).on('click',".bookmark",function(e){
		var id = e.currentTarget.id ;
		$("#"+id).append("<span class = 'star_status' id='star_"+id+"'> &bigstar; </span>");
	});

	$(document).on('click',".bookmark_remove",function(e){
		var id = e.currentTarget.id ;
		$('#star_'+id).remove();
	});

	$(document).on('click','.applicantid', function(e){ 
		var realID = e.currentTarget.id;
		//console.log(realID)
		applicantid= realID-1;
		$(".modal-body").empty();

    $.getJSON("application.json",function(data){
    	$(".modal-body").append("<br />")
    	$(".modal-body").append("<b>Name : </b>")
		$(".modal-body").append( data[applicantid].name);
		$(".modal-body").append("<br />")
		$(".modal-body").append("<b>Position : </b>")
		$(".modal-body").append( data[applicantid].position);
		$(".modal-body").append("<br />")
		$(".modal-body").append("<b>Applied : </b>")
		$(".modal-body").append( data[applicantid].applied);
		$(".modal-body").append("<br />")
		$(".modal-body").append("<b>Experience : </b>")
		$(".modal-body").append( data[applicantid].experience);
		$(".modal-body").append("<br />")
		$(".modal-body").append("<div id='availability'>")
		$(".modal-body").append(" <b > Availability : </b>" )
		$(".modal-body").append("<br />")
		$(".modal-body").append("Monday: ")
		$(".modal-body").append( data[applicantid].availability.M);
		$(".modal-body").append("<br />")
		$(".modal-body").append("Tuesday: ")
		$(".modal-body").append( data[applicantid].availability.T);
		$(".modal-body").append("<br />")
		$(".modal-body").append("Wednesday: ")
		$(".modal-body").append( data[applicantid].availability.W);
		$(".modal-body").append("<br />")
		$(".modal-body").append("Thursday: ")
		$(".modal-body").append( data[applicantid].availability.Th);
		$(".modal-body").append("<br />")
		$(".modal-body").append("Friday: ")
		$(".modal-body").append( data[applicantid].availability.F);
		$(".modal-body").append("<br />")
		$(".modal-body").append("Saturday: ")
		$(".modal-body").append( data[applicantid].availability.S);
		$(".modal-body").append("<br />")
		$(".modal-body").append("Sunday: ")
		$(".modal-body").append( data[applicantid].availability.Su);
		$(".modal-body").append("</div")
		$(".modal-body").append("<br />")
		$(".modal-body").append(" <b> Question : </b>" )
		$(".modal-body").append( data[applicantid].questions[0].text);
		$(".modal-body").append("<br />")
		$(".modal-body").append(" <b> Answer : </b>" )
		$(".modal-body").append( data[applicantid].questions[0].answer);

		if($('#star_'+realID).length){
			$(".modal-footer").html('<button type="button" id = "'+realID+'" class="btn btn-primary bookmark_remove">Remove BookMark</button>');
		}else{
			$(".modal-footer").html('<button type="button" id = "'+realID+'" class="btn btn-primary bookmark">Save BookMark</button>')
		}

      })

    });


});