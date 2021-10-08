# Structure - mybooks

/api/users

/api/login - return token - will be stored in frontend through state

/api/books

/api/books&tag=(tag name)

# Routes - for site

get user - /api/users/:userId/profile 

get cart - /api/users/:userId/cart - GET

Add to cart - /api/users/:userId/cart - POST

  get all books - /api/users/:userId/order - GET

  get single book - /api/users/:userId/order/:orderId - GET

  create an order for book - /api/users/:userID/order - POST

  location finder - /api/users/:userId/finder - POST

  update location - /api/users/:userId/locaiton

