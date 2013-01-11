//
// Something i made!!
//

var Person = function() {};

Person.prototype.myName = "Kevin";

Person.prototype.helloSomeone = function(toGreet,loudly) {
    loudly = loudly||false;

    if(loudly)
        return this.shoutHello() + " " + toGreet;
    else
        return this.sayHello() + " " + toGreet;
};

Person.prototype.sayHello = function() {
    return "Hello";
};

Person.prototype.shoutHello = function() {
    return "HELLO!!";
};

describe("Person Class", function() {

    var p = new Person();

    it('has scope for creation',function(){
        expect(p).toBeDefined();
    });

    it('has a name',function(){
        expect(p.myName).toBeDefined();
        expect(p.myName).toBe("Kevin");
    });


    it("calls the sayHello() function", function() {
        var fakePerson = new Person();
        spyOn(fakePerson, "sayHello");
        fakePerson.helloSomeone("world");
        expect(fakePerson.sayHello).toHaveBeenCalled();
    });

    it("calls the helloSomeone() function with valid reply", function() {
        var fakePerson = new Person();
        expect(fakePerson.helloSomeone("Carl")).toEqual("Hello Carl");
        spyOn(fakePerson, "sayHello");
        fakePerson.helloSomeone("world",true);
        expect(fakePerson.sayHello).toHaveBeenCalled();
    });


});