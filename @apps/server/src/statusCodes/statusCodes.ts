// import { Response } from "express";

// class HttpResponse {
//   static success(res:Response, data = {}, message = "") {
//     return res.status(200).json({ message, data });
//   }

//   static created(res:Response, data = {}, message = "") {
//     return res.status(201).json({ message, data });
//   }

//   static notFound(res:Response, message = "Resource not found") {
//     return res.status(404).json({ message });
//   }

//   static error(res:Response, message = "Something went wrong", statusCode = 500) {
//     return res.status(statusCode).json({ message });
//   }
// };

// export default HttpResponse;

// export const stausCodes = {
//   OK: 200,
//   CREATED: 201,
//   BAD_REQUEST: 400,
//   UNAUTHORIZED: 401,
//   FORBIDDEN: 403,
//   NOT_FOUND: 404,
//   INTERNAL_SERVER_ERROR: 500,
// };

// function sendResponse(res, statusCode, data = {}, message = "") {
//   return res.status(statusCode).json({
//     message: message || data.message || "Request processed successfully",
//     data,
//   });
// };
