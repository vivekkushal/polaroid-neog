import { v4 as uuid } from 'uuid';
import { formatDate } from '../utils/authUtils';
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

// export const users = [
//   {
//     _id: uuid(),
//     firstName: "Adarsh",
//     lastName: "Balika",
//     username: "adarshbalika",
//     password: "adarshBalika123",
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
//   },
// ];

export const users = [
  {
    _id: uuid(),
    fullName: 'Vivek Kushal',
    username: 'vivekkushal',
    password: '123vivek',
    bio: 'Hey there, Vivek here',
    website: 'https://github.com/vivekkushal',
    profileAvatar: 'https://picsum.photos/id/1012/150',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        fullName: 'Tushar Choudhary',
        username: 'tusharchoudhary',
        profileAvatar: 'https://picsum.photos/id/1009/150',
      },
    ],
    followers: [
      {
        _id: uuid(),
        fullName: 'Shashank Singh',
        username: 'shashanksingh',
        profileAvatar: 'https://picsum.photos/id/1009/150',
      },
      {
        _id: uuid(),
        fullName: 'Prajjwal Singh',
        username: 'prajjwalsingh',
        profileAvatar: 'https://picsum.photos/id/100/150',
      },
      {
        _id: uuid(),
        fullName: 'Vineet Singh',
        username: 'vineetsingh',
        profileAvatar: 'https://picsum.photos/id/1005/150',
      },
    ],
  },
  {
    _id: uuid(),
    fullName: 'Shashank Singh',
    username: 'shashanksinsh',
    password: '123shashank',
    bio: 'Hey there, Shashank here',
    website: 'https://www.shashank.com',
    profileAvatar: 'https://picsum.photos/id/1009/150',
    createdAt: '2022-05-05',
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        fullName: 'Vivek Kushal',
        username: 'vivekkushal',
        profileAvatar: 'https://picsum.photos/id/1012/150',
      },
      {
        _id: uuid(),
        fullName: 'Shashank Singh',
        username: 'shashanksingh',
        profileAvatar: 'https://picsum.photos/id/100/150',
      },
    ],
    followers: [
      {
        _id: uuid(),
        fullName: 'Vineet Singh',
        username: 'vineetsingh',
        profileAvatar: 'https://picsum.photos/id/1005/150',
      },
      {
        _id: uuid(),
        fullName: 'Vivek Kushal',
        username: 'vivekkushal',
        profileAvatar: 'https://picsum.photos/id/1012/150',
      },
    ],
  },
  {
    _id: uuid(),
    fullName: 'Vineet Singh',
    username: 'vineetsingh',
    password: 'vineet123',
    bio: 'Hey there, Vineet here',
    website: 'https://www.nike.com',
    profileAvatar: 'https://picsum.photos/id/1005/150',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        fullName: 'Vivek Kushal',
        username: 'vivekkushal',
        profileAvatar: 'https://picsum.photos/id/1012/150',
      },
      {
        _id: uuid(),
        fullName: 'Tushar Choudhary',
        username: 'tusharchoudhary',
        profileAvatar: 'https://picsum.photos/id/1009/150',
      },
    ],
    followers: [
      {
        _id: uuid(),
        fullName: 'Shashank Singh',
        username: 'shashanksingh',
        profileAvatar: 'https://picsum.photos/id/100/150',
      },
    ],
  },
  {
    _id: uuid(),
    fullName: 'Shashank Singh',
    username: 'shashanksingh',
    password: 'shashank123',
    bio: 'Hello Fritter, Shashank here!',
    website: 'https://www.wikipedia.com',
    profileAvatar: 'https://picsum.photos/id/100/150',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        fullName: 'Vivek Kushal',
        username: 'vivekkushal',
        profileAvatar: 'https://picsum.photos/id/1012/150',
      },
      {
        _id: uuid(),
        fullName: 'Vineet Singh',
        username: 'vineetsingh',
        profileAvatar: 'https://picsum.photos/id/1005/150',
      },
    ],
    followers: [
      {
        _id: uuid(),
        fullName: 'Tushar Choudhary',
        username: 'tusharchoudhary',
        profileAvatar: 'https://picsum.photos/id/1009/150',
      },
      {
        _id: uuid(),
        fullName: 'Vineet Singh',
        username: 'vineetsingh',
        profileAvatar: 'https://picsum.photos/id/1005/150',
      },
    ],
  },
];
