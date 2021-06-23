$(document).ready(function(){
    $('#about').on("click",function() {
        $('.about').toggleClass('active')
        setTimeout(function () {
            $('.about').removeClass('active');
        }, 3000);
      });

    //  Menu isotope and filter
    var $grid = $(".menu-container").isotope({
        itemSelector: '.filter-item',
        layoutMode: 'fitRows'
      });
  
      // filter items on button click
      $(".button-group").on("click", "button", function(){
          var filterValue = $(this).attr("data-filter");
          $grid.isotope({filter:filterValue});
  
          
      })
  
      // Button background changing 
      $('#summer').on("click", function(){
        $(this).css({'background':'orange', 'color':'black'})
        $('#winter').css({'background':'transparent', 'color':'white'})
      })
      $('#winter').on("click", function(){
        $(this).css({'background':'orange', 'color':'black'})
        $('#summer').css({'background':'transparent', 'color':'white'})
      })


    //   booking table 
    let checked = [false, false, false, false]
    let count = 1;
    checked[0] = true;
    $("#people").on("click", function(){
        checked[1] = true;
        count +=1;
        $('#no_people').html($(this).val())
        $('.date-icon').css({'color': 'rgba(0,0,0)', 'background':'white'})
        $('.pl').css({'background':'black'})
        $(".text2").css({'color':'black'})
        $("#date").removeAttr("disabled");
        $("#getdate").on("click", function(){
            checked[2] = true;
            count+=1;
            if($("date").val() != ""){
                $(".text2").html($("#date").val())
                $('.time-icon').css({'color': 'rgba(0,0,0)', 'background':'white'})
                 $(".text3").css({'color':'black'})
                $('.dl').css({'background':'black'})
                $(".below").css({'right':'100%'})
                $("#date-display").html($("#date").val())
                
                $('.times').on("click", function(e){
                    checked[3] = true;
                    count+=1;
                    console.log(count)
                    $('timing1').css('background', 'transparent');
                    $(e.target).css({'background':'orange'})
                    $(".below").css({'right':'200%'})
                    $('.reserve-icon').css({'color': 'rgba(0,0,0)', 'background':'white'})
                    $('.rl').css({'background':'black'})
                    $(".text4").css({'color':'black'})
                    
                })
     
                    
            }else{
                alert("pls select date")
            }
        })
    })
    
    
    $(".people-icon").on("click", function(){
        if(count >= 2 && checked[0] == true){
            $(".below").css({'right':'0%'})
        }
    })
    $(".date-icon").on("click", function(){
        if(count >= 2 && checked[1] == true){
            $(".below").css({'right':'0%'})
        }
    })
    $(".time-icon").on("click", function(){
        if(count >= 3 && checked[2] == true){
            $(".below").css({'right':'100%'})
        }
    })
    $(".reserve-icon").on("click", function(){
        if(count == 4 && checked[3] == true){
            $(".below").css({'right':'200%'})
        }
    })
    // End of booking table
})