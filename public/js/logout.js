
if (document.querySelector('.logout-btn')) {
    const logoutBtn = document.querySelector('.logout-btn');
    logoutBtn.addEventListener('click', async () => {
        const response = await fetch('/api/user/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }

        })
        if (response.ok) {
            alert('Logged out successfully!');
            document.location.replace('/homepage');
        } else {
            alert("There was an error logging out. Please try again.")
        }
    })
}