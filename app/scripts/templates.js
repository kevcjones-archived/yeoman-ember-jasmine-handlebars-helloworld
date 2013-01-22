Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"container\">\n   <h1>H1 Title</h1>\n   <h2>H2 Title</h2>\n   <h3>H3 Title</h3>\n   <p>The fox jumped over the sleep dog and then turned around and kicked him before making a run for it.</p>\n</div>\n\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],data:data});
  data.buffer.push(escapeExpression(stack1) + "\n");
  return buffer;
});