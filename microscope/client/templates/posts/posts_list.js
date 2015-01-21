var postsData = [
  {
    title: 'Batman',
    url: 'http://www.batman.com'
  },
  {
    title: 'This was built with Meteor',
    url: 'http://meteor.com'
  },
  {
    title: 'Learn Meteor Here',
    url: 'http://themeteorbook.com'
  },
  {
    title: 'Check Out My Github',
    url: 'http://www.github.com/clarkgh'
  },
  {
    title: 'Check Out My Blog',
    url: 'http://glubnerdglub.blogspot.com/'
  }
];
Template.postsList.helpers({
  posts: postsData
});