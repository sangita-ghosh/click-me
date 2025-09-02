const button=document.querySelector('#btn');

button.addEventListener('click', (e)=>{
    const heading1=document.createElement('h1')
    const heading2=document.createElement('h2')
    const heading3=document.createElement('h3')
    const heading4=document.createElement('h4')
    
    const body=document.querySelector('body')

    heading1.innerText="I am heading1"
    heading2.innerText="I am heading2"
    heading3.innerText="I am heading3"
    heading4.innerText="I am heading4"

    body.append(heading1)
    body.append(heading2)
    body.append(heading3)


console.log("hello");

    body.append(heading3)
    body.append(heading4)
    body.style.backgroundColor="#212121"
    body.style.color="#fff"
})