

// TODO
// have everything in one file - included data, later separate it to more files
// import json into variable?, read comic data from it
// button next -  go to next comic (next array value)
// button prev - go to prev comic (prev array value)
// button rand - go to random array value
// button fav - show page with my favorite comics
// reflect selected comic with anchor tag in adress comix.com#1

window.Event = new Vue(); // event bus

Vue.component('sidebar', {
  props: {
    id: Number,
    posts: Array

  },

  data() {
    return {
      currentIdUpdated: ""
    }
  },

  template:`
       <div class="sidebar">
        <div class="sidebar__navigation navigation">
          <button class="navigation__next" @click="increaseId" >next</button>
          <button class="navigation__previous" @click="decreaseId">prev</button>
          <button class="navigation__random" >rand</button>
          <button class="navigation__favourite">fav</button>
        </div>
      </div>
           `,
  methods: {
      increaseId: function() {
        if (this.id < this.posts.length){
            Event.$emit('prev')
        }else {
          console.log("no newer comics")
          Event.$emit('start');// add class deactivated to button
        }
      },

      decreaseId: function() {
        if (this.id > 1){
          Event.$emit('next')
        } else if (this.currentId = 1 ){
          console.log("no older comics")
          Event.$emit('end');// add class deactivated to button
        }
      },
    },

    created() {
      Event.$on('end', () => console.log("write disabled class"))
      Event.$on('start', () => console.log("write disabled class"))
    }
})

Vue.component('post', {
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

    },

    created () {
      Event
    }
})

var app = new Vue({
    el: '#app',
    data: {
      heading: 'TMSE',
      currentId: 1,
      testVar: false,
      posts: [{
        'id': 3,
        'title':'first post',
        'src': 'images/image-grey.png',
        'tag':["square","circle"]
        },
        {
          'id': 2,
          'title':'second post',
          'src': 'images/image-beige.jpg',
          'tag':["square","triangle"]
        },
        {
          'id': 1,
          'title':'third post',
          'src': 'images/image-green.jpg',
          'tag':["circle","hexagon", "square"]
        }
      ]
    },
    computed: {
      first () { return this.posts.slice(0, 1) },

      currentpost () {
        return this.posts.find(post => {
          return post.id === this.currentId
        })
      }
    },
    methods: {



    },

    created () {
      Event.$on('next', () =>
        this.currentId -= 1);

      Event.$on('prev', () =>
        this.currentId += 1)
    }
})



//event bus
//axios - komunikace s api
// multiple file app
//import export etc...
