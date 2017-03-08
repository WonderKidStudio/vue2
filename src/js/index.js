var items = [
/*
  {"id":21,"created_at":"2017-02-26 11:51:42","updated_at":"2017-03-07 21:38:19","name":"McLaren 650S!","description":"The 650S may look like a face-lifted 12C, but there\u2019s a lot more to it: The revised styling pays tribute to the P1 hybrid, the body tub is lighter, and about 25 percent of the parts are new.","price":350000},
  {"id":22,"created_at":"2017-02-26 11:53:20","updated_at":"2017-02-26 11:53:20","name":"Ferrari 488GTB","description":"With its twin-turbo 3.9-liter V-8 located behind you, you\u2019ll enjoy its sonorous wail, and ferocious acceleration, all the way to 8000 rpm, where it makes 661 hp.","price":250000},
  {"id":23,"created_at":"2017-02-26 11:54:09","updated_at":"2017-02-26 11:54:09","name":"Chevrolet Camaro ZL1","description":"Track-tuned and ready to rumble, the Camaro ZL1 has muscle-car dominance squarely in its sights. Under the hood of both the coupe and convertible lies a 650-hp 6.2-liter supercharged V-8 donated by the Corvette Z06.","price":62000},
*/
  ];
var pagination = {
/*  
  current_page: 1,
  last_page: 5,
  next_page_url: "http://technicaltest.vme.co/api/products?page=2",
  prev_page_url: null,
*/  
};

//var apiServer = "http://technicaltest.vme.co/api";
//var apiServer = "http://crud/api/index.php?/api"; 
var apiServer = "http://demos.wonderkidstudio.com/sites/crud/api/index.php?/api"; 

var itemsJson = '{"total":42,"per_page":10,"current_page":1,"last_page":5,"next_page_url":"http:\/\/technicaltest.vme.co\/api\/items?page=2","prev_page_url":null,"from":1,"to":10,"data":[{"id":21,"created_at":"2017-02-26 11:51:42","updated_at":"2017-03-07 21:38:19","name":"McLaren 650S!","description":"The 650S may look like a face-lifted 12C, but there\u2019s a lot more to it: The revised styling pays tribute to the P1 hybrid, the body tub is lighter, and about 25 percent of the parts are new.","price":350000},{"id":22,"created_at":"2017-02-26 11:53:20","updated_at":"2017-02-26 11:53:20","name":"Ferrari 488GTB","description":"With its twin-turbo 3.9-liter V-8 located behind you, you\u2019ll enjoy its sonorous wail, and ferocious acceleration, all the way to 8000 rpm, where it makes 661 hp.","price":250000},{"id":23,"created_at":"2017-02-26 11:54:09","updated_at":"2017-02-26 11:54:09","name":"Chevrolet Camaro ZL1","description":"Track-tuned and ready to rumble, the Camaro ZL1 has muscle-car dominance squarely in its sights. Under the hood of both the coupe and convertible lies a 650-hp 6.2-liter supercharged V-8 donated by the Corvette Z06.","price":62000},{"id":24,"created_at":"2017-02-26 11:56:16","updated_at":"2017-02-27 11:50:58","name":"Nissan GT-R - edited 2","description":"Doesn\u2019t matter what you call it\u2014GT-R or, more fittingly, Godzilla\u2014Nissan\u2019s range topper is a supercar-stomping, high-tech dynamo. Its 3.8-liter twin-turbo V-6 makes a mighty 565 hp while a six-speed dual-clutch automatic and all-wheel drive team up to put all that power to the pavement","price":110500},{"id":25,"created_at":"2017-02-26 11:56:57","updated_at":"2017-02-26 11:56:57","name":"Aston Martin Vantage","description":"The best way to live out your super-spy fantasy is behind the wheel of an Aston Martin, and the Vantage is the least expensive way to do it.","price":106000},{"id":26,"created_at":"2017-02-26 11:57:37","updated_at":"2017-02-26 11:57:37","name":"Merceder AMG GTS","description":"Gullwings are no longer part of the design, but the GT is still set to swoop in and snag buyers away from its archnemesis, the Porsche 911. Its three variants all have a 4.0-liter twin-turbo V-8. In the base model\u2014if anything at this level can be called base\u2014the engine makes 456 hp.","price":112000},{"id":27,"created_at":"2017-02-26 11:58:25","updated_at":"2017-02-26 11:58:25","name":"Alfa Romeo 4C","description":"This is a sexy, mid-engined Italian exotic carved down to affordable scale, and its available as a coupe or with a targa top. Powered by a 237-hp turbo four and weighing less than 2500 pounds, its zippy power-to-weight ratio matches its zippy steering ratio; sadly, only a six-speed automatic is available.","price":57000},{"id":28,"created_at":"2017-02-26 12:14:10","updated_at":"2017-02-26 12:14:10","name":"Jaguar F-type","description":"From its seductively long hood to its steeply raked windshield and wide rear haunches, the F-type is a stunner. Offered as both a coupe and a convertible, it gets a snarling 3.0-liter supercharged V-6 pumping out 340 hp to the rear wheels through a six-speed manual or eight-speed automatic","price":62000},{"id":30,"created_at":"2017-02-26 12:18:40","updated_at":"2017-02-26 12:18:40","name":"Chevrolet Corvette Z06","description":"Think of the Corvette Z06 as the most amazing version of a sports car that is already amazing by anyone\u2019s measure. Sold as either a coupe or convertible, the most important feature is its supercharged 6.2-liter V-8 that makes 650 hp and 650 lb-ft.","price":80000},{"id":31,"created_at":"2017-02-26 12:19:57","updated_at":"2017-02-26 12:19:57","name":"Mercedes AMG GT C Roadster","description":"Convertibles are cars built to be seen in, and this one is no exception\u2014but in these roadsters, performance is the real point. A 4.0-liter twin-turbo V-8 pairs with a seven-speed automatic, making 469 horsepower in the GT model.","price":90000}]}';

