var homeContent = `
<div class="h1Wrapper">
<h1>CLASneaks</h1>
</div>

<div class="image-wrapper">
    <img src="images/home-01.jpg" alt="">
    <div class="btn">
        <button href="#products">Shop Now</button>
    </div>
</div>
`;
var aboutContent = `
<div class="h1Wrapper">
   <h1>About</h1>
    </div>

        <div class="aboutClient">
            <div class="clientImage"><img src="images/about.jpg" alt=""></div>
            <div class="aboutText">
                <p> When you think of your favorite brands, I hope you think of us! I personally believe we have the best selection and price compared to our competitors. There is only one choice when it comes to sneaks and you're looking at it!
                </p>
                <div class="author"><p> - Sneaker Enthusiast / Intern at CLASneaks! </p> </div>
            </div>
        </div>
        
        <div class="aboutClient">
        <div class="clientImage"><img src="images/about-02.jpg" alt=""></div>
        <div class="aboutText">
            <p> If you're anything like me, I know you want to make sure your sneaks are legit! Our team ensures that every pair that comes through our facility are verified as 100% authentic. Thats our promise to you!
            </p>
            <div class="author"><p> - Sneaker Enthusiast / Head of Verification at  CLASneaks! </p> </div>
        </div>
    </div>
        
        `;
var productsContent = `<div class="h1Wrapper"><h1>Products</h1></div>
<div class="imageRow">
<img src="images/irene-kredenets-dwKiHoqqxk8-unsplash.jpg" alt="">
<img src="images/paul-gaudriault-a-QH9MAAVNI-unsplash.jpg" alt="">
<img src="images/ryan-plomp-jvoZ-Aux9aw-unsplash.jpg" alt="">
</div>
<div class="textRow">
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, ab sit. Aliquid quasi illo, sunt perferendis, quia debitis quos, expedita deserunt molestiae consequatur alias culpa doloremque porro laborum. In, facere.</p>
<p>Possimus ipsum magni incidunt nesciunt accusantium, ut distinctio neque. Iure veritatis laborum tempore dolorem esse nesciunt nam animi, temporibus architecto dolores obcaecati! Autem praesentium maxime velit, quia quam similique est!</p>
<p>Incidunt consectetur obcaecati quo. Nesciunt rem deserunt nemo cupiditate odio, quis quas a, autem ut maxime id placeat nihil in sequi optio quia reprehenderit iure perspiciatis officiis at, quibusdam hic.</p>
</div>`;
var contactContent = `

<section id="contact" class="contact">

    <form action="https://formspree.io/f/maykeanv" method="POST">
        <h3>Get in touch!</h3>
        <input type="text" id="name" placeholder="Your Name" required="">
        <input type="email" id="email" placeholder="Email id" required="">
        <input type="text" id="phone" placeholder="Phone #" required="">
        <textarea id="message" rows="4" placeholder="Hope to hear from you soon!"></textarea>
        <button type="submit">send</button>
    </form>
</section>`;

function initListeners(){
        $("nav a").click(function (e){
        
        // this stores the id from the anchor tag

            let aID = e.currentTarget.id;
            let contentID = aID + "Content";

            $("#app").html(eval(contentID));

        });
}




$(document).ready(function (){
    initListeners();
    $("#app").html(homeContent);
});