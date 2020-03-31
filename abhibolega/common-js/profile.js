var quotes = ['<img src="https://www.cmi.ac.in/~ashwani/images/profiles/1.jpg" alt="Profile photo" style="text-align:center;">', '<img src="https://www.cmi.ac.in/~ashwani/images/profiles/2.jpg" alt="Profile photo" style="text-align:center;">', '<img src="https://www.cmi.ac.in/~ashwani/images/profiles/3.jpg" alt="Profile photo" style="text-align:center;">', '<img src="https://www.cmi.ac.in/~ashwani/images/profiles/4.jpg" alt="Profile photo" style="text-align:center;">', '<img src="https://www.cmi.ac.in/~ashwani/images/profiles/5.jpg" alt="Profile photo" style="text-align:center;">', '<img src="https://www.cmi.ac.in/~ashwani/images/profiles/6.jpg" alt="Profile photo" style="text-align:center;">']

function randomQuotes() {
    var idx = Math.floor(Math.random() * quotes.length)
    document.getElementById('changer').innerHTML = quotes[idx]
    }

