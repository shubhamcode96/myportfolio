let content =document.getElementById('content');

let obs =new Observable((subscriber)=>{

    subscriber.next(hello);
});

content.innerHTML='<p>'+obs.subscribe(ele => ele)+'</p>';

