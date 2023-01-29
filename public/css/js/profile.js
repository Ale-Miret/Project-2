const newFormHandler = async (event) => {
    event.preventDefault();

    const name = document.getElementById("#movie-name").value.trim();
    const userComment = document.getElementById("#review-title").value.trim();
    const rating = document.getElementById("#review-desc").value.trim();
    
    if(name && userComment && rating) {
        const response = await fetch('/api/reviews', {
            method: 'POST',
            body: JSON.stringify({ name: name, userComment: userComment, rating: rating }),
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
    .querySelector('new-review-form')
    .addEventListener('submit', newFormHandler);

document
    .querySelector('review-list')
    .addEventListener('click', deleteButtonHandler);
