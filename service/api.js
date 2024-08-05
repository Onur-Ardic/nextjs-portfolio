export async function getRepos() {
  const res = await fetch('https://api.github.com/users/Onur-Ardic/repos')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export async function getMediumUser() {
  const res = await fetch('https://api.medium.com/v1/me/', {
    headers: {
      Authorization: `Bearer ${process.env.MEDIUM_ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    },
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export async function getArticles() {
  const user = await getMediumUser()
  const userId = user.data.id // Bu, kullanıcı ID'sini almak için `getMediumUser`'dan dönen veri yapısına bağlı olarak değişebilir

  const res = await fetch(`https://api.medium.com/v1/users/${userId}/publications`, {
    headers: {
      Authorization: `Bearer ${process.env.MEDIUM_ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    },
  })

  if (!res.ok) {
    throw new Error('Failed to fetch articles')
  }

  return res.json()
}