/**
  * Finds an item in the items array
  * @param itemID int - id of the item to find
  * @return item Object - an item with id=itemId 
**/
function findItem (itemId) {
  return items[findItemKey(itemId)];
};
/**
  * Finds an item's key in the items array
  * @param itemID int - id of the item to find
  * @return key int - a  key of the item with id=itemId 
**/
function findItemKey (itemId) {
  for (var key = 0; key < items.length; key++) {
    if (items[key].id == itemId) {
      return key;
    }
  }
};

//List all the items template
var List = Vue.extend({
  template: '#item-list',
  data: function () {
    return {items: items, pagination: pagination, limit: 0};
  },
  created: function () {
    this.getItemsFromAPI ();
  },
  watch: {
    $route : function () {
      console.log('---List-watch');
      //If we changed a page
      if (this.$route && this.$route.params && this.$route.params.page){
          this.getItemsFromAPI (this.$route.params.page);
      }
    }
  },
  methods : {
    /**
      * get the items from the API server
      * 
      * @param page int - page number [can be empty]
      * @param limit int - items per page [can be empty]
    */
    getItemsFromAPI : function (page){
      if (!page) { 
        //If we are already on the N page, and just refreshed a browser
        if (this.$route && this.$route.params && this.$route.params.page){
          page = this.$route.params.page;

        }
        else {
          page = 1;
        }
      }

      var url = apiServer + '/products?page='+page;
      if (this.limit) {
        url += '&limit='+this.limit;
      }

      var self = this;
      axios.get(url)
        .then(function (response) {
          console.log(response);
          self.updateItems (response.data);  
        })
        .catch(function (error) {
          console.log(error);
          alert(error);
        });

      console.log('333: ' + this.items);

    },

    /**
      * updates items and pagination info using the JSON object got from the API server
      * 
      * @param itemsO Object , JSON Object got from the API server
    */
    updateItems : function (itemsO) {
      console.log(112 + itemsO);
      //console.log(1121 + this.items);
      if (!itemsO || ! itemsO.data){ this.items = {}; return; }
      console.log(113);

      this.items = _.clone(itemsO.data);
      console.log(this.items);
      items = this.items;

      this.pagination = {
        current_page : itemsO.current_page,
        last_page : itemsO.last_page,
        next_page_url : itemsO.next_page_url,
        prev_page_url : itemsO.prev_page_url,  
      }
    },

    /**
      * Change the amount of items per page
      * 
      * @param event Event
    */
    changeItemsPerPage: function (event) {
      if (event) {
        //console.log (event);
        this.limit = event.target.value;
        this.page = 1;
        //alert(this.limit);
        this.getItemsFromAPI ();
        //router.replace({ name: 'page', params: { page: 1 }});
        router.push('/');
      }
    }

  }
});

