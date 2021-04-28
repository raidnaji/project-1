// Take comments from the form and place them as the last comment on the page above the form

//resuable function for determining current month (given by Adrian)
const day = function (date) {
    switch (parseInt(date)) {
        case 0:
            return "Sunday"
        case 1:
            return "Monday"
        case 2:
            return "Tuesday"
        case 3:
            return "Wednesday"
        case 4:
            return "Thursday"
        case 5:
            return "Friday"
        case 6:
            return "Saturday"
        default:
            return "";
    }
}
// reusable function for determining current day (given by Adrian)
const month = function (date) {
    switch (parseInt(date)) {
        case 0:
            return "January"
        case 1:
            return "February"
        case 2:
            return "March"
        case 3:
            return "April"
        case 4:
            return "May"
        case 5:
            return "June"
        case 6:
            return "July"
        case 7:
            return "August"
        case 8:
            return "September"
        case 9:
            return "October"
        case 10:
            return "Novemeber"
        case 11:
            return "December"
        default:
            return "";
    }
}

//select form and save in a variable 
const form = document.querySelector('form');

//add an event listener to the form 
form.addEventListener('submit', function (event) {
    //stop default behaviour of the page refreshing on form submit
    event.preventDefault();

    //
    const date = new Date();

    //save the user's given name, email and comment from the form inputs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const commentText = document.getElementById('comment').value;

    //select the comment blog comment container

    const commentContainer = document.querySelector('.blogCommentContainer');
    console.log(name);
    console.log(email);
    console.log(commentText);

    //add a div for new incoming comments
    const newComment = document.createElement('div');
    newComment.classList.add('blog3');

    //add a div for images to have the parent class of blogImageContainer

    const blogImageContainer = document.createElement('div');
    blogImageContainer.classList.add('blogImageContainer')

    //add a div for comments to have the parent class of blog3TextContainer

    const blog3TextContainer = document.createElement('div');
    blog3TextContainer.classList.add('blog3TextContainer');

    //add an image tag for the new comments
    const newCommentImage = document.createElement('img');
    // newCommentImage.classList.add("blogImageContainer");
    newCommentImage.setAttribute('src', 'https://picsum.photos/200');

    //add p element for the spcific name, date and comment of the new comment
    const newCommentDate = document.createElement('p');
    const newCommentDateContent = `${day(date.getDay())} ${month(date.getMonth())} ${date.getDate()}, ${date.getFullYear()} by ${name}`;
    //the text content that will go into the p of the newCommentDate comes from newCommentDateContent
    newCommentDate.textContent = newCommentDateContent;

    const newCommentContent = document.createElement('p');
    newCommentContent.innerHTML = commentText;
    console.log(newCommentContent);

    //add the new elements to the newComment div
    // newComment.appendChild(newCommentImage);
    // newComment.appendChild(newCommentDate);
    // newComment.appendChild(newCommentContent);

    blogImageContainer.appendChild(newCommentImage);
    blog3TextContainer.appendChild(newCommentDate);
    blog3TextContainer.appendChild(newCommentContent);

    newComment.appendChild(blogImageContainer);
    newComment.appendChild(blog3TextContainer);
    newComment.appendChild(blog3TextContainer);

    //add the new comment div into the large blog comment div (which already includes comments from the HTML)
    commentContainer.appendChild(newComment);

    document.getElementById("blogForm").reset();

    //*******Much of this code was built with help and thanks to Adrian in a breakout room with Aubrey*/
})
