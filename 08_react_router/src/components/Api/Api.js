async function Api() {
    const response = await fetch('https://api.github.com/users/amehtacc')
    return response.json()
}

export default Api