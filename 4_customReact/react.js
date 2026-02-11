// const { Children } = require("react");

function customReact(reactElement,container){

    // let domElement=document.createElement(reactElement.type);
    // domElement.setAttribute("href",reactElement.props.href);
    // domElement.setAttribute("target",reactElement.props.target);
    
    // domElement.innerHTML=reactElement.Children;

    // container.appendChild(domElement);






    // now making some modular code--

    // kyunki agr hmne a ki jagah h1 de diya ye 3 attributes de diye ya ek hi diya toh ye nhi chlta kyunki react element me hmne kuch specific define  kiya  isliye isko thoda loop lgyanege taki modular bn jaye 




   let domElement=document.createElement(reactElement.type);
   domElement.innerHTML=reactElement.Children;

   for(const key in reactElement.props){

    if(key==="children") continue;
    domElement.setAttribute(key,reactElement.props[key]);

    
   }
container.appendChild(domElement)

} 


let mainContainer=document.querySelector("#root");

let reactElement={
    type:'a',
    props:{
        href:"https://www.google.com/?zx=1770816001396&no_sw_cr=1",
        target:"_blank"
    },
    Children:"take me to google.com"
}



customReact(reactElement,mainContainer);

