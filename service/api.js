export async function getRepos() {
  const res = await fetch('https://api.github.com/users/Onur-Ardic/repos')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
