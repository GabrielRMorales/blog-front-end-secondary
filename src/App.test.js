import { within, render, screen, getDefaultNormalizer } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from './App';
import Layout from "./Layout";
import DisplayBlog from "./DisplayBlog";


  const fetchedUsers = [{
    "_id": "6028608de8b0a302a7fe527d",
    "username": "gman@gmail.com",
    "usertag": "gman1",
    "admin": false
  },{
    "_id": "6031946d2dbc1701f651becf",
    "username": "pulgo@gmail.com",
    "usertag": "pulgo",
    "admin": true
  }]

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

describe("initial layout", ()=>{ 

beforeEach(()=>{
  fetch.mockImplementationOnce(()=>Promise.resolve({json: ()=>fetchedPosts}));
  fetch.mockImplementationOnce(()=>Promise.resolve({json: ()=>fetchedComments}));
  render(<App />);
})

test('renders initial header layout', () => {
  //expect(localStorage.getItem).toBeCalledWith(""); --change this later and also
  //change the comments/controls test to expect localStorage to have a token
 
  const loginBtn = screen.getByText("Login/Register");
  expect(loginBtn).toBeInTheDocument();
  
});

test("displays initial posts and comments to the page", async ()=>{

  let posts = await screen.findAllByRole("post");
  expect(posts).toHaveLength(5);
  let comments = await screen.findAllByRole("comment");
  expect(comments).toHaveLength(6);

})
  //now test that comments are within the posts
test("comments appear under posts", async ()=>{
  
  const postOne = await screen.findByTestId("post-1");
  expect(postOne).toBeInTheDocument;
  const comments = await within(postOne).findAllByRole("comment");
  expect(comments.length).toBe(3);

});

describe("logging in functionality",()=>{ 

test("header forms for logging in",async ()=>{
    //don't forget to test close form buttons
  //expect localStorage to be empty
  const loginBtn = screen.getByRole("registerOrLoginBtn");
  expect(screen.getByTestId("register-or-login-form")).toHaveStyle("display: none");
  expect(screen.getByTestId("login-form")).toHaveStyle("display: none");
  userEvent.click(loginBtn);
  expect(screen.getByTestId("register-or-login-form")).toHaveStyle("display: block");
  //check what it was submitted with
  userEvent.click(screen.getByTestId("register-or-login-submit"));
  //expect fetch to have been called?
  //fetch.mockImplementationOnce(()=>({"registered": true}));

  //
  const registerOrLoginForm = screen.getByTestId("register-or-login-form");
  expect(registerOrLoginForm).toHaveStyle("display: none");
  expect(screen.getByTestId("login-form")).toHaveStyle("display: block");

});


test("logging in adds reply buttons",async ()=>{
  
  userEvent.click(screen.getByRole("registerOrLoginBtn"));
  userEvent.click(screen.getByTestId("register-or-login-submit"));
  fetch.mockImplementationOnce(()=>Promise.resolve({json: ()=>({
    user: {
      "_id": "6028608de8b0a302a7fe527d",
      "username": "gman@gmail.com",
      "usertag": "gman1",
      "admin": false
    },
    token: "token",
    authenticationCode: 1
    })

  }));
   //check what it was submitted with?
  userEvent.click(screen.getByTestId("login-submit"));
  expect(fetch.mock.calls.length).toEqual(3);
  expect(screen.getByTestId("login-form")).toHaveStyle("display: none");
  
  //expect fetch to have been called?
  expect(await screen.findAllByRole("reply")).toHaveLength(5);
  let post = await within(await screen.findByTestId("post-1")).findByRole("reply");
  expect(post).toBeInTheDocument();
  
})

test("logging in adds edit and delete comment buttons", async ()=>{
   userEvent.click(screen.getByRole("registerOrLoginBtn"));
  userEvent.click(screen.getByTestId("register-or-login-submit"));
  fetch.mockImplementationOnce(()=>Promise.resolve({json: ()=>({
      user: {
        "_id": "6028608de8b0a302a7fe527d",
        "username": "gman@gmail.com",
        "usertag": "gman1",
        "admin": false
      },
      token: "token",
      authenticationCode: 1
    })
  })
  );
  userEvent.click(screen.getByTestId("login-submit")); 
  expect(await screen.findByRole("edit-comment")).toBeInTheDocument();
  expect(await screen.findByRole("delete-comment")).toBeInTheDocument();

});

});

describe("logging out functionality", ()=>{
  // fetch.mockImplementationOnce(()=>Promise.resolve({json: ()=>fetchedPosts}));
  // fetch.mockImplementationOnce(()=>Promise.resolve({json: ()=>fetchedCommments}));
  //render(<App/>);
  test("that logout button exists",async ()=>{
    userEvent.click(screen.getByRole("registerOrLoginBtn"));
    userEvent.click(screen.getByTestId("register-or-login-submit"));
    fetch.mockImplementationOnce(()=>Promise.resolve({json: ()=>({
          user: {
            "_id": "6028608de8b0a302a7fe527d",
            "username": "gman@gmail.com",
            "usertag": "gman1",
            "admin": false
          },
          token: "token",
          authenticationCode: 1

        })
      })
    );
    userEvent.click(screen.getByTestId("login-submit"));
    expect(await screen.findByRole("logout-button")).toBeInTheDocument();
    expect(await screen.findAllByRole("logout-button")).toHaveLength(1);
  });

   //test log out button works
  test("that log out button works",async ()=>{
    userEvent.click(screen.getByRole("registerOrLoginBtn"));
    userEvent.click(screen.getByTestId("register-or-login-submit"));
    fetch.mockImplementationOnce(()=>Promise.resolve({json: ()=>({
          user: {
            "_id": "6028608de8b0a302a7fe527d",
            "username": "gman@gmail.com",
            "usertag": "gman1",
            "admin": false
          },
          token: "token",
          authenticationCode: 1

        })
      })
    );
    userEvent.click(screen.getByTestId("login-submit"));
    fetch.mockImplementationOnce(()=>Promise.resolve({json: ()=>"Logged out" })
    );
    expect(await screen.findByRole("logout-button")).toBeInTheDocument();
    userEvent.click(screen.getByRole("logout-button"));
    expect(await screen.findByRole("registerOrLoginBtn")).toBeInTheDocument();
    //test that reply, edit, and delete buttons don't exist
    expect(screen.queryAllByRole("reply")).toHaveLength(0)
    expect(screen.queryByRole("edit-comment")).toBe(null);
    expect(screen.queryByRole("delete-button")).toBe(null);

  });
    

})

//add test for getting the register form (registered should be false)

//add test for when loading page is already at authentication code 1


}); //end of describe "initial layout"



describe("blog functionality",()=>{

//test that edit/delete are only for correct comments

//test the reply button

//test the edit comment button

//test the delete comment button



})

describe("unsuccessful fetch calls",()=>{
  test("that loading note appears in lieu of posts and comments",()=>{
    //expect(screen.getByRole("loading-note")).toBeInTheDocument;
  })

})




 