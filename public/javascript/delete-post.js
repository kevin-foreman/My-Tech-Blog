async function deleteFormHandler(event) {
    event.preventDefault();
    // Get the id of the post and use a fetch (await fetch) to make the DELETE request
    const id = window.location.toString().split('/')[

        window.location.toString().split('/').length - 1
    ];
    // Make the delete request to /api/posts
    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({
            post_id: id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }

}

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);