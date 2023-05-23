
const api_key = 'b8cdOh6NtzUd44Zn7UTJT630qubZ6Gr6';

const httpCall = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=&rating=g`);

httpCall
.then(res => res.json())
.then(({data}) => {
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src=url;
    document.body.append(img);
})
.catch(console.log);

