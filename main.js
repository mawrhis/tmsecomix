

// TODO
// implement state management - https://vuejs.org/v2/guide/state-management.html#Simple-State-Management-from-Scratch

// import json into variable?, read comic data from it
//  //button next -  go to next comic (next array value)
//  //button prev - go to prev comic (prev array value)
// button rand - go to random array value
// button fav - show page with my favorite comics
// reflect selected comic with anchor tag in adress comix.com#1

// when webpack is finished?
// import VueRouter from 'vue-router'
// import Vuex from 'vuex'

window.Event = new Vue(); // event bus


// component sidebar
Vue.component('sidebar', {
  props: {
    currentId: Number,
    posts: Array,

  },

  data() {
    return {
      sharedState: store.state,
      currentIdUpdated: "",
      end: false,
      start: false,
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

      // on button click, emit the click
      prevId: function() {
          Event.$emit('prev');
          this.start = false;
      },

      nextId: function() {
          Event.$emit('next');
          this.end = false;
      },
    },

    created() {

      // when created listen to end and start, if received set state accordingly
      Event.$on('end', () => this.end = true)
      Event.$on('start', () => this.start = true)

    }
})


// component post
Vue.component('post', {
    data() {
      return {
        sharedState: store.state
      }
    },
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

// store - state management
var store = {
  debug: true,
  state: {
    currentId: 3
  },

  setIdAction (newId) {
    if (this.debug) console.log ('setIdAction triggered with', newId )
    this.state.currentId = newId
  }
}

// vue app
var app = new Vue({
    el: '#app',
    data: {
      sharedState: store.state,
      startingId: 3,
      dataURL: 'http://jirkaprihoda.cz/tmsedata.json',
      heading: 'TMSE',
      currentId: store.state.currentId,
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


    },

    methods: {
      next() {
          let Id = this.currentId
          console.log('current id is', Id)
          if (Id === this.posts.length - 1) {
              Id += 1;
              console.log('now id is', Id);
              store.setIdAction(Id);
              Event.$emit('start');// add class deactivated to button
          } else {
            Id += 1;
            store.setIdAction(Id);
            console.log('else', Id);
          }
      },

      prev() {
        if (currentId === 2) {
          let Id = this.currentId
          console.log("no older comics", Id);
          Id -= 1;
          store.setIdAction(Id);
          Event.$emit('end');// add class deactivated to button
        } else {
          let Id = this.currentId
          console.log("there are comics", Id);
          Id -= 1;
          store.setIdAction(Id);
        }
      }

      // fetchData: function () {
      //   axios.get(this.dataUrl).then(response => console.log(response))
      // }
    },

  beforeCreate () {
    store.setIdAction(3)
    console.log('i fetched the id')
  },

  created () {
      Event.$on('next', () => this.next() );

      Event.$on('prev', () => this.prev() );
      // this.fetchData();

    }
})



//event bus
//axios - komunikace s api
// multiple file app
//import export etc...
