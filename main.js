

// TODO
// have everything in one file - included data, later separate it to more files
// import json into variable?, read comic data from it
// button next -  go to next comic (next array value)
// button prev - go to prev comic (prev array value)
// button rand - go to random array value
// button fav - show page with my favorite comics
// reflect selected comic with anchor tag in adress comix.com#1

var trial = "jsem tu"
console.log(trial)

Vue.component('sidebar', {
  props: {
    currentId: Number
  },

  data() {
    return {
      currentIdUpdated: ""
    }
  },

  template:`
       <div class="sidebar">
        <div class="sidebar__navigation navigation">
          <button class="navigation__next" @click="$emit('increase')" >next</button>
          <button class="navigation__previous" @click="$emit('decrease')" >prev</button>
          <button class="navigation__random" >rand</button>
          <button class="navigation__favourite">fav</button>
        </div>
      </div>
           `,
  methods: {


    // increaseId (event) {
    //   this.$emit('increaseId', 'currentIdUpdated')
    //   console.log(currentId)
    // },
    //
    // fetchPost: function(currentId) {
    //     this.posts.find(post => {
    //     return this.currentPost === currentId
    //     })
    //   }
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

      increaseId: function() {
        if (this.currentId < this.posts.length){
            this.currentId += 1}
        else {
          console.log("no newer comics")
          // add class deactivated to button
        }
      },

      decreaseId: function() {
        if (this.currentId > 1){
          this.currentId -= 1
        } else if (this.currentId = 1 ){
          console.log("no older comics")
          // add class deactivated to button
        }
      },

    },

    mounted () {
    }
})



//event bus
//axios - komunikace s api
