if (Posts.find().count() === 0) {
  Posts.insert({
      title: 'Click Here for Batman',
      url: 'http://www.batman.com'
  });

  Posts.insert({
      title: 'This was built with Meteor',
      url: 'http://meteor.com'
  });

  Posts.insert({
      title: 'Learn Meteor Here',
      url: 'http://themeteorbook.com'
  });

  Posts.insert({
      title: 'Check Out My Github',
      url: 'http://www.github.com/clarkgh'
  });

  Posts.insert({
      title: 'Check Out My Blog',
      url: 'http://glubnerdglub.blogspot.com/'
  });
}