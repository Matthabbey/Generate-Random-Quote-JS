function generate(){
    let quotes = {
        "- Deepak Chopra" : '"Sex is always about emotions. God sex is about free emotions; bad sex is about blocked emotions."',
        "- C.S Lewis" : '"I was born to be free---- I was born to adore and obey."', 
        "- Jenny Valentine": "Even when you had lost everything you thought there was to lose, somebody came along and gave you something for free."
    }

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)]

    var quote = quotes[author]

    document.getElementById("quote").textContent = quote
    document.getElementById("author").textContent = author
}