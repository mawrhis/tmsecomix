

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
    currentId: Number,
    posts: Array,
    end: false,
    start: false,

  },

  data() {
    return {
      currentIdUpdated: "",
    }
  },

  template:`
       <div class="sidebar">
        <div class="sidebar__navigation navigation">
          <button class="navigation__next" @click="nextId" :disabled=start>next</button>
          <button class="navigation__previous" @click="prevId" :disabled=end >prev</button>
          <button class="navigation__random" >rand</button>
          <button class="navigation__favourite">fav</button>
        </div>
      </div>
           `,
  methods: {
      prevId: function() {
        if (this.currentId < this.posts.length ){
            Event.$emit('prev');
        }
      },

      nextId: function() {
        if (this.currentId >= 1){
          Event.$emit('next');
        }
      },
    },

    created() {
      Event.$on('end', () => this.end = true)
      Event.$on('start', () => this.start = true)

    }
})

Vue.component('post', {
    props: {
      currentId: Number,
      title: String,
      src: String,
      tag: Array
    },
    template:`
        <div class="comicstrip">
          <div class="comicstrip__title">{{ title }}{{ currentId }}</div>
          <div class="comicstrip__image"><img :src="src"></div>
          <div class="comicstrip__favorite"></div>
        </div>
        `,

    methods: {

    }
})

var app = new Vue({
    el: '#app',
    data: {
      heading: 'TMSE',
      currentId: 1,
      end: false,
      start: false,
      testVar: false,
      posts: [{
        'id': 3,
        'title':'third post',
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
          'title':'first post',
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
      },

      next() {
        if (this.currentId === this.posts.length) {
          console.log("no newer comics");
          Event.$emit('start');// add class deactivated to button
        } else {
          this.currentId += 1;
        }
      }
    },

    methods: {
      // statecheck: function() {
      //   if (this.currentId === 1) {
      //     console.log("no older comics")
      //     Event.$emit('end');// add class deactivated to button
      //   } else if (this.currentId === this.posts.length){
      //     console.log("no newer comics")
      //     Event.$emit('start');// add class deactivated to button
      //   }
      // }
    },

    created () {
      Event.$on('next', next());

      Event.$on('prev', () =>
        this.currentId -= 1);

    }
})



//event bus
//axios - komunikace s api
// multiple file app
//import export etc...
