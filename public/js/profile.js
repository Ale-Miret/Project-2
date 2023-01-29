const newFormHandler = async (event) => {
    event.preventDefault();

    const movie_name = document.getElementById("#movie-name-box").value.trim();
    const rating = document.getElementById("#review-title-box").value.trim();
    const review_comment = document.getElementById("#review-desc-box").value.trim();
    
    if(movie_name && rating && review_comment) {
        const response = await fetch('/api/reviews', {
            method: 'POST',
            body: JSON.stringify({ movie_name: movie_name, rating: rating, review_comment: review_comment }),
            headers: {
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
        const id = event.target.hasAttribute('data-id');

        const response = await fetch(`api/reviews/${id}`, {
            method: 'DELETE',
        });
        if(response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Could Not Delete Post!');
        }
    }
};

document
    .querySelector('.new-review-form')
    .addEventListener('submit', newFormHandler);

document
    .querySelector('.review-list')
    .addEventListener('click', deleteButtonHandler);