import { within, render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from './App';
import Layout from "./Layout";
import DisplayBlog from "./DisplayBlog";

beforeEach(()=>{
  const fetchedPosts = {results: [
    {
        "timestamp": "2021-03-11T20:17:52.845Z",
        "_id": "602c53c037eaa204f0398587",
        "title": "MOAR testing!",
        "text": "Testing to see if updating will work",
        "published": true,
        "user": "6028608de8b0a302a7fe527d",
        "__v": 0
    },
    {
        "timestamp": "2021-02-23T19:46:08.934Z",
        "_id": "60332972fd31ac0209e3b3c1",
        "title": "SPAM!",
        "text": "Just testing yo",
        "published": true,
        "user": "6031946d2dbc1701f651becf",
        "__v": 0
    },
    {
        "timestamp": "2021-03-11T21:50:09.531Z",
        "_id": "60332d32199b300218632137",
        "title": "yyyyyyy",
        "text": "gremmies are sick!",
        "published": true,
        "user": "6031946d2dbc1701f651becf",
        "__v": 0
    },
    {
        "timestamp": "2021-03-24T00:55:56.897Z",
        "_id": "6046fe7985f97c01bcf7f45d",
        "title": "add comments",
        "text": "yes it does!",
        "published": true,
        "user": "6031946d2dbc1701f651becf",
        "__v": 0
    },
    {
        "timestamp": "2021-03-24T00:55:56.897Z",
        "_id": "605aa01faa464a01ec82a27c",
        "title": "Hi everyone",
        "text": "yugioh is greaet!",
        "published": true,
        "user": "6031946d2dbc1701f651becf",
        "__v": 0
    }
]};
  const fetchedComments = [
    {
        "timestamp": "2021-03-08T05:08:28.909Z",
        "_id": "604059f474ca5103583b72b7",
        "text": "boogers!",
        "user": {
            "_id": "6031946d2dbc1701f651becf",
            "username": "pulgo@gmail.com",
            "usertag": "pulgo",
            "password": "$2b$10$TQrl7fJve2q52HG0bykwYufUZl8GSJaG9pVb38Jc4lVT0sJYxzJe6",
            "admin": true,
            "__v": 0
        },
        "post": "602c53c037eaa204f0398587",
        "__v": 0
    },
    {
        "timestamp": "2021-03-08T02:59:59.022Z",
        "_id": "60405b24fc93100372dc2842",
        "text": "yugioh!",
        "user": {
            "_id": "6031946d2dbc1701f651becf",
            "username": "pulgo@gmail.com",
            "usertag": "pulgo",
            "password": "$2b$10$TQrl7fJve2q52HG0bykwYufUZl8GSJaG9pVb38Jc4lVT0sJYxzJe6",
            "admin": true,
            "__v": 0
        },
        "post": "602c53c037eaa204f0398587",
        "__v": 0
    },
    {
        "timestamp": "2021-03-04T23:31:06.454Z",
        "_id": "60416e23b9c79703190e4a81",
        "text": "arsaraerawrawrwa",
        "user": {
            "_id": "6031946d2dbc1701f651becf",
            "username": "pulgo@gmail.com",
            "usertag": "pulgo",
            "password": "$2b$10$TQrl7fJve2q52HG0bykwYufUZl8GSJaG9pVb38Jc4lVT0sJYxzJe6",
            "admin": true,
            "__v": 0
        },
        "post": "60416dfbb9c79703190e4a80",
        "__v": 0
    },
    {
        "timestamp": "2021-03-04T23:31:06.454Z",
        "_id": "60416e31b9c79703190e4a83",
        "text": "waeweaweaeaaa",
        "user": {
            "_id": "6031946d2dbc1701f651becf",
            "username": "pulgo@gmail.com",
            "usertag": "pulgo",
            "password": "$2b$10$TQrl7fJve2q52HG0bykwYufUZl8GSJaG9pVb38Jc4lVT0sJYxzJe6",
            "admin": true,
            "__v": 0
        },
        "post": "60416dfbb9c79703190e4a80",
        "__v": 0
    },
    {
        "timestamp": "2021-03-09T05:09:09.746Z",
        "_id": "60416f09b9c79703190e4a84",
        "text": "ok this ??",
        "user": {
            "_id": "6031946d2dbc1701f651becf",
            "username": "pulgo@gmail.com",
            "usertag": "pulgo",
            "password": "$2b$10$TQrl7fJve2q52HG0bykwYufUZl8GSJaG9pVb38Jc4lVT0sJYxzJe6",
            "admin": true,
            "__v": 0
        },
        "post": "60332d32199b300218632137",
        "__v": 0
    },
    {
        "timestamp": "2021-03-11T21:50:09.533Z",
        "_id": "60470ad0f4b3af01ce5a1a9b",
        "text": "changed comment",
        "user": {
            "_id": "6031946d2dbc1701f651becf",
            "username": "pulgo@gmail.com",
            "usertag": "pulgo",
            "password": "$2b$10$TQrl7fJve2q52HG0bykwYufUZl8GSJaG9pVb38Jc4lVT0sJYxzJe6",
            "admin": true,
            "__v": 0
        },
        "post": "6046fe7985f97c01bcf7f45d",
        "__v": 0
    },
    {
        "timestamp": "2021-03-11T20:17:52.848Z",
        "_id": "60470b0ff4b3af01ce5a1a9d",
        "text": "yugioh is cool!",
        "user": {
            "_id": "6031946d2dbc1701f651becf",
            "username": "pulgo@gmail.com",
            "usertag": "pulgo",
            "password": "$2b$10$TQrl7fJve2q52HG0bykwYufUZl8GSJaG9pVb38Jc4lVT0sJYxzJe6",
            "admin": true,
            "__v": 0
        },
        "post": "6046fe7985f97c01bcf7f45d",
        "__v": 0
    },
    {
        "timestamp": "2021-03-09T05:09:09.746Z",
        "_id": "60470b36f4b3af01ce5a1a9e",
        "text": "sdfshsdhs",
        "user": {
            "_id": "6031946d2dbc1701f651becf",
            "username": "pulgo@gmail.com",
            "usertag": "pulgo",
            "password": "$2b$10$TQrl7fJve2q52HG0bykwYufUZl8GSJaG9pVb38Jc4lVT0sJYxzJe6",
            "admin": true,
            "__v": 0
        },
        "post": "604410f3e752e306511ab4e4",
        "__v": 0
    },
    {
        "timestamp": "2021-03-12T00:48:33.591Z",
        "_id": "604ad33dcbbcfd0355d8086d",
        "text": "dfsfdsfsdfsfsfs",
        "user": {
            "_id": "6028608de8b0a302a7fe527d",
            "username": "gman@gmail.com",
            "usertag": "gman1",
            "password": "$2b$10$IBQWyV9F.PfZdeHfQciY9.Y5/4Zx65wxKw7AW7tcA8l8hV.oKfx7G",
            "admin": false,
            "__v": 0
        },
        "post": "602c53c037eaa204f0398587",
        "__v": 0
    }
];

  fetch.mockImplementationOnce(()=>fetchedPosts);
  fetch.mockImplementationOnce(()=>fetchedComments);
})

test('renders initial header layout', () => {
  render(<App />);
  const loginBtn = screen.getByText("Login/Register");
  expect(loginBtn).toBeInTheDocument();
  
});

test("displays initial posts and comments to the page", async ()=>{
  //render
  render(<App />);

  expect(screen.getByRole("loading-note")).toBeInTheDocument;
  // expect(fetch).toHaveBeenCalledTimes(1);

  let posts = await screen.findAllByRole("post");
  expect(posts).toHaveLength(5);
  let comments = await screen.findAllByRole("comment");
  expect(comments).toHaveLength(6);

})
  //now test that comments are within the posts
test("comments appear under posts", async ()=>{
  render( <App />);
  const postOne = await screen.findByTestId("post-1");
  expect(postOne).toBeInTheDocument;
  const comments = await within(postOne).findAllByRole("comment");
  expect(comments.length).toBe(3);

});

/*
test separately as layout functions, etc
userEvent.click(loginBtn);
  expect(screen.getByTestId("login-form")).toBeInTheDocument();
  */

 