var app = new Vue({
    el: '#app',
    data: {
        seen: true
    },
    methods: {


// import data from json - reactive version
// import json from './data.json'
// export default{
//     data(){
//         return{
//             myJson: json
//         }
//     }
// }

// import data from json - static version
        import MY_JSON from './data.json'
        export default{
            //custom option named myJson
            myJson: MY_JSON
        }
        console.log(myJson)
    }


})