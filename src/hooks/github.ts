import { useGetUserReposQuery } from '$redux/api/github.api'

const useGithub = () => {
  const getUserRepos = (username: string) => {
    const repos = useGetUserReposQuery(username).data
    return repos
  }
  return {
    getUserRepos,
  }
}

export default useGithub
