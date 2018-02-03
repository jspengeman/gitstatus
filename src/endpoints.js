import { task } from 'folktale/concurrency/task'
import Maybe from 'folktale/maybe'
import { identity, pick } from 'ramda'

export const getRepoByUser = (user, repo) => {
  return fetch(`https://api.github.com/repos/${user}/${repo}`)
    .then(x => x.json())
    .then(Maybe.Just)
    .catch(Maybe.Nothing())
}

export const parseRepoResponse = pick(['full_name', 'description'])
