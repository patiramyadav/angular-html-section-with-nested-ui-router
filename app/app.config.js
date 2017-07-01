myapp.config(function($stateProvider,$locationProvider){
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
    $stateProvider
        .state('/', {
            url: "/",
            views: {
                "account": {
                    component: "account"
                },
                "blog": {
                    component: "blog"
                }
            }
        }).state("defaultStateForSection", {
            parent: '/',
            views: {
                'accountHome@/': {
                    template: "<h1>Account Home is working</h1>"
                },
                'blogHome@/':{
                    template: "<h1> Blog Home is working</h1>"
                }
            }
        })
        .state('accountDetails', {
            parent: 'defaultStateForSection',
            url:"accountDetails",
            views: {
                'accountHome@/':{
                    template:"<h1>Account Details working fine</h1>"
                }
            }
        })
        .state('blogDetails', {
            parent: 'defaultStateForSection',
            url:"blogDetails",
           views:  {
            'blogHome@/':{
                 template:"<h1>Blog Details working fine</h1>"
            }
           }
        })
    });