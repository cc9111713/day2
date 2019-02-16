$.ajax({
    url:'/api/list',
    datatype:'json',
    success:function(data){
        var html=''
        JSON.parse(data).data.forEach(function(item){
            html+=`<span>${item.name}</span>`
        })
        nav.innerHTML=html
    }
})