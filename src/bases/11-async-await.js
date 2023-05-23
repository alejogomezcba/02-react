
console.log("heroes");
const api_key = 'b8cdOh6NtzUd44Zn7UTJT630qubZ6Gr6';

const getImage = async () => {
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=&rating=g`);
        const { data } = await response.json();
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src=url;
        document.body.append(img);
    } catch (error) {
        console.log(error);
    }
};

getImage();
