function customRender(reactElement, container){
    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.Children;
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.target);
    // container.appendChild(domElement);
    // const { props } = reactElement;
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.Children;
    for ( const prop in reactElement.props) {
        if (prop === 'Children') continue; // Skip Children property
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);
}


// const { Children } = require("react");




const reactElement = {
    type:'a',
    props: {
        href: 'https://www.youtube.com',
        target: '_blank',
},Children: 'Click here to visit YouTube'
}

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);