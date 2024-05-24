export type Book = {
  title: string
  author: string
  price: string
}

export type Favourite = Book & {
  id?: string
  rating: number
  userId: string
  createdAt?: Date
  updatedAt?: Date
}
