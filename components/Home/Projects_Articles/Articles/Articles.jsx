import { getArticles } from '@/service/api'
import ArticlesSlide from './ArticlesSlide'

const Articles = async () => {
  const articlesData = await getArticles()

  return <ArticlesSlide articlesData={articlesData} />
}

export default Articles
