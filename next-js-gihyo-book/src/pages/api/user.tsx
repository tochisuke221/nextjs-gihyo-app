import useSWR from 'swr'

type User = {
  name: string
}

const fetcher = () => {}

const Profile = () => {
  const { data, error } = useSWR<User>('/api/user', fetcher)

  if (error) return <div>failed to load</div>
  return <div>hello {data.name}!</div>
}

export default Profile
