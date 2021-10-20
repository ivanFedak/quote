const quote = ()=>{
    

    const quotes = [
        {
            quote: 'Accept responsibility for your life. Know that it is you who will get you where you want to go, no one else.',
            author:'— Les Brown',
        },
        {
            quote: 'Nobody ever wrote down a plan to be broke, fat, lazy, or stupid. Those things are what happen when you don’t have a plan',
            author:' — Larry Winget',
        },
        {
            quote: 'The only thing that stands between you and your dream is the will to try and the belief that it is actually possible',
            author:'— Joel Brown',
        },
        {
            quote: 'If opportunities dont knock, build a door.',
            author:' — Unknown',
        },
        {
            quote: 'Build your own dreams, or someone else will hire you to build theirs',
            author:' — Farrah Gray',
        },
        {
            quote: 'Forget all the reasons it won’t work and believe the one reason that it will.',
            author:'— Unknown',
        },
        {
            quote: '"The only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle."',
            author:'— Steve Jobs',
        },
        {
            quote: 'Happiness is a choice',
            author:'— Unknown',
        }
    ]


    const text = document.querySelector('.quote__text'),
          author = document.querySelector('.quote__author'),
          btn = document.querySelector('.quote__btn');
    
    // function generate(data) {
    //     data.forEach(item=>{

    //         const {quote, author} = item;
    //         let random = Math.floor(Math.random() * quotes.length)
            
    //         text.textContent = quote

    //     })
    // }


    function generate(data) {

        let random = Math.floor(Math.random() * data.length);
        
        text.textContent = data[random].quote;
        author.textContent = data[random].author;

    }
    
    btn.addEventListener('click',function(e){
        generate(quotes);
    })
    

    
   



}
export default quote;