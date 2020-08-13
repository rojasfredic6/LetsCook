const RecipeDetails = () => {
    const view = `

    <section class="main__container">

        <section class="main-image">
        <img
            src="https://i.imgur.com/1IVaIZI.png"
            alt="This is the image of the recipe"
        />
    </section>
    <section class="main-introduction">
        <h1>Introduction</h1>
        <h2>Chicken Caesar Salad</h2>
        <div class="main_introduction__people">
            2
            <img
                src="https://i.imgur.com/gPvXjmi.png"
                class="main-introduction__peopleIcon"
                alt=""
            />
        </div>
        <div class="main_introduction__time">
            20 min.
            <img
                src="https://i.imgur.com/KvO2QIm.png"
                class="main-introduction__timerIcon"
                alt=""
            />
        </div>
        <p>
            A classic plate in everywhere. It’s delicious, easy and
            quick to made. No doubt that it has to be a fundamental in
            your repertoire. Unlock the next level adding chicken! Enjoy
            it.
        </p>
        <div class="main-introduction__loveIcon">
            <a href=""></a>
        </div>
        <div class="main-introduction__shareIcon">
            <a href=""></a>
        </div>
    </section>
    <section class="main-ingredients">
        <div class="main-ingredients__container1">
            <div class="main-ingredients__image"></div>
            <p class="main-ingredientes__name">Letucce</p>
            <p class="main-ingredients__quantity">150 g.</p>
        </div>
        <div class="main-ingredients__container2">
            <div class="main-ingredients__image"></div>
            <p class="main-ingredientes__name">Chicken breast</p>
            <p class="main-ingredients__quantity">One piece</p>
        </div>
        <div class="main-ingredients__container3">
            <div class="main-ingredients__image"></div>
            <p class="main-ingredientes__name">Parmesan</p>
            <p class="main-ingredients__quantity">One cup</p>
        </div>
        <div class="main-ingredients__container4">
            <div class="main-ingredients__image"></div>
            <p class="main-ingredientes__name">Garlic</p>
            <p class="main-ingredients__quantity">One piece</p>
        </div>
        <div class="main-ingredients__container5">
            <div class="main-ingredients__image"></div>
            <p class="main-ingredientes__name">Lemon juice</p>
            <p class="main-ingredients__quantity">10 ml.</p>
        </div>
        <div class="main-ingredients__container6">
            <div class="main-ingredients__image"></div>
            <p class="main-ingredientes__name">Water</p>
            <p class="main-ingredients__quantity">10 ml.</p>
        </div>
        <div class="main-ingredients__container7">
            <div class="main-ingredients__image"></div>
            <p class="main-ingredientes__name">Salt</p>
            <p class="main-ingredients__quantity">10g</p>
        </div>
    </section>
    <section class="main-steps">
        <h1>Steps</h1>
        <div class="main-steps__container">
            <p>
                In a bowl, pour a couple of tablespoons of olive oil, a
                minced clove of garlic and a pinch of salt. Stir and
                pour this dressing over the pieces of bread so that they
                are well impregnated.
            </p>
        </div>
        <div class="main-steps__container">
            <p>
                Cook the grilled chicken with a pinch of salt in a pan
                with a little olive oil. Once it is cooked cut it into
                pieces or strips, as you prefer. Wash the lettuce and
                cut in pieces. Place it in your salad bowl.
            </p>
        </div>
        <div class="main-steps__container">
            <p>
                Add half the chicken pieces, half the indicated amount
                of the grated Parmesan cheese and the pieces of bread.
                Pour half of the dressing you have prepared and mix
                gently.
            </p>
        </div>
        <div class="main-steps__container">
            <p>
                Finish adding the other half of the ingredients and the
                rest of the dissing to the salad. Serve at the tabe and
                enjoy your salad!
            </p>
        </div>
    </section>
    <section class="main-rate">
        <h1>Rater this recipe</h1>
        <div class="main-rate__icons">
            <a href="" class="main-rate__icon"></a>
            <a href="" class="main-rate__icon"></a>
            <a href="" class="main-rate__icon"></a>
            <a href="" class="main-rate__icon"></a>
            <a href="" class="main-rate__icon"></a>
        </div>
    </section>
    <section class="main-addTo">
        <button>ADD TO CART</button>
    </section>

    </section>
`
    const element = document.createElement("div")
    element.innerHTML = view

    return element
}

export default RecipeDetails
