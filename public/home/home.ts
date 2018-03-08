var homeComponent = {
    templateUrl: './home/home.html',
    bindings: {},
    controller: homeComponentController
};

function homeComponentController(){
    var vm = this;
    vm.title = 'Awesomesausage, LLC, Internal Ordering System!';
}

export default homeComponent;
