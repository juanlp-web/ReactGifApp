export const getGifts = async(category) =>{
    const api_key ='bBem1QwqYR0BrKewQd7NwDiGr6LfFktF';
    const url_get = 'https://api.giphy.com/v1/gifs/search';
    //category = 'goku';
    const url =`${url_get}?q=${category}&api_key=${api_key}&limit=10`;
    console.log(url);
    const resp = await fetch( url );
    const {data} = await resp.json();


    const gift = data.map(img =>
        {return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
        }
        )

   return(gift);
}