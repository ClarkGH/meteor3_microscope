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
    title: 'Check out my Github',
    url: 'http://www.github.com/clarkgh'
  }
];
Template.postsList.helpers({
  posts: postsData
});