<!DOCTYPE html>
<html>

<head></head>

<body>
  <!-- 1 Markup instantiation-->
  <pluralsight-comment></pluralsight-comment>

  <script>
    //1. Create prototype for new pluralsight-comment custom element
    var PluralsightCommentProto = Object.create(HTMLElement.prototype);

    //2. Add a created callback to the prototype that sets the innerHTML.
    PluralsightCommentProto.createdCallback = function() {
      this.innerHTML = "<h2>Pluralsight Comment</h2><textarea id='txtComment'></textarea><br/><input type='submit' onClick='ClickedMe()'>";
    };

    //3. Register the custom element. This says "Hey browser, 
    //here's a new custom element, and use this prototype when it's instantiated."
    var PluralsightComment = document.registerElement('pluralsight-comment', {
      prototype: PluralsightCommentProto
    });

    function ClickedMe() {
      alert("You clicked Me");
      var txt = document.getElementById('txtComment').value;
      alert(txt);
    }

    <!-- 2 New operator -->
    var comment = new PluralsightComment();
    document.body.appendChild(comment);

    <!-- 3 CreateElement -->
    var comment = document.createElement('pluralsight-comment');
    document.body.appendChild(comment);

    <!-- 4 innerHTML -->
    //document.body.innerHTML = '<pluralsight-comment />';
  </script>
</body>

</html>
