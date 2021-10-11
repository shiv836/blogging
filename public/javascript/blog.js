let postCollection=document.querySelector('#posts-collection');

const  fs= firebase.firestore();
button=document.getElementById('submitBtn');
document.getElementById("myBlog").addEventListener('submit',submitForm);
function submitForm(e)
{
    e.preventDefault();
    let postAuthor=document.querySelector("#author").value;

    let postTitle=document.querySelector("#postTitle").value;
    let postDate=document.querySelector("#date").value;
    let postCont=document.querySelector("#postCont").value;
    if(postAuthor ==='' || postTitle ===''|| postDate==='' || postCont==='')
    {
alert("Feilds are empty");
    }
    else{
        fs.collection("users").add({
            author:postAuthor ,
            createdAt: postDate,
            post: postTitle,
            postContent:postCont
        })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
        
      alert("Your blog is submitted! refersh the page to see your blog in latest blog section")
    }
}




function createPost(title,time,content,author)
{
    let div= document.createElement('div');
    div.setAttribute('class','col-md-4');
    let h2=document.createElement('h2');
    let p=document.createElement('p');
    let small=document.createElement('small');
    let vsmall=document.createElement('p');
    vsmall.setAttribute('class','auth');
    h2.textContent=title;
    small.textContent=time;
    p.textContent=content;
    vsmall.textContent=author;
    div.appendChild(h2);
    div.appendChild(small);
    div.appendChild(p);
    div.appendChild(vsmall);
    postCollection.appendChild(div);
}

//getPosts
function getPosts()
{
    fs.collection("users").get().then(snapshot=>
        {
            snapshot.docs.forEach(docs=>{
                createPost(docs.data().post,docs.data().createdAt,docs.data().postContent,docs.data().author)
            });
        }).catch(err=>{
            console.log(err);
        })
}
getPosts();
