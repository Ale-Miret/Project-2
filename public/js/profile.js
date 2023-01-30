// const newFormHandler = async (event) => {
//     event.preventDefault();

//     const movie_name = document.getElementById("#movie-name-box").value.trim();
//     const rating = document.getElementById("#review-title-box").value.trim();
//     const review_comment = document.getElementById("#review-desc").value.trim();
    
//     if(movie_name && rating && review_comment) {
//         const response = await fetch('/api/reviews', {
//             method: 'POST',
//             body: JSON.stringify({ movie_name: movie_name, rating: rating, review_comment: review_comment }),
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });
//         if(response.ok) {
//             document.location.replace('/profile');
//         } else {
//             alert('Could not post review!') 
//         }
//     }
// };

// const deleteButtonHandler = async (event) => {
//     if (event.target.hasAttribute('data-id')) { 
//         const id = event.target.hasAttribute('data-id');

//         const response = await fetch(`api/reviews/${id}`, {
//             method: 'DELETE',
//         });
//         if(response.ok) {
//             document.location.replace('/profile');
//         } else {
//             alert('Could Not Delete Post!');
//         }
//     }
// };

// const reviewList = document.querySelector('.review-list');
// if (reviewList) {
//   reviewList.addEventListener('click', deleteButtonHandler);
// }

// const form = document.querySelector('.new-review-form');
// if (form) {
//   form.addEventListener('submit', newFormHandler);
// }

// document
//     .querySelector('.new-review-form')
//     .addEventListener('submit', newFormHandler);

// document
//     .querySelector('.review-list')
//     .addEventListener('click', deleteButtonHandler);

const newFormHandler = async (event) => {
    event.preventDefault();

    const movie_name = document.getElementById("movie-name-box").value.trim();
    const rating = document.getElementById("review-title-box").value.trim();
<<<<<<< HEAD
    const review_comment = document.getElementById("review-desc").value.trim();
=======
    const review_comment = document.getElementById("review-desc-box").value.trim();
>>>>>>> b593642ea88ea06adcce9c53b249df31203995ff
    
    if(movie_name && rating && review_comment) {
        const response = await fetch('/api/review', {
            method: 'POST',
            body: JSON.stringify({ movie_name: movie_name, rating: rating, review_comment: review_comment }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
        if(response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Could not post review!') 
        }
    }
};

const deleteButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) { 
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`api/review/${id}`, {
            method: 'DELETE',
        });
        if(response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Could Not Delete Post!');
        }
    }
};

const form = document.querySelector('.new-review-form');
if (form) {
  form.addEventListener('submit', newFormHandler);
}

const reviewList = document.querySelector('.review-list');
if (reviewList) {
  reviewList.addEventListener('click', deleteButtonHandler);
}



