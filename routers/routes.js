const userRouter = require("./userRouter");
const nameRouter = require("./nameRouter");
const kalemaRouter = require("./kalemaRouter");

const routers = [
  {
    path: "/api/user",
    handler: userRouter,
  },
  {
    path: "/api/allah-name",
    handler: nameRouter,
  },
  {
    path: "/api/kalema",
    handler: kalemaRouter,
  },

  // {
  //     path : '/',
  //     handler : (req,res) =>{
  //         res.send('Server is ready!');
  //     }
  // }
];

const applyRouter = (app) => {
  routers.map((r) => {
    if (r.path === "/") {
      app.get(r.path, r.handler);
    } else {
      app.use(r.path, r.handler);
    }
  });
};

module.exports = applyRouter;
