import "express";

declare global {
  namespace Express {
    interface Request {
      userId?: string; 
    }
    interface Decoded {
      userId?: string
    }
  }
}

