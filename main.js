

// TODO
// have everything in one file - included data, later separate it to more files
// import json into variable?, read comic data from it
// button next -  go to next comic (next array value)
// button prev - go to prev comic (prev array value)
// button rand - go to random array value
// button fav - show page with my favorite comics

var trial = "jsem tu"
console.log(trial)

Vue.component('sidebar', {
  props: {
  },

  template:`
            <div class="sidebar">
              <div class="sidebar__navigation navigation">
                <button class="navigation__next" v-on:click="currentId++">next</button>
                <button class="navigation__previous" v-on:click="fetchPost(currentId)">prev</button>
                <button class="navigation__random" v-on:click="currentId = Math.ceil(Math.random()*10)">rand</button>
                <button class="navigation__favourite">fav</button>
              </div>
            </div>`
})

Vue.component('comicstrip', {
    props: {
      id: Number,
      title: String,
      src: String,
      tag: Array
    },
    template:`
        <div class="comicstrip">
          <div class="comicstrip__title">{{ title }}{{ id }}</div>
          <div class="comicstrip__image"><img :src="src"></div>
          <div class="comicstrip__favorite"></div>
        </div>
        `,

    data() {
        return {
            heading: 'TMSE'
        }
    },

    methods: {

    }
})

var app = new Vue({
    el: '#app',
    data: {
      heading: 'TMSE',
      currentId:'3',
      currentPost: {},
      posts: [{
        'id': '1',
        'title':'title-1',
        'src': 'images/image-grey.png',
        'tag':["square","circle"]
      },
        {
          'id': '2',
          'title':'title-2',
          'src': 'images/image-beige.jpg',
          'tag':["square","triangle"]
        },
        {
          'id': '3',
          'title':'title-3',
          'src': 'images/image-green.jpg',
          'tag':["circle","hexagon", "square"]
        }
      ]
    },
    methods: {
        fetchPost: function(currentId) {
        this.posts.find(post => {
          return this.currentPost === currentId
        })
      }
    },
    mounted: function () {
      fetchPost()
    }
})


