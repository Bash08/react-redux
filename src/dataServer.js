export const fetchData = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            const data = fetch('https://jsonplaceholder.typicode.com/todos/1')
                .then(response => response.json())
                .then(data => data)
                .catch(err => console.log(err))
                resolve(data)
        }, 1000)
    })
}

