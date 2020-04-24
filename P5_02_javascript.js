
function quote_gen(){
    try{
        var e = document.getElementById("numbers");
        var t = document.getElementById("quotes");
        var count = e.options[e.selectedIndex].value;
        var type = t.options[t.selectedIndex].value;
        var area = document.getElementById("textarea");
        console.log(type);

        area.innerHTML = " ";
        console.log(count);
        for (i = 0; i < count; i++) {
            var text = "";
			switch(type) {
  				case "Life Quotes":
  					  // code block

  			   	text = happy_text();

    			break;

  				case "Inspiration Quotes":
    			// code block
    			text = inspire_text();

   				break;

   				case "Motivation Quotes":

   				text = motivation_text();

   				break

   				case "Disney Quotes":
    			text = disney_text();

   				break;
  				default:
    			// code block
			}
            //text = happy_text();
            console.log(text);
            content = { txt : text}
            area.innerHTML += `<p> ${ content.txt } </p>`;
    };
    }catch(err){
       
    }
    
}

function happy_text(){
   
    var start = [
        "The moments of happiness we enjoy take us by surprise", 
        "People should find happiness in the little things, like family.",
        "Happiness is not an ideal of reason, but of imagination.",
        "To be without some of the things you want is an indispensable part of happiness.",
        "The secret of happiness is freedom, the secret of freedom is courage.",
        "The only way to find true happiness is to risk being completely cut open.",
        "Nobody really cares if you’re miserable, so you might as well be happy..",
        "Happiness is the interval between periods of unhappiness."

       ]

    var middle = [ 
        "Happiness is distraction from the human tragedy.",
        "Ask yourself whether you are happy and you cease to be so.",
        "You can’t be happy unless you are unhappy sometimes.",
        "Happiness is not a state to arrive at, but a manner of traveling.",
        "There is only one happiness in this life, to love and be loved.",
        "Happiness is a by-product of an effort to make someone else happy.",
        "Happiness is a form of courage.",
        "All happiness depends on courage and work."

        ]

    var end = [
        "Happiness is a well-balanced combination of love, labour, and luck.",
        "Happiness is the natural flower of duty.",
        "Happiness is not being pained in body or troubled in mind.",
        "Happiness is a function of accepting what is.",
        "Happiness is not a goal; it is a by-product.",
        "Happiness is a state of activity.",
        "Happiness lies in the joy of achievement and the thrill of creative effort.",
        "Success is getting what you want, happiness is wanting what you get.",
        ]

    return start[Math.floor(Math.random() * 8)] + " "  + middle[Math.floor((Math.random() * 8)%7)] + " "  + end[Math.floor((Math.random() * 8)%6)];
}

function inspire_text(){
   
   
    var start = [
        "Believe you can and you are halfway there.",
        "Keep going. Everything you need will come to you at the perfect time.", 
        "You have to be at your strongest when you are feeling at your weakest.",
        "Never give up. Great things take time. Be patient.",
        "Courage is one step ahead of fear.",
        "If you feel like giving up, just look back on how far you are already.",
        "Look in the mirror. That is your competition.",
        "I used everything you gave me"
       ]

    var middle = [ 
        "Everything you have ever wanted is on the other side of fear.",
        "Pain is temporary. Quitting lasts forever.",
        "The pain you feel today will be the strength you feel tomorrow.",
        "Remember it is just a bad day, not a bad life.",
        "Believe you can and you are halfway there.",
        "You are so much more than what you are going through.",
        "Passion first and everything will fall into place.",
        "Never back down"
    	]

    var end = [
        "do it for me.",
        "Til your good is better and your better is best.",
        "Willing is not enough; we must do.",
        "and new thoughts.",
        "do not stop.",
        "what we may be.",
        "to see the light.",
        "nor giveup."
    	]
  	return start[Math.floor(Math.random() * 8)] + " "  + middle[Math.floor((Math.random() * 8)%7)] + " "  + end[Math.floor((Math.random() * 8)%6)];

}


function motivation_text(){
   
   
     var start = [
        "Only I can change my life",
        "Good, better, best",
        "Knowing is not enough",
        "With the new day",
        "It does not matter how slowly you go",
        "We know what we are",
        "It is during our darkest moments",
        "We must never"
       ]
        
    var middle = [ 
        "No one can",
        "Never let it rest",
        "we must apply",
        "comes new strength",
        "as long as you",
        "but know not",
        "that we must focus",
        "never back down"
        ]
        
    var end = [
        "do it for me.",
        "Til your good is better and your better is best.",
        "Willing is not enough; we must do.",
        "and new thoughts.",
        "do not stop.",
        "what we may be.",
        "to see the light.",
        "nor giveup."
        ]
    return start[Math.floor(Math.random() * 8)] + " "  + middle[Math.floor((Math.random() * 8)%7)] + " "  + end[Math.floor((Math.random() * 8)%6)];

}

function disney_text(){
   
   
   	var start = [
    	"A true hero isn’t measured", 
    	"by the size of his strength", 
    	"but by the strength of his heart."       
    	]
            
    var middle = [ 
    	"No matter how your heart is grieving",
    	"if you keep on believing", 
    	"the dream that you wish will come true."        
    	]
            
    var end = [
    	"When you’re the best of friends",
    	"having so much fun together",
    	"you’re not even aware you’re such a funny pair"
    	]
    

   return start[Math.floor(Math.random() * 3)] + " " + middle[Math.floor((Math.random() * 3)%2)] + " "  + end[Math.floor((Math.random() * 2)%1)];
}


function quit(){
    var area = document.getElementById("textarea");
    area.innerHTML = " "
}


document.addEventListener("DOMContentLoaded", function(){
    try{
        document.getElementById("dropdown").value = "1";
    }catch(err){
        var area = document.getElementById("textarea");
        area.innerHTML = "Select quote type and numbers"
    }
});
