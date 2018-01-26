<script src="jquery.js" type="text/javascript"></script>
<script type="text/javascript">   
      $(function(){
       getTotalPV();
    });
    function getTotalPV()
    {
        $.ajax({ 
            url:"http://cloud.bmob.cn/8b2ba8392c264571/getTotalPV", 
            dataType:'jsonp', 
            data:'', 
            jsonp:'callback', 
            success:function(result) { 
                   //result.results[0].totalPV
               $('#lb_count').html(result.results[0].totalPV);
               //更新次数
               setTotalPV();
            }     
        });    
    }  
    function setTotalPV()
    {
      $.ajax({ 
            url:"http://cloud.bmob.cn/8b2ba8392c264571/setTotalPV", 
            dataType:'jsonp', 
            data:'', 
            jsonp:'callback', 
            success:function(result) {               
            }     
        });
    }
</script>
