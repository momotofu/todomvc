(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  window.Todo = (function(_super) {

    __extends(Todo, _super);

    function Todo() {
      Todo.__super__.constructor.apply(this, arguments);
    }

    Todo.configure('Todo', 'title', 'completed');

    Todo.extend(Spine.Model.Local);

    Todo.active = function() {
      return this.select(function(todo) {
        return !todo.completed;
      });
    };

    Todo.completed = function() {
      return this.select(function(todo) {
        return !!todo.completed;
      });
    };

    Todo.destroyCompleted = function() {
      var todo, _i, _len, _ref, _results;
      _ref = this.completed();
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        todo = _ref[_i];
        _results.push(todo.destroy());
      }
      return _results;
    };

    return Todo;

  })(Spine.Model);

}).call(this);
