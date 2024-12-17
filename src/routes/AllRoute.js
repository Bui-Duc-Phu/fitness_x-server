const errhandlerException = require("../middleware/errhandelExcetion");


const AllRouter  = (app) =>{
    app.use("/auth", authRouter);
    app.use(errhandlerException);
}
module.exports = AllRouter