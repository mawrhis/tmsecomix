

// TODO
// have everything in one file - included data, later separate it to more files
// import json into variable?, read comic data from it
// button next -  go to next comic (next array value)
// button prev - go to prev comic (prev array value)
// button rand - go to random array value
// button fav - show page with my favorite comics

var trial = "jsem tu"
console.log(trial)

Vue.component('comicpage', {
    props: {

    },
    template:`
        <div class="comicpage">
        <h1>{{ heading }}</h1>
        <main class="main">
        <div class="comicstrip">
          <div class="comicstrip__title">{{ title }}</div>
          <div class="comicstrip__image"><img src="images/image-grey.png"></div>
          <div class="comicstrip__favorite"></div>
        </div>
        <div class="sidebar">
          <div class="sidebar__navigation navigation">
            <button class="navigation__next">next</button>
            <button class="navigation__previous">prev</button>
            <button class="navigation__random">rand</button>
            <button class="navigation__favourite">fav</button>
          </div>
        </div>
        </main>
        </div>
        `,

    data() {
        return {
            heading: 'TMSE',
            currentId:'',
            data: [{
                    'id': '1',
                    'title':'title-1',
                    'src': 'images/image-grey.png',
                    'tag':["square","circle"]
                },
                {
                    'id': '2',
                    'title':'title-2',
                    'src': 'images/image-beige.png',
                    'tag':["square","triangle"]
                },
                {
                    'id': '3',
                    'title':'title-3',
                    'src': 'images/image-green.png',
                    'tag':["circle","hexagon", "square"]
                }
            ]
        }
    },

    methods: {
        nextComic: function() {
            this.currentId += 1
            // console.log(currentId)
        }
    }
})

var app = new Vue({
    el: '#app'
})
