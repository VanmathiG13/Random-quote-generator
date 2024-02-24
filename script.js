const quotetext=document.querySelector(".quote"),
author=document.querySelector(".author-name"),
quotebtn=document.querySelector(".quotebutton"),
copybtn=document.querySelector(".copy");

function randomquote()
{
    quotebtn.innerText="Loading";
    fetch("https://api.quotable.io/random").then(response=>response.json()).then(resultquote=>{
       console.log(resultquote);
       quotetext.innerText=resultquote.content;
       author.innerText=resultquote.author;
       quotebtn.innerText="New quote";
    });
}
quotebtn.addEventListener("click",randomquote);
copybtn.addEventListener("click",()=>
{
 navigator.clipboard.writeText(quotetext.innerText);
});

