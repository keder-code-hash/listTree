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

function dataGen(months){
    this.month=months;
}
var data=new dataGen(month);


// function toggling(togglingElem,bolckIngElem)
// {
//     var toggling=document.getElementById('toggle');
//     var postAct=document.getElementById('postdata');
//     if(toggling.className=='toogle-closed'){
//         toggling.setAttribute('class','toogle-open');
//         toggling.firstChild.innerHTML="▼&nbsp";
//         postAct.style.display='block';
//     }
//     else{
//         toggling.setAttribute('class','toogle-closed');
//         toggling.firstChild.innerHTML="►&nbsp";
//         postAct.style.display='none';
//     }
// }
function toggling(togglingNode,bolckIngElem)
{
    
    var toggling=document.getElementById('toggleId');
    var postAct=document.getElementById('postAdd');
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

function toggleBlockGen(postid,filterName,postcount)
{
    var parentNode=document.createElement('ul');
    parentNode.setAttribute('class','parentElem');

    var parentExpand=document.createElement('li');
    parentExpand.setAttribute('class','parentExpanded');

    var togglingPNode=document.createElement('a');
    togglingPNode.setAttribute('class','toggle');
    togglingPNode.setAttribute('id','toggleId');
    togglingPNode.setAttribute('onclick','toggling()');

    var spanToggleSign=document.createElement('span');
    spanToggleSign.setAttribute('class','toogle-closed');
    spanToggleSign.innerHTML="►&nbsp";
    // spanToggleSign.innerHTML="▼&nbsp";

    var PostFiltertType=document.createElement('a');
    PostFiltertType.setAttribute('class','postLink filterType');
    PostFiltertType.setAttribute('href','post:'+postid);
    PostFiltertType.innerHTML=filterName;

    var PostCount=document.createElement('span');
    PostCount.setAttribute('class','post-count');
    PostCount.innerHTML=postcount;

    //if the parent node is for year themn we have to add again a parentNode for months.
    //if the parent Node is for month then we have to add again a childNode of postaList
    // var PostList=document.createElement('ul');
    // PostList.setAttribute('class','posts');
    // PostList.setAttribute('id','postAdd');

    togglingPNode.appendChild(spanToggleSign);

    parentExpand.append(togglingPNode,PostFiltertType,postcount);

    parentNode.append(parentExpand);

    return parentNode;
}

window.onload=()=>{
    console.log(data.month);
    const parent=document.getElementById('testList');

    const newBlock=toggleBlockGen('none',2019,19);
    

    for(var count=0;count<obj[2019].length;count++)
    {
        if(obj[2019][count].length>0)
        {       
            const newMonth=toggleBlockGen('none',data.month[count],obj[2019][count].length);

            var monthUl=document.createElement('ul');
            
            for(let post=0;post<obj[2019][count].length;post++){

                var liDom=document.createElement('li');
                var atag=document.createElement('a');
                atag.setAttribute('href','post:'+obj[2019][count][post]);
                atag.innerHTML="post Title";
                liDom.appendChild(atag);
                monthUl.appendChild(liDom);

            }

            newMonth.firstChild.appendChild(monthUl);

            newBlock.firstChild.append(newMonth);
        }
        
    }
    
    parent.appendChild(newBlock);
}