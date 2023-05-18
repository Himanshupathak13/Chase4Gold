import React from "react"
import { Link } from 'react-router-dom';



const Facts=()=>{
    return(
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=" crossorigin="anonymous" />
            <div className="mt-5 pt-5">
         <h2 className="btn btn-warning m-2 pt-2">Some facts</h2>
         </div>
         
<section className="m-3 pt-2">
<p>1. Golf Balls Have, On Average, 336 Dimples
The dimples on a golf ball are designed to make it more aerodynamic, allowing it to travel further in the air. There are no official rules about how many dimples a golf ball can have and most feature between 300 and 500.</p>

<p>2. Olympic Gold Medals are Predominantly Made from Sterling Silver
Despite their name and colour, the gold medals presented to winners at the Olympic Games haven’t been made from solid gold since 1912. The modern gold medals are made from sterling silver and feature just small quantities of the precious metal (the Rio 2016 versions were 1.34 percent gold).</p>

<p>3. Michael Phelps Has Won More Olympic Golds Than Mexico
The American swimmer added five gold medals and a silver to his collection in Rio 2016 to take his Olympic medal haul to a record-breaking total of 28. According to Time Magazine, he’s won more Olympic golds during his career than many countries, including Portugal and Mexico, have won since 1896.</p>

<p>4. The Colours of the Olympic Rings are Significant
Many people know that each of the world-famous Olympic rings represents one of the five continents of the world. However, the rings were designed by Baron Pierre de Coubertein in 1912, and he stated that, together with the white background, their colours also represented the flags of every nation competing at that year’s event.</p>

<p>5.Chess was originally named “Chaturanga” or “Chaturaangam” meaning intelligent or Smart. This game was invented in India.</p>

<p>6.Major Dhyan Chand has a statue with 4 hands and 4 sticks in Austria – Known as the Wizard of Hockey, the legend was honoured by Austrian citizens in Vienna. They made a statue of him with 4 hands and 4 sticks to depict his magnificent skill and control with the ball.</p>

<p>7.The 1st time India joined the Olympics Games was in 1900, strangely it took 38 years before they brought home the first Olympic medal.</p>

<p>8.India won its 1stGold Medal in Olympic in the year 1928 in hockey. We defeated Netherlands by a roaring 3-0 in the finals.</p>

<p>9.Vijender Singh is called the Indian David Beckham – He earned this title thanks to his looks. Apart from being a successful boxer, his good looks prompted the foreign media to give him this title.</p>

<p>10.Milkha Singh broke the 400m Olympic record but lost the bronze by just 0.1 seconds – Who doesn’t know about this Flying Sikh’s contribution to Indian sports? And when we talk about some of India’s most memorable sporting moments, we cannot skip Singh’s performance in the 1960 Olympics where he broke the 400m Olympic record but still lost the bronze by just 0.1 seconds. He also won Gold medals in the 1958 and 1962 Asian Games.</p>
</section>
          <div>
         <Link to={"/"}><div className="btn btn-outline-dark m-2">Back to Home</div></Link>
        </div>
        </div>
        
    )
}

export default Facts;