angular.module('socialLogin')

.service('userSrvc', function($http){

  this.me = null;     // id of my user info
  this.allUsers= {};  // object of all users w _id as keys

  this.saveMe = function(user){
    this.me = user;
    console.log('saved me: ', this.me)
  }

  this.getUsers = () => {
    $http.get('/users/').then((resp) => {
      resp.data.forEach(user => {
        if (user._id != this.me._id) {
          this.allUsers[user._id] = user;
        }
      })
    }).catch(function(resp){
      console.log('failed to get users')
    })
  }

})