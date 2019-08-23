console.log("hello");
let appModule = angular.module("helloApp", []);
let component = appModule.component("helloWorld", {
    template: require("./template.html"),
    controller: myController,
    controllerAs: "self",
    bindings: {
        paragraph1: "<",
        paragraph2: "<"
    }
});
function myController () {
    this.paragraph1 = "Hello";
    this.paragraph2 = "students";
    console.log("helloWorld component started");
}