 $(document).ready(function(){
        $('input[type="radio"]').click(function(){
            if($(this).attr("value")=="round"){
                $(".box").hide("fast");
                 $(".cont1").hide("fast");
                $(".return").show("fast");
                $(".cont").show("slow");
            }
            if($(this).attr("value")=="one"){
                $(".box").hide("fast");
                $(".cont1").hide("fast");
                $(".cont").show("slow");
            }
            if($(this).attr("value")=="multy"){
                $(".cont").hide("slow");
                $(".cont1").show("slow");
            }
            if($(this).attr("value")=="self"){
                $(".suggestion").hide("slow");
                $(".places").show("fast");
            }
            if($(this).attr("value")=="helper"){
                
                $(".places").hide("slow");
                $(".suggestion").show("fast");
            }
            
        });
    });


