var existingComments = [
  {
    "sectionId": "1",
    "comments": [
      {
        "id": 88,
        "authorAvatarUrl": "support/images/jon_snow.png",
        "authorName": "Jon Sno",
        "authorId": 1,
        "authorUrl": "http://en.wikipedia.org/wiki/Kit_Harington",
        "comment": "I'm Ned Stark's bastard",
        "replies": [
          {
            "id" : 100,
            "authorAvatarUrl": "support/images/jon_snow.png",
            "authorName": "Jon Sno",
            "authorId": 1,
            "authorUrl": "http://en.wikipedia.org/wiki/Kit_Harington",
            "comment": "P.S.: I know nothing.",
            "parentId": 88
          }
        ]
      },
      {
        "id": 112,
        "authorAvatarUrl": "support/images/donald_draper.png",
        "authorName": "Donald Draper",
        "authorId": 2,
        "comment": "I need a scotch.",
        "replies": []
      }
    ]
  },
  {
    "sectionId": "3",
    "comments": [
      {
        "id": 66,
        "authorAvatarUrl": "support/images/clay_davis.png",
        "authorName": "Senator Clay Davis",
        "authorId": 3,
        "comment": "These Side Comments are incredible. Sssshhhiiiiieeeee.",
        "replies": []
      }
    ]
  }
];
var currentUser = {
  "id": 4,
  "avatarUrl": "support/images/user.png",
  "authorUrl": "http://google.com/",
  "name": "You"
};