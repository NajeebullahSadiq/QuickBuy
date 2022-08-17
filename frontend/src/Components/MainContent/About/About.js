import React from 'react'
import './About.css';

export default function About() {
    return (
        <div>
             <div class="About">
<h3>About Us</h3>
<p>We strive to achieve the highest level of customers satisfaction possible by providing them the easiest to way to do online
     fashion shopping. Our E-commerce fashion shopping platform is organized and maintained by a well-qualified team of developers 
     and designers.  We provide the best possible way to our customers to contact us anytime.
    We provide our customers with the best buying experience. We facilitate them with famous and
     trust worthy brands and products, on time delivery, quick solution to their problems etc. 
</p>
<h3>Return and Exchange Policy</h3>
<p>We issue return and exchange policy within of 15 days of order delivery, they policy can be issued for the following cases:
   <ol>
       <li>	Wrong product delivered.</li>
       <li>Damaged product delivered.</li>
       <li>Wrong size or the customer is not happy with the size.</li>
        <li>Customer not satisfied with the quality of the product.</li>
    </ol>
    </p>
    <h3 >Refund Policy</h3>
    <p> We issue refund for the returned products within 3-5 working days.
        The amount will be deposited to the given bank account.</p>
{/* <!-- Contact --> */}
<h3>Contact Details </h3>
<p><ul class="Contact">
    <li><a href="mailto: quickbuy.fashion@gmail.com" target="_blank"><i class="far fa-envelope fa-lg"></i>  quickbuy.fashion@gmail.com</a></li>
        <li><a href="https://www.instagram.com/Quick_.Buy/" target="_blank"><i class="fab fa-instagram fa-lg"></i>  @Quick_.Buy</a></li>
        <li><a href="https://twitter.com/QuickBuy11" target="_blank"><i class="fab fa-twitter fa-lg"></i>  @QuickBuy11</a></li>
        <li><a href="https://www.facebook.com/QuickBuy-1167360453302956" target="_blank"><i class="fab fa-facebook fa-lg"></i>      @QuickBuy</a></li>
</ul></p>
{/* <!-- Cards --> */}
<h3>Our Team</h3>
<div class="Team">
<div  class="d-md-flex align-items-start">
<div class="card" style={{width: "18rem"}}>
    <img src="photos/najib.png" class="rounded-circle" alt="Cinque Terre"></img>
    <div class="card-body">
        <h3>NAJEEBULLAH</h3>
        <p class="card-text">Developer</p>
    </div>
</div>
<div class="card" style={{width: "18rem"}}>
    <img src="photos/waheed.jpg" class="rounded-circle" alt="Cinque Terre"></img>
    <div class="card-body">
        <h3>Waheed Ahmad</h3>
            <p class="card-text">Developer</p>
    </div>
</div>
</div>
<div  class="d-md-flex align-items-start">
<div class="card" style={{width: "18rem"}}>
    <img src="photos/saeed.jpg" class="rounded-circle" alt="Cinque Terre"></img>
    <div class="card-body">
        <h3>Mohammad Saeed</h3>
            <p class="card-text">Database Developer</p>
    </div>
</div>
<div class="card" style={{width: "18rem"}}>
    <img src="photos/nasrat.png" class="rounded-circle" alt="Cinque Terre"></img>
    <div class="card-body">
        <h3>Nasratullah</h3>
            <p class="card-text">Team Member</p>
    </div>
</div>
</div>
<div class="d-md-flex align-items-start" style={{margin: "150px"}}>
<div class="card" style={{width: "18rem"}}>
<img src="photos/AhmadShah.jpg" class="rounded-circle" alt="Cinque Terre"></img>
<div class="card-body">
    <h3>Ahmad Shah</h3>
        <p class="card-text">Team Member</p>
</div>
</div>
</div>
</div>
</div>

        </div>
    )
}
