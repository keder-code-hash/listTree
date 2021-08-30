const obj=
{
    "2019":
        [
            [1,2,3,4,5],[],[35],[],[],[12,55],[11,23,45],[],[],[11],[11,23],[111]
        ],
    "2020":
        [
            [1,2,3,4,5],[],[35],[],[],[12,55],[11,23,45],[],[],[11],[11,23],[111]
        ],
    "2021":
        [
            [1,2,3,4,5],[],[35],[],[],[12,55],[11,23,45],[],[],[11],[11,23],[111]
        ]
}
const year_no=3;
const month_no=12;
const month=new Array("January","February","March","April","May","June","July","August","September","October","November","December");


function toggling()
{
    var toggling=document.getElementById('toggle');
    var postAct=document.getElementById('postdata');
    if(toggling.className=='toogle-closed'){
        toggling.setAttribute('class','toogle-open');
        toggling.firstChild.innerHTML="▼&nbsp";
        postAct.style.display='block';
    }
    else{
        toggling.setAttribute('class','toogle-closed');
        toggling.firstChild.innerHTML="►&nbsp";
        postAct.style.display='none';
    }
}
window.onload=()=>{
    console.log(month);
    const parent=document.getElementById('testList');
    let text=document.createElement("p");

    var ulDom=document.createElement('ul');

    var li1=document.createElement('li');
    
    var toogleTag=document.createElement('a');
    toogleTag.setAttribute('id','toggle');
    toogleTag.setAttribute('class','toggle-closed');
    
    toogleTag.setAttribute('onclick','toggling()');

    var spanSignDom=document.createElement('span');
    // spanSignDom.setAttribute('id','togSign');
    spanSignDom.innerHTML="►&nbsp";
    
    toogleTag.appendChild(spanSignDom);
    
    var yearNo=document.createElement('a');
    yearNo.setAttribute('href','YearWiseFilter:'+2019);
    yearNo.innerText="2019";

    var spanPostCount=document.createElement('span');
    spanPostCount.innerHTML='(16)';

    li1.append(toogleTag,yearNo,spanPostCount);

    var li2=document.createElement('li');
    li2.setAttribute('id','postdata');
    for(var count=0;count<obj[2019].length;count++)
    {
        if(obj[2019][count].length>0)
        {       
            var monthUl=document.createElement('ul');
            var month=document.createElement('a');
            month.innerText=month[count];
            month.setAttribute('href','monthWisePost:postid');

            for(let post=0;post<obj[2019][count].length;post++){

                var liDom=document.createElement('li');
                var atag=document.createElement('a');
                atag.setAttribute('href','post:'+obj[2019][count][post]);
                atag.innerHTML="post Title";
                liDom.appendChild(atag);
                month.appendChild(liDom);
            }
        }
        li2.appendChild(month);
    }
    ulDom.append(li1,li2);

    text.textContent="Hii this is working";
    parent.appendChild(ulDom);
}