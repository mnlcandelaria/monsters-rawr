// const myPromise = new Promise((resolve, reject) => {
//     if (false) {
//         setTimeout(() => {
//             resolve('I have succeeded');
//         }, 1000);
//     } else {
//         reject('I have failed');
//     }
    
// });

// myPromise
//     .then(value => console.log(value))
//     .catch(rejectValue => console.log(rejectValue));


fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const firstUser = users[0];
        console.log(firstUser);
        return fetch(
            `https://jsonplaceholder.typicode.com/posts?userId=${firstUser.id}`
        );
    })
    .then(response => response.json())
    .then(posts => console.log(posts));


const myAsyncFunction = async () => {
    const userResponse = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await userResponse.json();

    const secondUser = users[1];
    console.log(secondUser);

    const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${secondUser.id}`);
    const posts = await postsResponse.json();
    console.log(posts);
};
