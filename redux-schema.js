{
  user : {
    isFetching,
    error,
    userName
  },
  repos : {
    [userName] : {
      [repo] : {
        isFetching,
        error,
        readme
      }
    }
  }
}