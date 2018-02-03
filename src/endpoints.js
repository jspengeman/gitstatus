export const getRepoByUser = async (user, repo) => {
  return fetch(`https://api.github.com/repos/${user}/${repo}`)
    .then(x => x.json())
    .then(x => console.log(x))
    .catch(_ => {})
}