var Item = Vue.extend({
  template: '#item',
  data: function () {
    return {item: findItem(this.$route.params.item_id)};
  }
});

//Edit item template
var ItemEdit = Vue.extend({
  template: '#item-edit',
  data: function () {
    console.log('ItemEdit');
    console.log(this.$route);
    console.log(items);
    return {item: findItem(this.$route.params.item_id)};
  },
  methods: {
    updateItem: function () {
      var item = this.item;
      console.log ('updateItem');
      console.log(items);
      var oldItem = items[findItemKey(item.id)];

      var newItem = {
        name: item.name,
        description: item.description,
        price: item.price,
      };

      this.updateItemViaAPI (item.id, newItem);
      
      router.push('/');
    },

    /**
      * Updates an  on the API server
      * 
      * @param itemId int - item id
      * @param item Object - item data to be created
    */
    updateItemViaAPI : function (itemId, item){
      var self = this;
      var url = apiServer + '/products/'+itemId;

      console.log(item);

      axios.put(url, item)
        .then(function (response) {
          alert('Updated successfully');
          console.log(response);
        })
        .catch(function (error) {
          alert('Error while updating');
          console.log(error);
        });
    },
  }
});

//delete item template
var ItemDelete = Vue.extend({
  template: '#item-delete',
  data: function () {
    console.log('ItemDelete');
    return {item: findItem(this.$route.params.item_id)};
  },
  methods: {
    deleteItem: function () {
      this.deleteItemViaAPI (this.$route.params.item_id);
      router.push('/');
    },

    /**
      * deletes an item on  the API server
      * 
      * @param itemId int - an id of an item to delete
    */
    
    deleteItemViaAPI : function (itemId){
      var self = this;
      var url = apiServer + '/products/' + itemId;
      console.log ('Posting url=' + url);

      axios.delete(url)
        .then(function (response) {
          alert('Deleted successfully');
          console.log(response);
        })
        .catch(function (error) {
          alert('Error while deleting');
          console.log(error);
        });
    },
    
  }
});

//add item template
var AddItem = Vue.extend({
  template: '#add-item',
  data: function () {
    return {item: {name: '', description: '', price: ''}
    }
  },
  methods: {
    createItem: function() {
      var item = this.item;
      var newItem = {
        name: item.name,
        description: item.description,
        price: item.price,
      };
      this.createItemViaAPI (newItem);

      router.push('/');
    },

    /**
      * creates an item on the API server
      * 
      * @param item Object - item data to be created
    */
    createItemViaAPI : function (item){
      var self = this;
      var url = apiServer + '/products';
      //console.log ('Posting url=' + url);
      //console.log(item);
      axios.post(url, item)
        .then(function (response) {
          alert('Created successfully');
        })
        .catch(function (error) {
          alert('Error while creation');
          console.log(error);
        });
    },

  }
});

var router = new VueRouter({

  routes: [{path: '/', component: List},
    {path:   '/:page', component: List, name: 'page'},
    {path: '/item/:item_id', component: Item, name: 'item'},
    {path: '/add-item', component: AddItem, name: 'add-item'},
    {path: '/item/:item_id/edit', component: ItemEdit, name: 'edit-item'},
    {path:   '/item/:item_id/delete', component: ItemDelete, name: 'delete-item'}

  ]

});

new Vue({
  el: '#app',
  router: router,
  template: '<router-view></router-view>'
});
