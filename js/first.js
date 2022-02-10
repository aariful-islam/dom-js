// get element by id 

const first=document.getElementById('first-blog')
first.style.color='red'
first.style.border='2px solid black'


// get element by class name 

let frth=document.getElementsByClassName('forth')
frth[0].style.color='red'
frth[0].style.border='2px solid black'


// get Element by tag name 

const tName = document.getElementsByTagName('h3')
for(const tagName of tName){
    tagName.style.color='green'
}



// query selector 

const qSelector =document.querySelectorAll('.blog')
qSelector[0].style.color='yellow'


// set attribute 

const att=document.getElementById('first-blog')
att.setAttribute('h3','hi')


// parent node 
const parentnode = document.getElementById('ss')
parentnode.parentNode.style.color='black'


// add html Element 

const li =document.createElement('li')
li.innerText='forth'
const ul=document.getElementById('list')
ul.appendChild(li)




// add a full section 

const article =document.createElement('article')

const h3=document.createElement('h3')
h3.innerText="blog-5"
const p =document.createElement('p')
p.innerText='ja ichha likhte paro'
article.appendChild(h3)
article.appendChild(p);

const blogSection=document.getElementById('blogs')
blogSection.appendChild(article);