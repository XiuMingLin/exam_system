$(function(){
    var listurl = '/student/getExamInfo';
    function getlist(){
        $.getJSON(listurl,function(data){
            if(data.success){
                var html = '';
                data.map(function(item,index){
                    html+='<tr class="text-c">'+
                    '<td>'+item.examName+'</td>'+
                    '<td>'+item.examStopTime+'</td>'+
                    '<td>'+item.owner+'</td>'+
                    '<td>'+item.lastTime+'</td>'+
                    '<td>'+item.examStatue+'</td>'+
                    '<td>'+'<a href="examurl>进入</a>'+'</td>';
                });
                $('exmalist').html(html);
            }
        })
    }
})