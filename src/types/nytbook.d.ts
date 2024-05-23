type ISBN = {
  isbn10: string
  isbn13: string
}

type RankHistory = {
  primary_isbn10: string
  primary_isbn13: string
  rank: number
  list_name: string
  display_name: string
  published_date: string
  bestsellers_date: string
  weeks_on_list: number
  ranks_last_week: any
  asterisk: number
  dagger: number
}

type Review = {
  book_review_link: string
  first_chapter_link: string
  sunday_review_link: string
  article_chapter_link: string
}

type Result = {
  title: string
  description: string
  contributor: string
  author: string
  contributor_note: string
  price: number
  age_group: string
  publisher: string
  isbns: ISBN[]
  ranks_history: RankHistory[]
  reviews: Review[]
}

export type NYTResponse = {
  status: string
  copyright: string
  num_results: number
  results: Result[]
}
