// khi throw ở 1 middleware nào đó thì nó sẽ nhày vào đây để trả respone báo lỗi về cho client


const errhandlerException =  (err, req, res, next) => {
    console.error(err)
    errorMessages = err.message
    if(err.errors) {
      var errorMessages = (err.errors.map(error => error.message))[0];
    }
    const status = err.statusCode || 500;
    const message = errorMessages || 'Internal Server Error'; 
    res.status(status).json({
        success: false,
        status: status,
        message: message,
    });
  };
  
module.exports = errhandlerException;
