import { useRouter } from 'next/router'
import NewsCard from './NewsCard'
import Pagination from './Pagination'
import { useEffect, useState } from 'react'

const maxContentNum = 3

export default function NewsList({ news }) {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1)
  const [start, setStart] = useState(1)

  const totalPage = Math.ceil(news.length / maxContentNum)

  useEffect(() => {
    const page = parseInt(router.query.page) || 1
    if (page > totalPage || page < 1 || isNaN(page)) {
      router.push('/news')
    }
    let startPage = Math.max(page - 1, 1)

    if (startPage > totalPage - 2) {
      startPage = totalPage - 2
    }
    setCurrentPage(page)
    setStart(startPage)

    window.scrollTo(0, 0);
  }, [router.query.page])

  const handlePageChange = (pageNum) => {
    router.push(`/news/?page=${pageNum}`, undefined, { shallow: true })
  }

  const getData = () => {
    const startIndex = (currentPage - 1) * maxContentNum
    const endPosition = startIndex + maxContentNum
    return news.slice(startIndex, endPosition)
  }

  return (
    <div className="d-flex flex-column align-items-center mt-4 pb-4">
      {getData().map((content) => (
        <NewsCard key={content._id} {...content} />
      ))}

      <Pagination
        startPage={start}
        total={totalPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  )
}
